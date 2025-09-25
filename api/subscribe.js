// api/subscribe.js
import mongoose from "mongoose";

let conn = null; // cached connection across requests

// --- MongoDB Connection ---
const connectToDatabase = async () => {
  if (conn) return conn;

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables");
  }

  conn = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("✅ MongoDB connected");
  return conn;
};

// --- Schema & Model (define once per Lambda) ---
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);

// --- API Handler ---
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method not allowed" });
  }

  try {
    await connectToDatabase();

    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.json({ status: "error", message: "Invalid email address." });
    }

    // Check if already subscribed
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.json({ status: "duplicate", message: "Email already subscribed." });
    }

    // Save new subscriber
    await Subscriber.create({ email });
    return res.json({ status: "success", message: "Subscribed successfully!" });
  } catch (err) {
    console.error("❌ Subscription error:", err);
    return res.status(500).json({ status: "error", message: "Server error. Try again later." });
  }
}
