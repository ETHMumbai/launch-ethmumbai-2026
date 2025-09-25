// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// --- Load environment variables ---
dotenv.config();
// dotenv.config();
console.log("DEBUG: MONGODB_URI =", process.env.MONGODB_URI);


// --- Setup ---
const app = express();
app.use(cors());
app.use(express.json());

// --- MongoDB Connection ---
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// --- Schema & Model ---
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
}); 

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

// --- Routes ---
app.post("/subscribe", async (req, res) => {
  try {
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
    res.json({ status: "success", message: "Subscribed successfully!" });
  } catch (err) {
    console.error("❌ Subscription error:", err);
    res.status(500).json({ status: "error", message: "Server error. Try again later." });
  }
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
