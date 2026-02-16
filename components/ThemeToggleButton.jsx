"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 p-2 rounded-full bg-white/5 border border-white/10" /> // Placeholder to prevent layout shift
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        p-2 rounded-full border transition-all duration-300
        ${isDark 
          ? "bg-white/10 border-white/10 text-[#FFD700] hover:bg-white/20" 
          : "bg-black/5 border-black/10 text-gray-700 hover:bg-black/10"
        }
      `}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="fill-current" />
      ) : (
        <Moon size={20} className="fill-current" />
      )}
    </motion.button>
  );
}
