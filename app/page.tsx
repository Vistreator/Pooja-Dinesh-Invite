"use client";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { Merriweather, Great_Vibes } from "next/font/google";
import { useMemo } from "react";

// Elegant serif for subtitle
const merriweather = Merriweather({ subsets: ["latin"], weight: "700" });
// Decorative cursive for initials
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    const colors = ["#af7be6", "#eba3cc", "#b87bc7"];

    // Scatter bursts from left, right, and center
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });

    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors,
    });

    // Continuous stream for 2 seconds
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Navigate after stream ends
    setTimeout(() => router.push("/invite"), duration + 500);
  };

  // Hearts + Glitters generated once
  const hearts = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: `heart-${i}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        color: ["text-purple-300", "text-purple-400", "text-purple-500"][i % 3],
        size: ["text-xl", "text-2xl", "text-3xl", "text-4xl"][i % 4],
        opacity: ["opacity-20", "opacity-25", "opacity-30"][i % 3],
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
        color: ["#af7be6", "#eba3cc", "#b87bc7"][i % 3],
      })),
    []
  );

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-b from-purple-100 via-purple-300 to-purple-500 
                 px-4 text-center overflow-hidden"
    >
      {/* Hearts */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className={`absolute ${h.color} ${h.size} ${h.opacity} animate-float`}
          style={{ top: h.top, left: h.left }}
        >
          ♥
        </div>
      ))}

      {/* Glitters */}
      {glitters.map((g) => (
        <div
          key={g.id}
          className={`glitter absolute rounded-full ${g.size}`}
          style={{
            top: g.top,
            left: g.left,
            backgroundColor: g.color,
          }}
        ></div>
      ))}

      {/* Title */}
      <h1
        className={`${greatVibes.className} text-6xl sm:text-8xl text-purple-900 drop-shadow mb-4`}
      >
        D <span className="text-purple-700">♥</span> P
      </h1>

      {/* Subtitle */}
      <p className={`${merriweather.className} text-base text-purple-900 mb-6`}>
        Inviting you to celebrate a lifetime of togetherness
      </p>

      {/* Button */}
      <button
        onClick={handleClick}
        className="w-40 h-40 rounded-full bg-purple-700 text-white font-bold 
        shadow-lg hover:scale-105 transition-transform duration-300 
        animate-pulse"
      >
        Open Invite
      </button>
    </div>
  );
}
