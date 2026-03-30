"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BackgroundVideo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* The Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bgVdo.mp4" type="video/mp4" /> 
        <source src="/bgVdo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* The Overlay Layer - Controls readability and theme integration */}
      {/* 
         We use a backdrop-blur and a semi-transparent color overlay.
         Dark mode: Dark overlay to keep it moody.
         Light mode: Light overlay to keep it clean.
      */}
      <div 
        className={`absolute inset-0 transition-colors duration-500 ease-in-out
          ${resolvedTheme === 'dark' ? 'bg-black/50' : 'bg-white/50'}
        `} 
      />
      
      {/* Optional: Add a texture or gradient on top for extra cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}
