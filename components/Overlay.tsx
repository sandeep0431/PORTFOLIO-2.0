"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export const Overlay = ({ progress }: OverlayProps) => {
  // Slide 1: 0% -> 25% scroll
  const opacity1 = useTransform(progress, [0, 0.12, 0.24], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.24], [0, -40]);

  // Slide 2: 25% -> 55% scroll
  const opacity2 = useTransform(progress, [0.22, 0.32, 0.46, 0.56], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.22, 0.56], [40, -40]);

  // Slide 3: 55% -> 85% scroll
  const opacity3 = useTransform(progress, [0.54, 0.64, 0.78, 0.88], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.54, 0.88], [40, -40]);

  // Scroll hint indicator opacity (fades out early)
  const hintOpacity = useTransform(progress, [0, 0.08], [1, 0]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 font-sans relative select-none">
      {/* Slide 1 - Hero Introduction */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute text-center max-w-2xl px-4 w-full flex flex-col items-center"
      >
        <span className="font-serif italic text-xs sm:text-sm md:text-base text-blue-400/90 mb-2 sm:mb-3 block tracking-widest uppercase">
          crafting intelligent systems
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white via-[#f1f5f9] to-[#94a3b8] drop-shadow-md">
          Sandeep
        </h1>
        <p className="font-display text-base sm:text-xl md:text-2xl text-blue-400 font-medium tracking-normal sm:tracking-wide mb-2 sm:mb-3">
          Machine Learning & Cybersecurity Developer
        </p>
        <p className="text-xs sm:text-sm md:text-base text-white/70 font-normal leading-relaxed max-w-md mx-auto">
          Building intelligent systems at the intersection of AI, cybersecurity, and software engineering.
        </p>
      </motion.div>

      {/* Slide 2 - Mission Statement */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-x-4 sm:inset-x-8 md:left-20 md:right-auto max-w-lg mx-auto md:mx-0 text-center md:text-left"
      >
        <span className="font-serif italic text-xs sm:text-sm md:text-base text-white/40 mb-2 block tracking-wide">
          from idea to implementation
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
          Turning ideas into practical,<br />
          <span className="text-blue-500">real-world technology.</span>
        </h2>
      </motion.div>

      {/* Slide 3 - Origin & Location */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-x-4 sm:inset-x-8 md:right-20 md:left-auto max-w-lg mx-auto md:mx-0 text-center md:text-right"
      >
        <span className="font-serif italic text-xs sm:text-sm md:text-base text-orange-400/70 mb-2 block tracking-wide">
          origin & roots
        </span>
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          Based in<br />
          <span className="text-orange-400">Odisha, India.</span>
        </h2>
      </motion.div>

      {/* Bottom Scroll Cue Indicator */}
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] sm:text-xs tracking-widest uppercase text-white/40 font-medium">
          Scroll to explore
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-white/20 flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
          />
        </div>
      </motion.div>
    </div>
  );
};
