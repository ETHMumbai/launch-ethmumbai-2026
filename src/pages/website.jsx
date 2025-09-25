import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import DesktopBG from "../assets/desktop-bg.png";
import PhoneBG from "../assets/phone-bg.png";
import EthMumbaiLogo from "../assets/ethmumbai-logo-scaled.png";
import TwitterLogo from "../assets/x-logo.png";
import FarcasterLogo from "../assets/farcaster-logo.png";
import TelegramLogo from "../assets/telegram-logo.png";

export default function Website() {
  const [open, setOpen] = useState(false);

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
    absolute top-3 left-1/2 -translate-x-1/2
    sm:top-6 sm:left-6 sm:translate-x-0
    flex items-center z-50
  "
        >
          <div className="bg-white rounded-full shadow-md px-3 py-2 sm:px-4 sm:py-2 flex items-center gap-2">
            <img
              src={EthMumbaiLogo}
              alt="ETHMumbai Logo"
              className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
            />
            <span className="wordmark text-red-600 font-extrabold text-base sm:text-lg whitespace-nowrap">
              ETHMUMBAI
            </span>
          </div>
        </header>


        {/* Top-right Social Menu (Desktop only) */}
        <div className="absolute top-6 right-6 z-50 hidden md:flex gap-4">
          <a
            href="https://x.com/ethmumbai"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            <img src={TwitterLogo} alt="Twitter" className="w-5 h-5" />
          </a>
          <a
            href="https://farcaster.xyz/ethmumbai"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            <img src={FarcasterLogo} alt="Farcaster" className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/ethmumbai"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            <img src={TelegramLogo} alt="Telegram" className="w-5 h-5" />
          </a>
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-start text-center text-white px-4 pt-24 pb-16 flex-grow">
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
              className=" mx-auto object-contain"
            />
          </div>


          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="cta-button bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Apply to Speak
            </button>
            <button className="cta-button bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Apply to Sponsor
            </button>
          </div>

          {/* Newsletter Signup */}
          <div
            className="
    w-full max-w-lg px-4
    mt-12 md:mt-0          /* margin only on small screens */
    md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2
  "
          >
            <div className="inter-font flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
              <input
                type="email"
                placeholder="Your BEST email address..."
                className="
        flex-grow h-12 px-4 rounded-lg
        text-black focus:outline-none
        w-full bg-white
      "
              />
              <button
                className="
        flex items-center justify-center
        h-12
        w-full sm:w-[105px]   /* full width only on mobile */
        border border-white rounded-lg
        text-white font-medium
        bg-[#E91F25]
        hover:bg-white hover:text-red-600
        transition
      "
              >
                Subscribe
              </button>
            </div>
          </div>


          {/* Social Icons on Small Screens (Below Newsletter) */}
          <div className="mt-14 flex md:hidden gap-4 justify-center">
            <a
              href="https://x.com/ethmumbai"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
            >
              <img src={TwitterLogo} alt="Twitter" className="w-5 h-5" />
            </a>
            <a
              href="https://farcaster.xyz/ethmumbai"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
            >
              <img src={FarcasterLogo} alt="Farcaster" className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/ethmumbai"
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
