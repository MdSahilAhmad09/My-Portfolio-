"use client";

import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });

  const buttonText =
    status === "submitting"
      ? "Sending..."
      : status === "success"
        ? "Message Sent!"
        : "Submit Inquiry";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    const { name, email, message } = formData;
    const whatsappNumber = "917070471499"; // Added country code for India
    
    // Engaging and polite greeting message
    const text = `Hello Sahil! 👋\n\nI just explored your portfolio and I'm truly impressed by your work. I'd love to discuss a potential collaboration with you.\n\nHere are my details:\nName: ${name}\nEmail: ${email}\n\nMessagse: ${message}\n\nLooking forward to connecting!`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-transparent relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#FF8C00]/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                className="text-[#FFD700] font-bold tracking-[0.3em] uppercase mb-4"
              >
                Inquiry
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                className="text-4xl md:text-7xl font-bold text-black dark:text-white tracking-tighter mb-8"
              >
                Let's work <br />
                <span className="text-black/40 dark:text-white/40 italic">together</span>
              </motion.h2>

              <div className="space-y-8 mt-12">
                <a
                  href="mailto:Sahiljstar21@gmail.com"
                  className="group flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-black dark:text-white group-hover:bg-[#FFD700] group-hover:text-black transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-white/40 text-xs uppercase tracking-widest mb-1">
                      Email Me
                    </p>
                    <p className="text-black dark:text-white font-bold text-lg">
                      Sahiljstar21@gmail.com
                    </p>
                  </div>
                </a>
                <div className="group flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-black dark:text-white group-hover:bg-[#FF8C00] group-hover:text-black transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-white/40 text-xs uppercase tracking-widest mb-1">
                      Based In
                    </p>
                    <p className="text-black dark:text-white font-bold text-lg">
                      Worldwide / Remote
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              className="bg-gray-100/50 dark:bg-white/5 backdrop-blur-3xl border border-gray-200 dark:border-white/10 p-8 md:p-12 rounded-[40px] relative"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-600 dark:text-white/50 text-xs uppercase tracking-widest mb-3 font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-black dark:text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 dark:text-white/50 text-xs uppercase tracking-widest mb-3 font-bold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@example.com"
                    className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-black dark:text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 dark:text-white/50 text-xs uppercase tracking-widest mb-3 font-bold">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can I help you?"
                    className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-black dark:text-white focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-5 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  {buttonText}
                  <Send size={18} />
                </button>
              </form>

              {/* Success Ambient Light */}
              {status === "success" && (
                <div
                  className="absolute inset-0 bg-[#FFD700]/10 rounded-[40px] pointer-events-none"
                  style={{
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}</style>
    </section>
  );
}
