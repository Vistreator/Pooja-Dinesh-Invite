"use client";
import "./globals.css";
import { useState, useRef } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.muted = false;
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Playback error:", err);
    }
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-purple-300 to-purple-500">
        {/* Background Music */}
        <audio ref={audioRef} loop preload="auto">
          <source src="/Vallavan_bgm_Ringtone.mp3" type="audio/mp3" />
          <source src="/Vallavan_bgm_Ringtone.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>

        {/* Rotating Round Button */}
        {/* Rotating Round Button */}
{/* Rotating Round Button */}
{/* Rotating Round Button */}
{/* Rotating Round Button */}
<button
  onClick={toggleMusic}
  className={`fixed top-3/4 right-6
              w-9 h-9 flex items-center justify-center rounded-full shadow-md 
              transition-transform duration-300 z-50
              bg-purple-900 text-purple-200
              ${isPlaying ? "animate-spin-slow animate-blow-shrink" : ""}`}
>
  {isPlaying ? "🎵" : "🎵"}
</button>


        {/* Page Content */}
        <main className="flex-1 w-full px-4 sm:px-6 py-4">{children}</main>
      </body>
    </html>
  );
}
