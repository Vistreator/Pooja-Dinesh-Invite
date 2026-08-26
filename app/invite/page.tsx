"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Great_Vibes, Merriweather } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

export default function Invite() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center 
                    bg-gradient-to-b from-purple-100 via-purple-300 to-purple-500 
                    px-4 overflow-hidden text-center">

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

      <div className="w-full max-w-sm mx-auto space-y-5">
        {/* Animated names */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${greatVibes.className} text-6xl sm:text-8xl md:text-9xl text-purple-900 drop-shadow-lg leading-tight`}
        >
          Dineshkumar C
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`${greatVibes.className} text-5xl sm:text-7xl md:text-8xl text-purple-900 drop-shadow-lg leading-tight`}
        >
          ་༘࿐ ִֶָ💍࿐་༘
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`${greatVibes.className} text-6xl sm:text-8xl md:text-9xl text-purple-900 drop-shadow-lg leading-tight`}
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
          From this day to forever, our story begins.
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
