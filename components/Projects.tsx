"use client";

import { motion } from "framer-motion";

// Language colors matching GitHub's linguist
const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Solidity: "#AA6746",
  React: "#61DAFB",
};

const PROJECTS = [
  {
    title: "AEGIS",
    subtitle: "AI-Powered Digital Safety Platform",
    description: "AI-assisted cybersecurity platform designed to help users identify and understand digital threats through phishing URL detection, suspicious message analysis, impersonation detection, password breach checking, explainable risk scoring, and personalized safety guidance.",
    features: [
      "ML-based phishing URL detection",
      "NLP-based suspicious message analysis",
      "Impersonation detection",
      "Password breach checking",
      "Explainable security risk scoring",
      "AI-powered safety recommendations",
      "Serverless cloud deployment"
    ],
    stack: ["Python", "Machine Learning", "NLP", "Scikit-learn", "Docker", "AWS Lambda", "API Gateway", "ECR", "CloudWatch", "IAM"],
    primaryLang: "Python",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/sandeep0431/AEGIS",
    achievement: "🏆 2nd Prize — Amazon Code Conquest, AWS Student Community Day 2026"
  },
  {
    title: "TabMind",
    subtitle: "AI-Powered Browser Agent",
    description: "Chrome Manifest V3 extension that acts as an AI-powered browser agent for intelligent research and browser workspace management. It uses WebCMD to automate research workflows, verify structured results, reuse browsing workflows, and open relevant resources directly in Chrome.",
    features: [
      "AI-powered browser agent",
      "WebCMD-based research automation",
      "Browser memory and context preservation",
      "Workspace/session save and restoration",
      "Automatic tab organization",
      "Duplicate-tab cleanup",
      "Chrome tab and tab-group management",
      "AI-generated session summaries"
    ],
    stack: ["React", "TypeScript", "Vite", "Chrome Extension APIs", "Manifest V3", "WebCMD", "Node.js", "Groq AI", "Chrome Storage API", "Chrome Tabs & Tab Groups API"],
    primaryLang: "TypeScript",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/sandeep0431/TabMind",
    achievement: null
  },
  {
    title: "Network Intrusion Detection System",
    subtitle: null,
    description: "Machine-learning based cybersecurity system for detecting malicious network traffic and identifying potential network intrusions using network-security datasets and classification algorithms.",
    features: [
      "Network traffic preprocessing",
      "Feature engineering and selection",
      "Classification-based intrusion detection",
      "Random Forest and SVM models",
      "Accuracy, precision, recall and F1 evaluation",
      "Security-focused ML pipeline"
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "SVM", "Machine Learning"],
    primaryLang: "Python",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/sandeep0431",
    achievement: null
  },
  {
    title: "ElderCare+",
    subtitle: "Senior Care Companion Platform",
    description: "A digital senior-care platform designed to assist elderly users with everyday healthcare and support needs through reminders, appointments, and location-based access to essential services.",
    features: [
      "Medicine reminders",
      "Appointment management",
      "Pharmacy and hospital locator",
      "Map-based service discovery",
      "Responsive user interface"
    ],
    stack: ["React", "TypeScript", "TanStack Query", "Leaflet.js", "Web APIs"],
    primaryLang: "TypeScript",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/sandeep0431",
    achievement: "🥇 8th Position — Hack Odisha 5.0"
  },
  {
    title: "GreenLedger",
    subtitle: "Blockchain-Based Agriculture Supply Chain",
    description: "Blockchain-based agriculture supply-chain platform designed to improve transparency and traceability by connecting physical agricultural products with verifiable digital records.",
    features: [
      "Blockchain-based product traceability",
      "Smart-contract powered records",
      "QR/NFC-based product identification",
      "Supply-chain transparency",
      "IoT data integration",
      "Polygon-based blockchain architecture"
    ],
    stack: ["Blockchain", "Polygon", "Smart Contracts", "Web3", "QR/NFC", "IoT"],
    primaryLang: "Solidity",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/sandeep0431",
    achievement: null
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-neutral-950 text-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Projects.
          </h2>
          <span className="font-serif italic text-white/50 text-xs sm:text-base md:text-lg block mt-1 tracking-wide">
            selected work
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group relative flex flex-col rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#58a6ff]/50 transition-all duration-300 overflow-hidden h-full cursor-pointer font-sans"
            >
              {/* Cover image with BW → color hover effect */}
              <div className="h-36 sm:h-44 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1">
                {/* Achievement pinned badge */}
                {project.achievement && (
                  <div className="mb-3 -mt-0.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-300 leading-tight">
                      {project.achievement}
                    </span>
                  </div>
                )}

                {/* Repo header */}
                <div className="flex items-start gap-2.5 mb-2.5 sm:mb-3">
                  {/* Repo icon */}
                  <svg className="w-4 h-4 mt-0.5 text-[#7d8590] shrink-0" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                  </svg>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold text-[#58a6ff] group-hover:underline leading-tight truncate tracking-tight">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <span className="text-xs text-[#7d8590] leading-tight block mt-0.5">{project.subtitle}</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13px] text-[#7d8590] leading-relaxed mb-3 sm:mb-4 line-clamp-3 font-normal">
                  {project.description}
                </p>

                {/* Features as compact list */}
                <div className="mb-3 sm:mb-4 flex flex-wrap gap-x-1 gap-y-0.5">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <span key={idx} className="text-[11px] text-[#7d8590]">
                      {feature}{idx < Math.min(project.features.length, 4) - 1 ? " · " : ""}
                    </span>
                  ))}
                  {project.features.length > 4 && (
                    <span className="text-[11px] text-[#484f58]"> +{project.features.length - 4} more</span>
                  )}
                </div>

                {/* Topic tags (GitHub-style) */}
                <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                  {project.stack.slice(0, 6).map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 sm:px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-[#388bfd]/15 text-[#58a6ff] hover:bg-[#388bfd]/25 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span className="px-2 sm:px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-[#21262d] text-[#484f58]">
                      +{project.stack.length - 6}
                    </span>
                  )}
                </div>

                {/* Bottom bar: language + meta */}
                <div className="mt-auto flex items-center gap-4 text-xs text-[#7d8590]">
                  {/* Language dot */}
                  <span className="flex items-center gap-1.5 font-medium">
                    <span
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full inline-block"
                      style={{ backgroundColor: LANG_COLORS[project.primaryLang] || "#7d8590" }}
                    />
                    {project.primaryLang}
                  </span>

                  {/* GitHub-style icons */}
                  <span className="flex items-center gap-1 ml-auto">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                    </svg>
                  </span>

                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
