"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });
  const skillCategories = [
    {
      title: "Marketing Skills",
      skills: [
        { name: "SEO & SEM", level: 90 },
        { name: "Content Strategy", level: 85 },
        { name: "Social Media Growth", level: 95 },
        { name: "Email Automation", level: 80 },
      ],
    },
    {
      title: "Creative Skills",
      skills: [
        { name: "Photography/Editing", level: 95 },
        { name: "Videography/Post", level: 92 },
        { name: "Graphic Design (UI/UX)", level: 88 },
        { name: "Motion Graphics", level: 75 },
      ],
    },
    {
      title: "Video Editing",
      skills: [
        { name: "Adobe Premiere Pro", level: 95 },
        { name: "After Effects", level: 90 },
        { name: "DaVinci Resolve", level: 85 },
        { name: "CapCut", level: 92 },
      ],
    },
    {
      title: "Business & Sales",
      skills: [
        { name: "Lead Generation", level: 90 },
        { name: "Client Management", level: 94 },
        { name: "Negotiation", level: 88 },
        { name: "Strategic Planning", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Decorative Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            className="text-4xl md:text-6xl font-black text-black dark:text-white uppercase tracking-tighter"
          >
            Creative <span className="text-[#FFD700]">Engine</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-white/40 mt-4 font-mono text-sm tracking-widest uppercase">
            // Technical Proficiency & Core Competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm relative group"
            >
              <h3 className="text-xl font-bold text-black dark:text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#FFD700] rounded-full" />
                {category.title}
              </h3>

              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-gray-700 dark:text-white/70 text-sm font-medium uppercase tracking-wider">
                        {skill.name}
                      </span>
                      <span className="text-[#FFD700] text-xs font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-full"
                      >
                        <div className="absolute top-0 right-0 h-full w-4 bg-white/40 blur-sm" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative "Data" elements */}
              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-white/5 flex justify-between items-center opacity-30">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-black dark:bg-white" />
                  ))}
                </div>
                <span className="text-[10px] text-gray-600 dark:text-white font-mono uppercase">
                  Status: Optimal
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
