"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Increment counter smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 350);
          return 100;
        }
        // Random natural increment steps
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + step, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[10000] bg-black text-white flex flex-col justify-between p-6 sm:p-12 font-sans select-none overflow-hidden"
        >
          {/* Subtle background gradient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Bar */}
          <div className="w-full flex justify-between items-center text-xs tracking-widest uppercase text-white/50 z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-medium text-white/80">Sandeep Kumar Sahu</span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:inline font-mono text-[11px] text-white/40"
            >
              PORTFOLIO · 2026
            </motion.span>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center justify-center text-center z-10 my-auto py-8">
            {/* Editorial Label */}
            <div className="overflow-hidden mb-2 sm:mb-3">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="font-serif italic text-xs sm:text-sm md:text-base text-blue-400/90 block tracking-wider"
              >
                intelligent systems & cybersecurity
              </motion.span>
            </div>

            {/* Main Title Monogram Reveal */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white"
              >
                SKS<span className="text-blue-500">.</span>
              </motion.h1>
            </div>

            {/* Glowing Minimal Progress Bar */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="w-full flex justify-between items-end text-xs text-white/40 z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-serif italic text-xs sm:text-sm text-white/50"
            >
              crafting digital experiences
            </motion.span>

            {/* Numeric Percentage Counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-display font-semibold text-lg sm:text-2xl text-white flex items-baseline gap-0.5 tracking-tight"
            >
              <span>{progress.toString().padStart(2, "0")}</span>
              <span className="text-xs text-blue-400">%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
