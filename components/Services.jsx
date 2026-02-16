"use client";

import { motion, useInView } from "framer-motion";
import { Camera, Clapperboard, Palette, TrendingUp, Users, Video } from "lucide-react";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Data-driven strategies to amplify your brand presence and drive conversion-focused growth.",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Video Editing",
      description:
        "Specialized post-production including color grading, sound design, and motion graphics.",
      icon: <Clapperboard size={24} />,
    },
    {
      title: "Photography",
      description:
        "Cinematic visual storytelling through high-end portrait, brand, and product photography.",
      icon: <Camera size={24} />,
    },
    {
      title: "Videography",
      description:
        "Premium video production and editing that captures the essence of your story in motion.",
      icon: <Video size={24} />,
    },
    {
      title: "Graphic Design",
      description:
        "Sleek, modern, and effective visual identities that resonate with your target audience.",
      icon: <Palette size={24} />,
    },
    {
      title: "Sales & Handling",
      description:
        "Strategic client management and sales processes that turn leads into loyal brand advocates.",
      icon: <Users size={24} />,
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-[#FFD700] font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            CAPABILITIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-black dark:text-white"
          >
            Specialized <span className="text-black/20 dark:text-white/20">Expertise</span>
          </motion.h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-[2rem] p-6 border border-gray-200 dark:border-white/5 bg-white/80 dark:bg-black/60 backdrop-blur-md transition-all duration-300 group h-full flex flex-col justify-between hover:border-[#FFD700]/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]"
            >
              {/* Highlight Bottom Gradient Line on Hover */}
              <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Top Right Gradient Glow on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-gray-200 dark:border-white/10 text-black dark:text-white bg-gray-100 dark:bg-white/5 transition-colors duration-300 group-hover:border-[#FFD700] group-hover:text-[#FFD700] group-hover:bg-[#FFD700]/5">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white transition-colors duration-300 group-hover:text-[#FFD700]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
