"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, ChevronRight, RefreshCw, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SUGGESTED_QUESTIONS = [
  "What services do you offer?",
  "Can I see your portfolio?",
  "How much do you charge?",
  "How can I contact you?",
  "What is your experience?",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm Sahil's advanced AI Assistant. I can help you with project inquiries, services, and more. How can I assist you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [hasUnread, setHasUnread] = useState(true);

  // Load chat history from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error("Failed to load chat history", e);
      }
    }
  }, []);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setHasUnread(false);
  };

  const clearChat = () => {
    const initialMessage = {
      id: Date.now(),
      text: "Chat cleared. How can I help you now?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([initialMessage]);
    localStorage.removeItem("chatHistory");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = async (text = inputText) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: text,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI delay
    setTimeout(() => {
      const botResponseText = generateResponse(userMessage.text);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  // Enhanced logic with more comprehensive responses
  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // Greetings
    if (lowerInput.match(/\b(hi|hello|hey|greetings|sup)\b/)) {
      return "Hello! I'm here to help you navigate Sahil's portfolio and services. What's on your mind?";
    }

    // Services
    if (lowerInput.match(/\b(service|offer|do|work|specialise|specialize)\b/)) {
      return "I specialize in premium digital services including:\n\n• Video Editing (Cinematic, Corporate, Social)\n• Digital Marketing (SEO, Ads, Growth)\n• Photography & Videography\n• Graphic Design\n\nWhich one are you interested in?";
    }

    // Skills / Tools
    if (lowerInput.match(/\b(skill|tool|software|tech|stack)\b/)) {
      return "My toolkit is industry-standard:\n\n• Video: Premiere Pro, After Effects, DaVinci Resolve\n• Design: Photoshop, Illustrator, Figma\n• Marketing: Google Ads, Meta Ads, SEO Tools\n\nI use the best tools to deliver the best results.";
    }

    // Contact
    if (lowerInput.match(/\b(contact|email|phone|whatsapp|reach|call)\b/)) {
      return "You can reach me instantly via the floating WhatsApp button! Or email me at mdsahilahmad82@gmail.com. I usually respond within 2 hours.";
    }

    // Pricing
    if (lowerInput.match(/\b(price|cost|rate|charge|quote|money)\b/)) {
      return "My pricing is project-based to ensure you get exactly what you need without paying for what you don't. Tell me a bit about your project, and I can give you a rough estimate!";
    }

    // Portfolio
    if (lowerInput.match(/\b(portfolio|project|sample|work|see)\b/)) {
      return "My latest work is showcased right here in the Portfolio section. I've worked on brand campaigns, event coverage, and high-retention social content.";
    }

    // Location
    if (lowerInput.match(/\b(location|where|city|country|remote)\b/)) {
      return "I'm based in India but work with clients globally. Remote work is my specialty!";
    }

    // Gratitude
    if (lowerInput.match(/\b(thank|thanks|cool|awesome|good)\b/)) {
      return "You're welcome! I'm glad I could help. Let me know if you need anything else.";
    }
    
    // Default fallback
    return "That's an interesting question! While I might not have the specific answer, I'd love to discuss it personally. Please click 'Let's Talk' or WhatsApp me directly.";
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={toggleChat}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full shadow-lg hover:shadow-cyan-500/50 hover:shadow-2xl transition-all group"
        aria-label="AI Assistant"
      >
        {hasUnread && !isOpen && (
           <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce" />
        )}
        <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping group-hover:animate-none" />
        {isOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <Sparkles className="text-white w-6 h-6 animate-pulse" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, rotateX: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-40 right-4 sm:right-6 z-50 w-[90vw] sm:w-[400px] h-[550px] max-h-[70vh] bg-white/80 dark:bg-black/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                  <Bot className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base tracking-wide">Sahil's AI</h3>
                  <p className="text-blue-100 text-xs flex items-center gap-1.5 font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    Always Online
                  </p>
                </div>
              </div>
              <button 
                onClick={clearChat}
                className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                title="Clear Chat"
              >
                <RefreshCw size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar bg-gray-50/50 dark:bg-[#0a0a0a]/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} max-w-[85%]`}>
                    <div
                      className={`p-3.5 rounded-2xl text-sm shadow-sm relative ${
                        msg.sender === "user"
                          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-none"
                          : "bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-md"
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 p-4 rounded-2xl rounded-bl-none flex gap-1.5 items-center shadow-md">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions (Chips) */}
            <div className="px-4 py-2 bg-gray-50/80 dark:bg-black/20 overflow-x-auto flex gap-2 no-scrollbar shrink-0 border-t border-gray-100 dark:border-white/5">
               {SUGGESTED_QUESTIONS.map((q, i) => (
                 <button
                   key={i}
                   onClick={() => handleSend(q)}
                   className="whitespace-nowrap px-3 py-1.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-white/10 hover:border-blue-200 transition-colors flex items-center gap-1 shrink-0"
                 >
                   {q} <ChevronRight size={10} />
                 </button>
               ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 shrink-0">
              <div className="flex gap-2 items-center bg-gray-100 dark:bg-[#1a1a1a] rounded-full px-1.5 py-1.5 border border-transparent focus-within:border-blue-500/50 focus-within:bg-white dark:focus-within:bg-black transition-all">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none text-black dark:text-white placeholder-gray-500"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputText.trim()}
                  className="p-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
