"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Removed Moon import
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import ThemeToggleButton from "./ThemeToggleButton"; // Import the new component

const MotionLink = motion(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false); // State for modal

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Portfolio", href: "/#portfolio", id: "portfolio" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      let currentSection = "home";

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <div className="w-full max-w-5xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl transition-all duration-300">
        {/* Left: Logo */}
        <MotionLink 
          href="/" 
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-9 h-9 rounded-full bg-[#FFD700] flex items-center justify-center text-black font-bold text-base transition-transform">
            SA
          </div>
          <span className="text-black dark:text-white font-bold text-base tracking-wide uppercase">
           Md Sahil Ahmad
          </span>
        </MotionLink>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 relative" onMouseLeave={() => setHoveredSection(null)}>
          {navLinks.map((link) => {
             const isActive = activeSection === link.id;
             const isHovered = hoveredSection === link.id;
             const shouldHighlight = isHovered || (isActive && !hoveredSection);

             return (
              <MotionLink
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors px-2 py-1 ${
                  shouldHighlight ? "text-[#FFD700]" : "text-gray-700 dark:text-white/70 hover:text-[#FFD700]"
                }`}
                onMouseEnter={() => setHoveredSection(link.id)}
                onClick={() => setActiveSection(link.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {shouldHighlight && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFD700] shadow-[0_0_10px_#FFD700]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </MotionLink>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggleButton /> {/* Replaced the old button with the new component */}
          
          <motion.button
            onClick={() => setIsContactOpen(true)}
            className="hidden sm:block bg-gray-200/80 dark:bg-[#4a4a4a]/80 hover:bg-gray-300 dark:hover:bg-[#5a5a5a] text-black dark:text-white px-5 py-2 rounded-full text-xs font-bold transition-all border border-black/5 dark:border-white/5 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button 
            onClick={toggleMenu} 
            className="lg:hidden text-gray-700 dark:text-white/70 hover:text-black dark:hover:text-white focus:outline-none ml-2"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-3xl p-6 shadow-2xl lg:hidden overflow-hidden z-50"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <MotionLink
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors px-4 py-2 hover:bg-white/5 rounded-xl text-center ${
                    activeSection === link.id ? "text-[#FFD700]" : "text-gray-700 dark:text-white/80 hover:text-[#FFD700]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </MotionLink>
              ))}
              <motion.button
                onClick={() => {
                  setIsOpen(false);
                  setIsContactOpen(true);
                }}
                className="w-full bg-[#FFD700] text-black text-center py-3 rounded-xl font-bold mt-4 hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
