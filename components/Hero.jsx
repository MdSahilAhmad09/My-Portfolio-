"use client";

import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const [isMobile, setIsMobile] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // State for modal
  const [skillIndex, setSkillIndex] = useState(0); // State for rotating skills
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" }); // Re-trigger every time it enters view

  const skills = [
    "Video Editing",
    "Digital Marketing",
    "Photography",
    "Videography",
    "Graphic Design",
    "Sales",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2500); // Change text every 2.5 seconds
    return () => clearInterval(interval);
  }, [skills.length]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="home"
      ref={ref} // Attach ref to the section
      className="relative min-h-screen bg-transparent flex items-center justify-center pt-24 pb-12"
    >
      {/* Background Cinematic Glows - Wrapped to prevent scrollbars but allow content overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#FF8C00]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#FFD700]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} /> {/* Render the modal */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content: Glass Card */}
          <motion.div
            style={{ y: isMobile ? 0 : y1 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 order-2 lg:order-1"
          >
            <div className="relative group p-[1px] rounded-[40px] bg-gradient-to-br from-white/20 to-transparent">
              <div className="bg-white/40 dark:bg-black/40 backdrop-blur-3xl p-6 md:p-12 rounded-[39px] border border-gray-200 dark:border-white/5 relative overflow-hidden">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} // Animate based on inView
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsContactOpen(true)} // Open modal on click
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-[#39FF14] mb-6 md:mb-8 shadow-[0_0_10px_rgba(57,255,20,0.3)] cursor-pointer hover:scale-105 transition-transform"
                >
                  <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-neon-glow" />
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#39FF14] animate-neon-text">
                    Open to Work
                  </span>
                </motion.div>

                {/* Premium Hero Text Animation */}
                <div className="mb-6 md:mb-10 relative z-20">
                  <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter leading-[0.9] mb-4">
                    <div className="flex flex-wrap gap-x-4 overflow-hidden perspective-[1000px]">
                      {/* "Md Sahil" - Staggered Character Reveal */}
                      <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={{
                          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
                        }}
                        className="flex"
                      >
                        {"Md Sahil".split("").map((char, i) => (
                          <motion.span
                            key={i}
                            variants={{
                              hidden: { y: 100, rotateX: -90, opacity: 0 },
                              visible: { 
                                y: 0, 
                                rotateX: 0, 
                                opacity: 1, 
                                transition: { type: "spring", damping: 12, stiffness: 100 } 
                              }
                            }}
                            className="inline-block transform-style-3d origin-bottom"
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    <div className="overflow-hidden pb-2">
                      {/* "Ahmad" - Gradient Flow & Slide Up */}
                      <motion.div
                        initial={{ y: "110%", skewY: 10 }}
                        whileInView={{ y: 0, skewY: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto] inline-block"
                      >
                        Ahmad
                      </motion.div>
                    </div>
                  </h1>

                  <div className="overflow-hidden mt-2 md:mt-4">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="text-lg md:text-2xl font-medium text-gray-700 dark:text-white/90 flex items-center gap-3"
                    >
                      <span className="w-8 h-[2px] bg-[#FFD700] inline-block" /> 
                      Creative & Growth Professional
                    </motion.h2>
                  </div>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="text-gray-600 dark:text-white/60 text-sm md:text-lg mb-8 md:mb-12 max-w-lg leading-relaxed h-20"
                >
                  <span className="text-black dark:text-white font-bold inline-block mr-2">
                    Specialised in:
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={skills[skillIndex]}
                      initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="text-[#FFD700] font-black tracking-wide inline-block relative"
                    >
                      {skills[skillIndex]}
                      <motion.span 
                        className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-full"
                        layoutId="underline"
                      />
                    </motion.span>
                  </AnimatePresence>
                  <br className="block mb-3" />
                  <span className="opacity-80 text-xs md:text-sm">
                    {skills.join(" | ")}
                  </span>
                </motion.p>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a
                    href="#portfolio"
                    className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-sm md:text-base hover:bg-[#FFD700] hover:scale-105 transition-all shadow-[0_10px_20px_rgba(255,215,0,0.2)]"
                  >
                    View My Work <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                 
                </div>

                {/* Ambient glow inside card */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF8C00]/20 rounded-full blur-[40px]" />
              </div>
            </div>
          </motion.div>

          {/* Right Content: Portrait Image with REAL PHOTO */}
          <motion.div
            style={{ y: isMobile ? 0 : y2 }}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: 50 }} // Animate based on inView
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 order-1 lg:order-2 w-full max-w-[500px] lg:max-w-none aspect-[4/5] relative group"
          >
            {/* Image Container with Cinematic Effects */}
            <div className="w-full h-full relative rounded-[40px] overflow-hidden">
              {/* REAL PHOTO OF MD SAHIL AHMAD */}
              <motion.img
                src="https://ucarecdn.com/3bfc90ef-e95d-4932-9a99-5cebcacbed2b/-/format/auto/"
                alt="Md Sahil Ahmad - Creative Professional"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                initial={{ scale: 1.1 }}
                animate={inView ? { scale: 1 } : { scale: 1.1 }} // Animate based on inView
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Cinematic Lighting Overlays */}
              {/* Soft Fade Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

              {/* Warm Orange Rim Light Right - Enhanced */}
              <div
                className="absolute top-0 right-0 bottom-0 w-40 bg-gradient-to-l from-[#FF8C00]/40 via-[#FFD700]/20 to-transparent blur-3xl pointer-events-none animate-pulse"
                style={{ animationDuration: "4s" }}
              />

              {/* Golden Accent Bottom Left - Enhanced */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFD700]/15 blur-[80px] pointer-events-none" />

              {/* Additional Top Rim Light for depth */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-b from-[#FFA500]/10 to-transparent blur-2xl pointer-events-none" />
            </div>

            {/* Floating Achievement Card (Cinematic detail) */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }} // Animate based on inView
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-6 rounded-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className="text-black dark:text-white font-bold text-xl leading-none">
                    50+
                  </p>
                  <p className="text-gray-600 dark:text-white/50 text-xs uppercase tracking-widest mt-1">
                    Projects Done
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
