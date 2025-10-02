import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import DesktopBG from "../assets/desktop-bg.webp";
import PhoneBG from "../assets/phone-bg.webp";
import EthMumbaiLogo from "../assets/ethmumbai-logo-scaled.png";
import EthMumbaiFullLogo from "../assets/ethmumbai-full.png";
import TwitterLogo from "../assets/x-logo.png";
import FarcasterLogo from "../assets/farcaster-logo.png";
import TelegramLogo from "../assets/telegram-logo.png";

export default function Website() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  //  Submit email using hidden form (bypasses CORS)
  const handleSubscribe = async () => {
  if (!email.trim() || !email.includes("@")) {
    setStatus("Please enter a valid email.");
    return;
  }

  setLoading(true);
  setStatus(null);

  try {
    const response = await fetch(
      "https://ethmumbai-backend.vercel.app/api/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (response.ok) {
      const data = await response.json(); // optional if your backend returns JSON
      setStatus("Thanks for joining! You'll be the first to know when tickets go live!");
      setEmail("");
    } else {
      const errorData = await response.json().catch(() => null);
      setStatus(errorData?.message || "Something went wrong.");
    }
  } catch (err) {
    console.error(err);
    setStatus("Something went wrong.");
  } finally {
    setLoading(false);
  }
};



  return (
    <div
      className="relative min-h-screen w-full bg-no-repeat bg-cover bg-center overflow-y-auto"
      style={{ backgroundImage: `url(${PhoneBG})` }}
    >
      <style>
        {`
          @media (min-width: 640px) {
            .hero-bg {
              background-image: url(${DesktopBG});
            }
          }
        `}
      </style>

      <div className="hero-bg min-h-screen w-full flex flex-col">
        {/* Header Section */}
        <header
          className="
            absolute top-6 left-1/2 -translate-x-1/2
            sm:top-6 sm:left-6 sm:translate-x-0
            flex items-center z-50
          "
        >
          <img
            src={EthMumbaiFullLogo}
            alt="ETHMumbai Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
          />
        </header>

        {/* Top-right Social Menu (Desktop only) */}
        <div className="absolute top-6 right-6 z-50 hidden md:flex gap-4">
          <a
            href="https://x.com/ethmumbai" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            <img src={TwitterLogo} alt="Twitter" className="w-5 h-5" />
          </a>
          <a
            href="https://farcaster.xyz/ethmumbai" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            <img src={FarcasterLogo} alt="Farcaster" className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/ethmumbai" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            <img src={TelegramLogo} alt="Telegram" className="w-5 h-5" />
          </a>
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-start text-center text-white px-4 pt-24 pb-60 flex-grow">
          {/* Hero Heading */}
          <h1
            className="
              best-h1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl
              leading-tight tracking-[-0.04em]
              drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
              max-w-screen-lg
            "
          >
            BEST Conference & Hackathon
          </h1>

          {/* Date */}
          <p className="inter-font mt-4 text-xl sm:text-2xl md:text-3xl font-medium font-interTight">
            12 – 15 March 2026
          </p>

          {/* ETHMumbai logo (only on small screens, below date) */}
          <div className="mt-6 sm:hidden">
            <img
              src={EthMumbaiLogo}
              alt="ETHMumbai Logo Mobile"
              className="mx-auto object-contain"
            />
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="https://tally.so/r/nGW5Bz" target="_blank" rel="noopener noreferrer">
              <button className="cta-button bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
                Apply to Speak
              </button>
            </a>
            <a href=" https://tally.so/r/3NkdGb" target="_blank" rel="noopener noreferrer">
              <button className="cta-button bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
                Apply to Sponsor
              </button>
            </a>
          </div>

          {/* Newsletter Signup */}
          <div
            className="
              w-full max-w-lg px-4
              mt-12 md:mt-0
              md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2
            "
          >
            <div className="inter-font flex flex-col gap-2 w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                <input
                  id="email"
                  type="email"
                  placeholder="Your BEST email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="
                    flex-grow h-12 px-4 rounded-lg
                    text-black focus:outline-none
                    w-full bg-white
                    disabled:opacity-70
                    text-center placeholder:text-center
                  "
                />
                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="
                    flex items-center justify-center
                    h-12 px-2
                    w-full sm:w-[160px]
                    border border-white
                    rounded-full   
                    text-white font-medium
                    bg-[#E91F25]
                    hover:bg-white hover:text-red-600
                    transition
                    disabled:opacity-70
                    whitespace-nowrap
                  "
                >
                  {loading ? "..." : "Join the Waitlist"}
                </button>
              </div>
              {status && <p className="mt-2 text-sm text-white">{status}</p>}
            </div>
          </div>

          {/* Social Icons on Small Screens */}
          <div className="mt-14 flex md:hidden gap-4 justify-center">
            <a
              href="https://x.com/ethmumbai" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
            >
              <img src={TwitterLogo} alt="Twitter" className="w-5 h-5" />
            </a>
            <a
              href="https://farcaster.xyz/ethmumbai" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
            >
              <img src={FarcasterLogo} alt="Farcaster" className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/ethmumbai" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
            >
              <img src={TelegramLogo} alt="Telegram" className="w-5 h-5" />
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
