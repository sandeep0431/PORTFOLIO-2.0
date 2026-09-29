"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
  const links = [
    { label: "Email", text: "kumarsandeepsahu31@gmail.com", href: "mailto:kumarsandeepsahu31@gmail.com" },
    { label: "LinkedIn", text: "Sandeep Kumar Sahu", href: "https://www.linkedin.com/in/sandeep-kumar-sahu-99135734a/" },
    { label: "GitHub", text: "sandeep0431", href: "https://github.com/sandeep0431" },
    { label: "Location", text: "Odisha, India", href: "#" },
  ];

  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <footer
      id="contact"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-neutral-950 text-white relative flex flex-col items-center overflow-hidden border-t border-white/5 font-sans"
    >
      {/* Mouse following glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-screen hidden sm:block"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(59,130,246,0.15), transparent 40%)`
          )
        }}
      />

      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center w-full"
        >
          <div className="inline-block relative mb-3 sm:mb-4">
            <span className="font-serif italic text-blue-400/80 text-xs sm:text-base md:text-lg block mb-1.5 sm:mb-2 tracking-wide">
              from idea to implementation
            </span>
            <h2 className="font-display text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Let's Talk.
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 sm:mb-20 font-normal leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project, or just want to collaborate, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Location" ? "_blank" : undefined}
              rel={link.label !== "Location" ? "noopener noreferrer" : undefined}
              className="group relative p-5 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.2] transition-all duration-300 overflow-hidden text-center md:text-left flex flex-col items-center md:items-start"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-full truncate">
                <p className="text-xs font-semibold text-blue-400 mb-1.5 uppercase tracking-wider">{link.label}</p>
                <p className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors truncate w-full font-medium" title={link.text}>{link.text}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative group w-full sm:w-auto flex justify-center"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500" />
          <a
            href="/SANDEEPKUMARSAHURESUME.pdf"
            download="Sandeep_Kumar_Sahu_Resume.pdf"
            className="relative flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-neutral-900 border border-white/20 text-white font-medium hover:bg-neutral-800 transition-colors text-base sm:text-lg w-full max-w-xs shadow-xl"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </motion.div>

      </div>

      <div className="w-full max-w-7xl mx-auto mt-20 sm:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white/40 font-normal gap-3 text-center md:text-left">
        <p>© {new Date().getFullYear()} Sandeep Kumar Sahu. All rights reserved.</p>
        <p>Designed & Built with <span className="text-blue-500 font-medium">Next.js</span> & <span className="text-cyan-500 font-medium">Framer Motion</span></p>
      </div>
    </footer>
  );
};
