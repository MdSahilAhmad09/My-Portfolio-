"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountingNumber from "./CountingNumber";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 bg-transparent relative overflow-hidden"
    >
      {/* Background decorative elements - Enhanced */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FF8C00]/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            The Professional
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-black dark:text-white tracking-tight mb-4">
            About Me
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF8C00] to-[#FFD700] mx-auto rounded-full"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column: Cinematic B&W Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-[#FF8C00]/20 to-[#FFD700]/20 rounded-[48px] blur-3xl group-hover:blur-[100px] transition-all duration-700 opacity-60"></div>

            {/* Image Frame */}
            <div className="relative rounded-[40px] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
              <motion.img
                src="https://ucarecdn.com/ced44eb2-fa94-46af-a3de-85983542c8a0/-/format/auto/"
                alt="Md Sahil Ahmad - Professional Portrait"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                style={{
                  filter: "grayscale(1) contrast(1.15) brightness(1.05)",
                }}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* Golden Gradient Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/30 via-[#FFD700]/10 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
            </div>

            {/* Decorative Corner Brackets */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#FFD700]/60 rounded-tl-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#FF8C00]/60 rounded-br-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Glass Card */}
            <div className="bg-gray-100/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-[32px] relative overflow-hidden group hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-500">
              {/* Internal glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF8C00]/10 rounded-full blur-3xl group-hover:bg-[#FF8C00]/20 transition-all duration-500" />

              <div className="relative z-10">
                <h4 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 tracking-tight">
                  Creative Strategist & <br />
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">
                    Visual Storyteller
                  </span>
                </h4>

                <div className="space-y-5 text-gray-700 dark:text-white/80 text-lg leading-relaxed">
                  <p>
                    I'm{" "}
                    <span className="text-[#FFD700] font-semibold">
                      Md Sahil Ahmad
                    </span>
                    , a multidisciplinary creative professional who transforms
                    ideas into compelling visual narratives and strategic growth
                    solutions.
                  </p>

                  <p className="text-gray-600 dark:text-white/70">
                    With expertise spanning{" "}
                    <span className="text-[#FF8C00] font-medium">
                      digital marketing
                    </span>
                    ,{" "}
                    <span className="text-[#FF8C00] font-medium">
                      photography
                    </span>
                    ,{" "}
                    <span className="text-[#FF8C00] font-medium">
                      videography
                    </span>
                    , and{" "}
                    <span className="text-[#FF8C00] font-medium">
                      graphic design
                    </span>
                    , I bring a unique 360° perspective to every project.
                  </p>

                  <p className="text-gray-600 dark:text-white/70">
                    My approach combines creative excellence with business
                    acumen, ensuring that every campaign, visual, and strategy
                    not only looks exceptional but drives measurable results.
                  </p>

                  <p className="text-black dark:text-white font-medium pt-6 border-t border-gray-200 dark:border-white/10">
                    Currently{" "}
                    <span className="text-[#FFD700] font-bold">
                      open to work
                    </span>{" "}
                    and excited to collaborate on projects that push creative
                    boundaries while delivering real business impact.
                  </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
                  {[
                    { number: 10, label: "Projects", delay: 0.3 },
                    { number: 15, label: "Clients", delay: 0.4 },
                    { number: 5, label: "Expertise Areas", delay: 0.5 },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: stat.delay, duration: 0.6 }}
                      className="text-center group/stat"
                    >
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300">
                        <CountingNumber value={stat.number} inView={inView} />+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-white/50 mt-2 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
