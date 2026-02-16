"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Video Editing",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp Message
    const text = `*New Project Inquiry*
------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Service:* ${formData.service}
------------------------
*Message:*
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917070471499?text=${encodedText}`;

    // Construct Mailto Link (Fallback for email)
    const mailtoUrl = `mailto:mdsahilahmad82@gmail.com?subject=New Inquiry from ${formData.name}&body=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Attempt to open email client as well (may be blocked by popup blockers if not careful, but this is a secondary action)
    // A better UX is to let the user know, or just rely on WhatsApp which is "instant"
    // For this request, we'll trigger the mailto in the same window after a short delay or just rely on WhatsApp as primary.
    // Let's try to do both by setting window.location for mailto after opening WhatsApp.
    setTimeout(() => {
        window.location.href = mailtoUrl;
    }, 500);
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white/10 dark:bg-black/80 backdrop-blur-2xl border border-white/20 p-8 md:p-10 rounded-[2.5rem] w-full max-w-lg shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              {/* Cinematic Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF8C00]/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 dark:text-white/60 text-sm">
                  Fill out the form below to start your project.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-white/50">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-white/50">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-white/50">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#FFD700] transition-colors appearance-none"
                  >
                    <option value="Video Editing" className="bg-white dark:bg-black">Video Editing</option>
                    <option value="Digital Marketing" className="bg-white dark:bg-black">Digital Marketing</option>
                    <option value="Photography" className="bg-white dark:bg-black">Photography</option>
                    <option value="Graphic Design" className="bg-white dark:bg-black">Graphic Design</option>
                    <option value="Other" className="bg-white dark:bg-black">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-white/50">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
                    placeholder="Tell me about your project goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFD700] text-black font-bold py-4 rounded-xl hover:bg-[#FFC000] transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Inquiry <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
