import mongoose from "mongoose";

let conn = null;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method not allowed" });
  }

  try {
    if (!conn) {
      conn = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    const SubscriberSchema = new mongoose.Schema({
      email: { type: String, required: true, unique: true },
      createdAt: { type: Date, default: Date.now },
    });

    const Subscriber = mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);

    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.json({ status: "error", message: "Invalid email address." });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.json({ status: "duplicate", message: "Email already subscribed." });
    }

    await Subscriber.create({ email });
    res.json({ status: "success", message: "Subscribed successfully!" });

  } catch (err) {
    console.error("❌ Subscription error:", err);
    res.status(500).json({ status: "error", message: "Server error. Try again later." });
  }
}
