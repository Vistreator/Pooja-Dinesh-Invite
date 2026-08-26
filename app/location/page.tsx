"use client";
import { useEffect, useState } from "react";
import { Dancing_Script, Roboto } from "next/font/google";

// Elegant + readable fonts
const dancing = Dancing_Script({ subsets: ["latin"], weight: "700" });
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export default function Location() {
  const weddingDate = new Date("2026-09-17T00:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center 
                    bg-gradient-to-b from-purple-100 via-purple-300 to-purple-500 
                    px-4 overflow-hidden text-center">

      {/* Floating hearts + glitter (keep your existing ones) */}

      <div className="w-full max-w-sm mx-auto space-y-6 animate-fade">
        {/* Reception */}
        <h2 className={`${dancing.className} text-3xl sm:text-4xl font-bold text-purple-900 drop-shadow underline`}>
          Reception
        </h2>
        <p className={`${roboto.className} text-xl sm:text-2xl italic text-purple-800 font-semibold`}>
          🗓️ September 16, 2026
        </p>
        <p className={`${roboto.className} text-xl sm:text-2xl italic text-purple-800 font-semibold`}>
          ⏰ 7:00 PM
        </p>

        {/* Marriage */}
        <h3 className={`${dancing.className} text-3xl sm:text-4xl font-bold text-purple-900 drop-shadow underline`}>
          Marriage
        </h3>
        <p className={`${roboto.className} text-xl sm:text-2xl italic text-purple-800 font-semibold`}>
          🗓️ September 17, 2026
        </p>
        <p className={`${roboto.className} text-xl sm:text-2xl italic text-purple-800 font-semibold`}>
          ⏰ 4:30 AM – 6:00 AM
        </p>

        {/* Location */}
        <h4 className={`${dancing.className} text-3xl sm:text-4xl font-bold text-purple-900 drop-shadow underline`}>
          Location
        </h4>
        <p className={`${roboto.className} text-lg sm:text-xl italic text-purple-800 font-semibold`}>
          Jothi Mahal A/c, Pennagaram Main Road, Next to New Bus Stand, Dharmapuri.
        </p>

        {/* Location Link */}
        <a
          href="https://maps.app.goo.gl/W9NnAPsFBx548JnF9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-purple-700 text-white text-base sm:text-lg rounded-full 
                     shadow-lg hover:scale-105 transition-transform duration-300 
                     ring-2 ring-purple-400 animate-pulse"
        >
          📍 View Location in Map 🗺️
        </a>

        {/* Countdown */}
        <p className={`${roboto.className} text-base sm:text-lg text-purple-900 font-semibold`}>
          Countdown: {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
        </p>
      </div>
    </div>
  );
}
