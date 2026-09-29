"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between",
        scrolled
          ? "bg-black/50 backdrop-blur-lg border-b border-white/10 py-4 shadow-2xl"
          : "bg-transparent py-6"
      )}
    >
      <div className="font-bold text-xl md:text-2xl text-white tracking-tighter cursor-pointer">
        <span className="text-blue-500">S</span>KS.
      </div>
      <div className="hidden md:flex items-center space-x-8 text-sm tracking-wide font-medium text-white/70">
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        <a 
          href="/SANDEEPKUMARSAHURESUME.pdf"
          download="Sandeep_Kumar_Sahu_Resume.pdf"
          className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
        >
          Download CV
        </a>
      </div>
      <button className="md:hidden text-white/80 hover:text-white">Menu</button>
    </nav>
  );
};
