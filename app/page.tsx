"use client";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { Merriweather, Great_Vibes } from "next/font/google";

// Elegant serif for subtitle
const merriweather = Merriweather({ subsets: ["latin"], weight: "700" });

// Decorative cursive for initials
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    // Heart burst effect in lavender/pink shades
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#af7be6", "#eba3cc", "#b87bc7"], // lavender/pink tones
    });

    // Navigate after short delay
    setTimeout(() => router.push("/invite"), 600);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-b from-purple-100 via-purple-300 to-purple-500 
                 px-4 text-center overflow-hidden"
    >
      {/* Floating hearts */}
      <div className="absolute top-12 left-4 sm:left-8 text-purple-400 text-2xl sm:text-3xl opacity-20 animate-float">♥</div>
      <div className="absolute bottom-20 right-4 sm:right-12 text-purple-500 text-3xl sm:text-4xl opacity-30 animate-float">♥</div>
      <div className="absolute bottom-32 left-1/4 sm:left-1/3 text-purple-300 text-xl sm:text-2xl opacity-20 animate-float">♥</div>
      <div className="absolute top-24 right-1/5 sm:right-1/4 text-purple-400 text-2xl sm:text-3xl opacity-30 animate-float">♥</div>

      {/* Extra floating hearts */}
      <div className="absolute top-40 left-1/6 sm:left-1/5 text-purple-500 text-xl sm:text-2xl opacity-25 animate-float">♥</div>
      <div className="absolute bottom-10 left-1/5 sm:left-1/4 text-purple-400 text-2xl sm:text-3xl opacity-30 animate-float">♥</div>
      <div className="absolute top-16 right-1/4 sm:right-1/3 text-purple-300 text-xl sm:text-2xl opacity-20 animate-float">♥</div>
      <div className="absolute bottom-24 right-1/6 sm:right-1/5 text-purple-500 text-2xl sm:text-3xl opacity-25 animate-float">♥</div>
      <div className="absolute top-48 left-1/2 text-purple-400 text-3xl sm:text-4xl opacity-30 animate-float">♥</div>
      <div className="absolute bottom-40 left-2/5 sm:left-2/3 text-purple-300 text-xl sm:text-2xl opacity-20 animate-float">♥</div>

      {/* Glittering background particles */}
      <div className="glitter w-1.5 h-1.5 sm:w-2 sm:h-2 top-10 left-1/4 sm:left-20"></div>
      <div className="glitter w-2 h-2 sm:w-3 sm:h-3 bottom-16 right-1/4 sm:right-24"></div>
      <div className="glitter w-1.5 h-1.5 sm:w-2 sm:h-2 top-1/3 left-1/2"></div>
      <div className="glitter w-3 h-3 sm:w-4 sm:h-4 bottom-1/4 left-1/5 sm:left-12"></div>
      <div className="glitter w-2 h-2 sm:w-3 sm:h-3 top-1/2 right-1/4 sm:right-1/3"></div>

      {/* Extra glitter particles */}
      <div className="glitter w-1.5 h-1.5 sm:w-2 sm:h-2 top-5 left-1/3 sm:left-1/4"></div>
      <div className="glitter w-2 h-2 sm:w-3 sm:h-3 bottom-10 right-1/3 sm:right-1/2"></div>
      <div className="glitter w-1.5 h-1.5 sm:w-2 sm:h-2 top-2/3 left-1/6 sm:left-1/5"></div>
      <div className="glitter w-3 h-3 sm:w-4 sm:h-4 bottom-1/3 right-1/6 sm:right-1/4"></div>
      <div className="glitter w-2 h-2 sm:w-3 sm:h-3 top-40 left-1/2 sm:left-3/4"></div>

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
        className="w-55 h-55 rounded-full bg-purple-700 text-white font-bold 
        shadow-lg hover:scale-105 transition-transform duration-300 
        ring-4 ring-purple-400 animate-pulse"
      >
        Open Invite
      </button>
    </div>
  );
}
