"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export const Overlay = ({ progress }: OverlayProps) => {
  // 0% scroll
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -50]);

  // 30% scroll
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.55], [50, -50]);

  // 60% scroll
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.85], [50, -50]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-12">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute text-center max-w-4xl px-4 mt-[15vh] sm:mt-[10vh]"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-white">
          Sandeep
        </h1>
        <p className="text-xl md:text-3xl text-blue-500 font-medium tracking-wide mb-4">
          Machine Learning & Cybersecurity Developer
        </p>
        <p className="text-base md:text-lg text-white/50 font-light max-w-xl mx-auto">
          Building intelligent systems at the intersection of AI, cybersecurity, and software engineering.
        </p>

      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute left-6 md:left-24 max-w-lg"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Turning ideas into practical,<br />
          <span className="text-blue-500">real-world technology.</span>
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute right-6 md:right-24 max-w-lg text-right"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Based in<br />
          <span className="text-orange-400">Odisha, India.</span>
        </h2>
      </motion.div>
    </div>
  );
};
