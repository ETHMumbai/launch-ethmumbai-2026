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
    console.error("❌ Subscription error:", err)import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define MONGODB_URI in your .env file");
}

// --- Connection helper ---
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// --- Schema & Model ---
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Subscriber = mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);

// --- API Handler ---
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      if (!email || !email.includes("@")) {
        return res.json({ status: "error", message: "Invalid email address." });
      }

      await dbConnect();

      const existing = await Subscriber.findOne({ email });
      if (existing) {
        return res.json({ status: "duplicate", message: "Email already subscribed." });
      }

      await Subscriber.create({ email });
      return res.json({ status: "success", message: "Subscribed successfully!" });
    } catch (err) {
      console.error("❌ Subscription error:", err);
      return res.status(500).json({ status: "error", message: "Server error. Try again later." });
    }
  } else {
    return res.status(405).json({ status: "error", message: "Method not allowed" });
  }
}
;
    return res.status(500).json({ status: "error", message: "Server error. Try again later." });
  }
}
