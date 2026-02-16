"use client";

import { ArrowUp, Facebook, Instagram, Linkedin, MessageSquare, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socials = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/wavesofsahil_" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <MessageSquare size={20} />, href: "https://wa.me/917070471499" },
  ];

  return (
    <footer className="bg-white/10 dark:bg-black/40 backdrop-blur-md py-12 border-t border-gray-200 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFD700] to-[#FF8C00] flex items-center justify-center font-bold text-black">
              SA
            </div>
            <div className="text-gray-600 dark:text-white/40 text-sm font-medium tracking-wider">
              © 2026 MD SAHIL AHMAD. <br className="md:hidden" /> ALL RIGHTS
              RESERVED.
            </div>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/50 hover:text-[#FFD700] hover:border-[#FFD700] transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-600 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors uppercase text-xs font-bold tracking-[0.2em]"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center group-hover:border-gray-500 dark:group-hover:border-white transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
