import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import DesktopBG from "../assets/desktop-bg.png";
import EthMumbaiLogo from "../assets/ethmumbai-logo.png";
import TwitterLogo from "../assets/x-logo.png";
import FarcasterLogo from "../assets/farcaster-logo.png";
import TelegramLogo from "../assets/telegram-logo.png";

export default function Website() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="hero-bg relative min-h-screen w-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${DesktopBG})` }}
    >
      {/* Header Section */}
      <header className="absolute top-3 left-3 sm:top-6 sm:left-6 flex items-center z-50">
        <div className="bg-white rounded-full shadow-md px-2.5 py-1 flex items-center gap-1.5 sm:px-4 sm:py-2 sm:gap-2">
          <img
            src={EthMumbaiLogo}
            alt="ETHMumbai Logo"
            className="h-5 w-5 sm:h-8 sm:w-8 object-contain"
          />
          <span className="text-red-600 font-bold text-sm sm:text-lg">
            ETHMUMBAI
          </span>
        </div>
      </header>


      {/* Top-right Social Menu */}
      <div className="absolute top-6 right-6 z-50">
        {/* Desktop view */}
        <div className="hidden md:flex gap-4">
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            <img src={TwitterLogo} alt="Twitter" className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            <img src={FarcasterLogo} alt="Farcaster" className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            <img src={TelegramLogo} alt="Telegram" className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile view */}
        <div className="md:hidden relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {open && (
            <div className="absolute top-14 right-0 bg-white rounded-lg shadow-lg flex flex-col items-start gap-4 p-4 w-48 z-50">
              <a href="#" className="flex items-center gap-2 hover:text-red-600">
                <img src={TwitterLogo} alt="Twitter" className="w-5 h-5" />
                Twitter
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-red-600">
                <img src={FarcasterLogo} alt="Farcaster" className="w-5 h-5" />
                Farcaster
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-red-600">
                <img src={TelegramLogo} alt="Telegram" className="w-5 h-5" />
                Telegram
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-start min-h-screen text-center text-white px-4 pt-24">
        {/* Hero Heading */}
        <h1
          className="
            best-h1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            leading-tight tracking-[-0.04em]
            drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            max-w-screen-lg
          "
        >
          BEST Conference & Hackathon
        </h1>

        {/* Date */}
        <p className="mt-4 text-2xl md:text-3xl font-medium">
          12 – 15 March 2026
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            Apply to Speak
          </button>
          <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            Apply to Sponsor
          </button>
        </div>

        {/* Newsletter Signup */}
        {/* Newsletter Signup */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-lg px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
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
    w-[105px] h-12
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

      </div>
    </div>
  );
}
