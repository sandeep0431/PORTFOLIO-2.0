"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Calibrated precisely for a total 3.0-second smooth experience (2.5s progress + 0.5s completion hold)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // 500ms hold at 100% so total is exactly 3.0 seconds
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
          return 100;
        }

        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 1.1, ease: [0.83, 0, 0.17, 1] }
          }}
          className="fixed inset-0 z-[10000] bg-[#120d0a] text-[#f8f5ee] flex flex-col justify-between p-6 sm:p-12 font-sans select-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-900/15 via-blue-900/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
          
          {/* Noise / Grain Overlay for Luxury Analog Texture */}
          <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Top Bar Framing */}
          <div className="w-full flex justify-between items-center text-xs tracking-widest uppercase text-white/40 z-10">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/90 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
              <span className="font-mono text-[11px] tracking-widest text-[#f8f5ee]/70">SANDEEP KUMAR SAHU</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-white/40"
            >
              <span>ODISHA, IN</span>
              <span>·</span>
              <span>2026</span>
            </motion.div>
          </div>

          {/* Central Showcase */}
          <div className="flex flex-col items-center justify-center max-w-xl w-full mx-auto relative z-10 my-auto py-4">
            
            {/* Cursive Name "Sandeep" Animated Showcase */}
            <div className="relative flex items-center justify-center py-4">
              <svg
                viewBox="0 0 440 140"
                className="w-72 sm:w-96 md:w-[440px] h-28 sm:h-36 overflow-visible"
              >
                <defs>
                  {/* Progressive Reveal Clip Path */}
                  <clipPath id="sandeep-reveal-clip">
                    <rect
                      x="0"
                      y="0"
                      width={`${Math.min(100, progress * 1.02)}%`}
                      height="100%"
                      className="transition-all duration-100 ease-out"
                    />
                  </clipPath>
                  
                  {/* Soft 3D Glow Filter */}
                  <filter id="luxury-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.7" />
                    <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#f59e0b" floodOpacity="0.12" />
                  </filter>

                  {/* Shimmer Linear Gradient */}
                  <linearGradient id="shimmer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fdfbf7" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f4ede0" />
                  </linearGradient>
                </defs>

                {/* Layer 1: Subtle warm background trace */}
                <text
                  x="50%"
                  y="62%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-cursive text-7xl sm:text-8xl fill-none stroke-[#2a1e16]/60"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  Sandeep
                </text>

                {/* Layer 2: Dynamic stroke drawing outline */}
                <text
                  x="50%"
                  y="62%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-cursive text-7xl sm:text-8xl fill-none stroke-[#fdfbf7]"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="950"
                  strokeDashoffset={950 * (1 - progress / 100)}
                >
                  Sandeep
                </text>

                {/* Layer 3: Solid rich creamy fill with soft shadow */}
                <text
                  x="50%"
                  y="62%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  clipPath="url(#sandeep-reveal-clip)"
                  filter="url(#luxury-glow)"
                  fill="url(#shimmer-gradient)"
                  className="font-cursive text-7xl sm:text-8xl select-none"
                >
                  Sandeep
                </text>
              </svg>
            </div>

            {/* Bottom Counter & Glowing Minimal Progress Line */}
            <div className="mt-8 sm:mt-12 flex flex-col items-center">
              {/* Bold Percentage Number */}
              <div className="font-display text-2xl sm:text-3xl font-bold tracking-widest text-[#fdfbf7] mb-2.5 font-mono">
                {progress} %
              </div>

              {/* High-end Minimal Progress Bar with Active Leading Glow */}
              <div className="w-36 sm:w-52 h-[2px] bg-white/15 rounded-full overflow-hidden relative backdrop-blur-sm">
                <div
                  className="h-full bg-gradient-to-r from-[#fdfbf7] via-amber-200 to-[#fdfbf7] transition-all duration-100 ease-out rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

          </div>

          {/* Bottom Bar Framing */}
          <div className="w-full flex justify-between items-end text-xs text-white/35 z-10">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif italic text-xs sm:text-sm text-[#f8f5ee]/50"
            >
              building intelligent things for the web
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-mono text-[10px] tracking-widest uppercase text-white/30"
            >
              INITIALIZING · 100%
            </motion.span>
          </div>

          {/* Luxury Corner Crosshair Brackets */}
          <div className="absolute top-4 left-4 text-white/20 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute top-4 right-4 text-white/20 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute bottom-4 left-4 text-white/20 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute bottom-4 right-4 text-white/20 font-mono text-[10px] select-none pointer-events-none">+</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
