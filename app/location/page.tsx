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
    {/* Floating hearts */}
{/* Floating hearts */}
<div className="absolute top-12 left-8 text-purple-400 text-3xl opacity-20 animate-float">♥</div>
<div className="absolute bottom-20 right-12 text-purple-500 text-4xl opacity-30 animate-float">♥</div>
<div className="absolute bottom-32 left-1/3 text-purple-300 text-2xl opacity-20 animate-float">♥</div>
<div className="absolute top-24 right-1/4 text-purple-400 text-3xl opacity-30 animate-float">♥</div>

{/* Extra floating hearts (20 more) */}
<div className="absolute top-40 left-1/5 text-purple-500 text-2xl opacity-25 animate-float">♥</div>
<div className="absolute bottom-10 left-1/4 text-purple-400 text-3xl opacity-30 animate-float">♥</div>
<div className="absolute top-16 right-1/3 text-purple-300 text-2xl opacity-20 animate-float">♥</div>
<div className="absolute bottom-24 right-1/5 text-purple-500 text-3xl opacity-25 animate-float">♥</div>
<div className="absolute top-48 left-1/2 text-purple-400 text-4xl opacity-30 animate-float">♥</div>
<div className="absolute bottom-40 left-2/3 text-purple-300 text-2xl opacity-20 animate-float">♥</div>
<div className="absolute top-56 right-1/6 text-purple-500 text-3xl opacity-25 animate-float">♥</div>
<div className="absolute bottom-12 left-3/4 text-purple-400 text-2xl opacity-30 animate-float">♥</div>
<div className="absolute top-20 right-2/5 text-purple-300 text-3xl opacity-20 animate-float">♥</div>
<div className="absolute bottom-28 left-1/2 text-purple-500 text-4xl opacity-25 animate-float">♥</div>
<div className="absolute top-64 left-1/3 text-purple-400 text-2xl opacity-30 animate-float">♥</div>
<div className="absolute bottom-48 right-1/4 text-purple-300 text-3xl opacity-20 animate-float">♥</div>
<div className="absolute top-72 left-1/6 text-purple-500 text-3xl opacity-25 animate-float">♥</div>
<div className="absolute bottom-56 right-1/3 text-purple-400 text-2xl opacity-30 animate-float">♥</div>
<div className="absolute top-80 left-2/3 text-purple-300 text-3xl opacity-20 animate-float">♥</div>
<div className="absolute bottom-64 left-1/5 text-purple-500 text-4xl opacity-25 animate-float">♥</div>
<div className="absolute top-96 right-1/2 text-purple-400 text-2xl opacity-30 animate-float">♥</div>
<div className="absolute bottom-72 left-1/2 text-purple-300 text-3xl opacity-20 animate-float">♥</div>
<div className="absolute top-1/5 right-1/6 text-purple-500 text-2xl opacity-25 animate-float">♥</div>
<div className="absolute bottom-1/6 left-1/4 text-purple-400 text-3xl opacity-30 animate-float">♥</div>

{/* Glittering background particles */}
<div className="glitter w-2 h-2 top-10 left-20"></div>
<div className="glitter w-3 h-3 bottom-16 right-24"></div>
<div className="glitter w-2 h-2 top-1/3 left-1/2"></div>
<div className="glitter w-4 h-4 bottom-1/4 left-12"></div>
<div className="glitter w-2 h-2 top-1/2 right-1/3"></div>

{/* Additional glitter particles (20 more) */}
<div className="glitter w-2 h-2 top-5 left-1/4"></div>
<div className="glitter w-3 h-3 bottom-10 right-1/2"></div>
<div className="glitter w-2 h-2 top-2/3 left-1/5"></div>
<div className="glitter w-4 h-4 bottom-1/3 right-1/4"></div>
<div className="glitter w-2 h-2 top-40 left-3/4"></div>
<div className="glitter w-3 h-3 bottom-44 right-2/3"></div>
<div className="glitter w-2 h-2 top-1/4 left-3/5"></div>
<div className="glitter w-4 h-4 bottom-2/5 right-1/6"></div>
<div className="glitter w-2 h-2 top-56 left-1/6"></div>
<div className="glitter w-3 h-3 bottom-60 right-1/5"></div>
<div className="glitter w-2 h-2 top-72 left-1/2"></div>
<div className="glitter w-4 h-4 bottom-72 right-1/3"></div>
<div className="glitter w-3 h-3 top-80 left-1/5"></div>
<div className="glitter w-2 h-2 bottom-80 right-1/4"></div>
<div className="glitter w-4 h-4 top-96 left-2/3"></div>
<div className="glitter w-3 h-3 bottom-96 right-1/6"></div>
<div className="glitter w-2 h-2 top-1/6 left-1/2"></div>
<div className="glitter w-4 h-4 bottom-1/5 right-1/2"></div>
<div className="glitter w-3 h-3 top-1/2 left-1/4"></div>

      
      <div className="w-full max-w-sm mx-auto space-y-5 animate-fade">
        {/* Reception */}
        <h2 className={`${dancing.className} text-2xl font-bold text-purple-900 drop-shadow underline`}>
          Reception
        </h2>
        <p className={`${roboto.className} text-lg italic text-purple-800 font-semibold`}>
          🗓️ September 16, 2026
        </p>
        <p className={`${roboto.className} text-lg italic text-purple-800 font-semibold`}>
          ⏰ 7:00 PM
        </p>

        {/* Marriage */}
        <h3 className={`${dancing.className} text-2xl font-bold text-purple-900 drop-shadow underline`}>
          Marriage
        </h3>
        <p className={`${roboto.className} text-lg italic text-purple-800 font-semibold`}>
          🗓️ September 17, 2026
        </p>
        <p className={`${roboto.className} text-lg italic text-purple-800 font-semibold`}>
          ⏰ 4:30 AM – 6:00 AM
        </p>

        {/* Location Link */}
        <a
          href="https://maps.app.goo.gl/W9NnAPsFBx548JnF9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-1.5 bg-purple-700 text-white text-sm rounded-full 
                     shadow-lg hover:scale-105 transition-transform duration-300 
                     ring-2 ring-purple-400 animate-pulse"
        >
          📍View Location🗺️
        </a>

        {/* Countdown*/}
        <p className={`${roboto.className} text-sm text-purple-900`}>
          Countdown: {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
        </p>
      </div>
    </div>
  );
}
