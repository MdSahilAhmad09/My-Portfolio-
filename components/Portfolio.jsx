"use client";

import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const labRef = useRef(null); // Ref for the new section
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });
  
  // Parallax animation for the lab section
  const { scrollYProgress } = useScroll({
    target: labRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  const categories = [
    "All",
    "Marketing",
    "Photography",
    "Videos",
    "Graphic Design",
  ];  

  const projects = [
    {
      title: "Global Brand Launch",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      role: "Lead Strategist",
      impact: "200% Increase in Engagement",
    },
    {
      title: "Urban Cinematic Portraits",
      category: "Photography",
      image:
        "https://images.unsplash.com/photo-1742814539271-574a9bc67afb?q=80&w=389&auto=format&fit=crop",
      role: "Creative Director",
      impact: "Vogue Feature Shortlist",
    },
    {
      title: "Product Commercial 2024",
      category: "Videos",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
      role: "Director / Editor",
      impact: "1M+ Views across Socials",
    },
    {
      title: "Luxury Realty Identity",
      category: "Graphic Design",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
      role: "Visual Designer",
      impact: "Premium Brand Positioning",
    },
    {
      title: "E-commerce Growth Hack",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      role: "Growth Professional",
      impact: "$500k Revenue Growth",
    },
    {
      title: "Architectural Series",
      category: "Photography",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      role: "Photographer",
      impact: "AIA Design Award Exhibit",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              className="text-[#FFD700] font-bold tracking-[0.3em] uppercase mb-4"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="text-4xl md:text-7xl font-bold text-black dark:text-white tracking-tighter"
            >
              The <span className="text-black/40 dark:text-white/40">Portfolio</span>
            </motion.h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-sm rounded-full font-semibold transition-all duration-300 border ${
                  filter === cat
                    ? "bg-[#FFD700] text-black border-[#FFD700]"
                    : "bg-gray-100/50 dark:bg-white/5 text-gray-700 dark:text-white/50 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-[40px] overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col justify-end p-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.2em]">
                        {project.category}
                      </span>
                      <ExternalLink size={20} className="text-white/50 dark:text-white/50" />
                    </div>
                    <h3 className="text-3xl font-bold text-white dark:text-white">
                      {project.title}
                    </h3>
                    <div className="pt-4 border-t border-white/10 dark:border-white/10 flex flex-col gap-1">
                      <p className="text-white/80 dark:text-white/80 text-sm font-medium">
                        Role: {project.role}
                      </p>
                      <p className="text-[#FFD700] text-sm font-bold">
                        Impact: {project.impact}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Featured "Behind the Scenes" Section */}
        <div ref={labRef} className="mt-32 relative w-full h-[600px] rounded-[3rem] overflow-hidden group">
          <motion.div 
            style={{ y, scale, opacity }} 
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
          >
            {/* 
              TODO: Replace this placeholder with your actual image path.
              For example: /images/workstation.jpg
              The image should be placed in the public/images folder.
            */}
            <img 
              src="https://images.unsplash.com/photo-1622630998477-20aa696fa405?q=80&w=2070&auto=format&fit=crop" 
              alt="Creative Workflow - Video Editing Station" 
              className="w-full h-full object-cover filter brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </motion.div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#FFD700] font-bold tracking-[0.5em] uppercase text-sm md:text-base mb-6 animate-pulse">
                Current Status: In The Lab
              </h2>
              <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
                MAKING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF8C00]">
                  MAGIC
                </span>
              </h3>
              <p className="mt-8 text-white/80 max-w-lg mx-auto text-lg font-light tracking-wide">
                Where raw footage meets cinematic vision. Every frame crafted with precision.
              </p>
            </motion.div>
          </div>

          {/* Floating UI Elements matching the image vibe */}
          <motion.div 
            className="absolute bottom-10 right-10 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hidden md:flex items-center gap-3"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
            <span className="text-white font-mono text-sm">Rendering: 99%</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
