"use client";
import { useEffect, useState, useMemo } from "react";
import { Dancing_Script, Roboto } from "next/font/google";
import { motion } from "framer-motion";

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

  const hearts = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: `heart-${i}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        color: [300, 400, 500][i % 3],
        size: ["text-xl", "text-2xl", "text-3xl", "text-4xl"][i % 4],
        opacity: [20, 25, 30][i % 3],
      })),
    []
  );

  const glitters = useMemo(
    () =>
      Array.from({ length: 50 }).map((_, i) => ({
        id: `glitter-${i}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: ["w-1.5 h-1.5", "w-2 h-2", "w-3 h-3", "w-4 h-4"][i % 4],
      })),
    []
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center 
                    bg-gradient-to-b from-purple-100 via-purple-300 to-purple-500 
                    px-4 overflow-hidden text-center">

      {/* Hearts */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className={`absolute text-purple-${h.color} ${h.size} opacity-${h.opacity} animate-float`}
          style={{ top: h.top, left: h.left }}
        >
          ♥
        </div>
      ))}

      {/* Glitters */}
      {glitters.map((g) => (
        <div
          key={g.id}
          className={`glitter ${g.size}`}
          style={{ top: g.top, left: g.left }}
        ></div>
      ))}

      {/* Content */}
      <motion.div
        className="w-full max-w-sm mx-auto space-y-6"
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={fadeUp} custom={0.2}
          className={`${dancing.className} text-3xl sm:text-4xl font-bold text-purple-900 drop-shadow underline`}>
          Reception
        </motion.h2>
        <motion.p variants={fadeUp} custom={0.4}
          className={`${roboto.className} text-xl sm:text-2xl italic text-purple-800 font-semibold`}>
          🗓️ September 16, 2026
        </motion.p>
        <motion.p variants={fadeUp} custom={0.6}
          className={`${roboto.className} text-xl sm:text-2xl italic text-purple-800 font-semibold`}>
          ⏰ 7:00 PM
        </motion.p>

        <motion.h3 variants={fadeUp} custom={0.8}
          className={`${dancing.className} text-3xl sm:text-4xl font-bold text-purple-900 drop-shadow underline`}>
          Marriage
        </motion.h3>
        <motion.p variants={fadeUp} custom={1.0}
          className={`${roboto.className} text-xl sm:text-2xl italic text-purple-800 font-semibold`}>
          🗓️ September 17, 2026
        </motion.p>
        <motion.p variants={fadeUp} custom={1.2}
          className={`${roboto.className} text-xl sm:text-2xl italic text-purple-800 font-semibold`}>
          ⏰ 4:30 AM – 6:00 AM
        </motion.p>

        <motion.h4 variants={fadeUp} custom={1.4}
          className={`${dancing.className} text-3xl sm:text-4xl font-bold text-purple-900 drop-shadow underline`}>
          Location
        </motion.h4>
        <motion.p variants={fadeUp} custom={1.6}
          className={`${roboto.className} text-lg sm:text-xl italic text-purple-800 font-semibold`}>
          Jothi Mahal A/c, Pennagaram Main Road, Next to New Bus Stand, Dharmapuri.
        </motion.p>

        <motion.a variants={fadeUp} custom={1.8}
          href="https://maps.app.goo.gl/W9NnAPsFBx548JnF9"
          target="_blank" rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-purple-700 text-white text-base sm:text-lg rounded-full 
                     shadow-lg hover:scale-105 transition-transform duration-300 
                     ring-2 ring-purple-400 animate-pulse">
          📍 View Location in Map 🗺️
        </motion.a>

        <motion.p variants={fadeUp} custom={2.0}
          className={`${roboto.className} text-base sm:text-lg text-purple-900 font-semibold`}>
          Countdown: {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
        </motion.p>
      </motion.div>
    </div>
  );
}
