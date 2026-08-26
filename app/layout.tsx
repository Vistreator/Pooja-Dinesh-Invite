"use client";
import "./globals.css";
import { useState, useRef } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // start paused

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.muted = false; // unmute once user clicks
        await audioRef.current.play();  // browsers require user interaction
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

        {/* Play/Pause Button */}
        {/* Play/Pause Button */}
<button
  onClick={toggleMusic}
  className={`fixed bottom-6 left-1/2 -translate-x-1/2
              px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg 
              transition-transform duration-300 hover:scale-105 z-50
              ${isPlaying ? "bg-purple-700 ring-2 ring-purple-400 animate-wiggle" : "bg-purple-500 ring-2 ring-purple-300"}`}
>
  {isPlaying ? "⏸" : "Play ♫"}

        </button>

        {/* Page Content */}
        <main className="flex-1 w-full px-4 sm:px-6 py-4">{children}</main>
      </body>
    </html>
  );
}
