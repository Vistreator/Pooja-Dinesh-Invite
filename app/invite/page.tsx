"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { Great_Vibes, Merriweather } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

export default function Invite() {
  const router = useRouter();

  // Hearts + Glitters generated once
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

      <div className="w-full max-w-sm mx-auto space-y-5">
        {/* Animated names */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${greatVibes.className} text-5xl sm:text-7xl md:text-8xl text-purple-900 drop-shadow-lg leading-tight`}
        >
          Dineshkumar C
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`${greatVibes.className} text-3xl sm:text-5xl md:text-6xl text-purple-900 drop-shadow-lg leading-tight`}
        >
          . ݁˖ .⋆ ݁｡˚⋆  💍  ⋆˚｡⋆. ݁˖ .
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`${greatVibes.className} text-5xl sm:text-7xl md:text-8xl text-purple-900 drop-shadow-lg leading-tight`}
        >
          Pooja R
        </motion.h3>

        {/* Divider hearts */}
        <div className="flex justify-center my-2">
          <span className="text-purple-700 text-2xl sm:text-3xl">♥ ♥ ♥</span>
        </div>

        {/* Invitation wording */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className={`${merriweather.className} text-base sm:text-lg text-gray-700 mb-6`}
        >
          From this day to forever, our story begins.....
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className={`${merriweather.className} text-base sm:text-lg text-gray-700 mb-6`}
        >
          Your presence in our lives is our greatest gift. Welcome!! Be a part of our wedding celebration. 💕
        </motion.p>

        {/* Location button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          onClick={() => router.push("/location")}
          className="px-6 py-2 bg-purple-700 text-white text-base sm:text-lg rounded-full 
                     shadow-lg hover:scale-105 transition-transform duration-300 
                     ring-2 ring-purple-400 animate-pulse"
        >
          See Date & Location
        </motion.button>
      </div>
    </div>
  );
}
