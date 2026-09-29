"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between font-sans",
        scrolled || mobileMenuOpen
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-4 shadow-2xl"
          : "bg-transparent py-6"
      )}
    >
      <a
        href="#"
        onClick={scrollToTop}
        className="font-display font-bold text-xl md:text-2xl text-white tracking-tight cursor-pointer"
      >
        <span className="text-blue-500">S</span>KS.
      </a>
      
      {/* Desktop Links */}
      <nav className="hidden md:flex items-center space-x-8 text-sm tracking-wide font-medium text-white/70">
        <a
          href="#projects"
          onClick={(e) => scrollToSection(e, "projects")}
          className="hover:text-white transition-colors"
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, "about")}
          className="hover:text-white transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className="hover:text-white transition-colors"
        >
          Contact
        </a>
        <a 
          href="/SANDEEPKUMARSAHURESUME.pdf"
          download="Sandeep_Kumar_Sahu_Resume.pdf"
          className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors font-medium"
        >
          Download CV
        </a>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-white/80 hover:text-white font-medium text-sm p-2 focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col space-y-4 md:hidden shadow-2xl">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="text-base text-white/80 hover:text-white font-medium py-1 transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-base text-white/80 hover:text-white font-medium py-1 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-base text-white/80 hover:text-white font-medium py-1 transition-colors"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="/SANDEEPKUMARSAHURESUME.pdf"
              download="Sandeep_Kumar_Sahu_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors text-center shadow-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
