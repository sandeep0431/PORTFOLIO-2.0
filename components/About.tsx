"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const About = () => {
  const [isEducationFlipped, setIsEducationFlipped] = useState(false);
  const skillCategories = [
    {
      category: "Web Development",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Vite",
        "REST APIs",
        "Node.js"
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Python",
        "Machine Learning",
        "NLP",
        "Data Preprocessing",
        "Feature Engineering",
        "Classification",
        "Model Evaluation",
        "Explainable AI",
        "Scikit-learn",
        "Pandas",
        "NumPy"
      ]
    },
    {
      category: "Cybersecurity",
      items: [
        "Phishing Detection",
        "Network Security",
        "Threat Detection",
        "Digital Safety",
        "Security Analysis",
        "Linux",
        "Kali Linux"
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS Lambda",
        "API Gateway",
        "ECR",
        "CloudWatch",
        "IAM",
        "Docker",
        "Git",
        "GitHub",
        "Vercel"
      ]
    }
  ];

  const achievements = [
    { text: "2nd Prize — Amazon Code Conquest, AWS Student Community Day 2026", icon: "🏆" },
    { text: "8th Position — Hack Odisha 5.0", icon: "🥇" },
    { text: "Cybersecurity Lead — Enigma, Web & Coding Club, VSSUT", icon: "🛡️" },
    { text: "Outreach Head — CSE Society, VSSUT", icon: "📢" }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-neutral-950 text-white relative flex flex-col items-center font-sans overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-orange-600/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* About Section Wrapper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mb-16 sm:mb-24 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6 w-full">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                About Me.
              </h2>
              <span className="font-serif italic text-white/50 text-sm sm:text-base md:text-lg block mt-1 tracking-wide">
                building across three worlds
              </span>
            </motion.div>

            <div className="text-base sm:text-lg md:text-xl text-white/70 space-y-4 sm:space-y-6 leading-relaxed font-normal">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                I'm <strong className="text-white font-semibold">Sandeep Kumar Sahu</strong>, a Computer Science undergraduate at VSSUT, Odisha, focused on <span className="text-blue-400 font-medium">Web Development</span>, <span className="text-blue-400 font-medium">Artificial Intelligence & Machine Learning</span>, and <span className="text-blue-400 font-medium">Cybersecurity</span>.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                I enjoy building modern web applications and turning ideas into practical products, while exploring how AI and machine learning can make software more intelligent and how cybersecurity can make it safer and more resilient.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                My work spans full-stack web development, AI-powered applications, security-focused systems, browser agents, and real-world hackathon projects. I enjoy working across the stack—from building interfaces and APIs to developing intelligent models and security-aware solutions.
              </motion.p>
            </div>

            {/* Achievements */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="pt-2 sm:pt-4"
            >
              <h3 className="font-serif italic text-white/50 text-xs sm:text-sm md:text-base tracking-wide mb-3 sm:mb-4">
                highlights & leadership
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {achievements.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium rounded-lg bg-white/5 border border-white/5 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default shadow-sm backdrop-blur-md"
                  >
                    <span className="shrink-0">{item.icon}</span>
                    <span className="leading-snug">{item.text}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education Flip Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
              }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/3 w-full shrink-0 group relative [perspective:1000px] select-none"
            onDoubleClick={() => setIsEducationFlipped((prev) => !prev)}
            title="Double-click to flip"
          >
            {/* Multi-colour Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700" />

            <motion.div
              animate={{ rotateY: isEducationFlipped ? 180 : 0 }}
              transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full rounded-2xl cursor-pointer"
            >
              {/* FRONT FACE: B.Tech Summary */}
              <div
                style={{ backfaceVisibility: "hidden" }}
                className="p-6 sm:p-8 rounded-2xl bg-neutral-900/95 border border-white/10 backdrop-blur-xl transition hover:bg-neutral-800/90 duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7l9 5z" />
                      </svg>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEducationFlipped(true);
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono text-white/40 hover:text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <span>Double-click to flip</span>
                      <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2 text-white tracking-tight">Education</h3>
                  <p className="font-sans font-medium text-sm sm:text-base md:text-lg text-white/90 mb-1 leading-snug">B.Tech — Computer Science and Engineering</p>
                  <p className="font-sans text-xs sm:text-sm text-white/60 mb-6 leading-relaxed">Veer Surendra Sai University of Technology (VSSUT), Burla, Odisha</p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm font-medium text-white/50 border-t border-white/10 pt-4 sm:pt-6">
                  <div className="flex justify-between items-center group-hover:text-white transition-colors">
                    <span>Expected Graduation</span>
                    <span className="text-white px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">2028</span>
                  </div>
                  <div className="flex justify-between items-center group-hover:text-white transition-colors">
                    <span>CGPA</span>
                    <span className="text-blue-300 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-blue-500/20 rounded-full border border-blue-500/30 group-hover:bg-blue-500/40 transition-colors font-medium">8.63 / 10</span>
                  </div>
                </div>
              </div>

              {/* BACK FACE: Complete Academic History (10th, 12th, B.Tech) */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
                className="absolute inset-0 p-5 sm:p-6 rounded-2xl bg-neutral-900/95 border border-white/10 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-display text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                      Academic Qualifications
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEducationFlipped(false);
                      }}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono text-white/40 hover:text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <span>Back ↻</span>
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm">
                    {/* B.Tech */}
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-white text-xs sm:text-sm">B.Tech in CSE</p>
                          <p className="text-[11px] text-white/60">VSSUT, Burla</p>
                        </div>
                        <span className="text-blue-300 font-medium text-[11px] px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30">
                          CGPA: 8.63
                        </span>
                      </div>
                      <p className="text-[10px] font-mono text-white/40 mt-1">2024 – 2028</p>
                    </div>

                    {/* Class XII */}
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-white text-xs sm:text-sm">Class XII (CHSE)</p>
                          <p className="text-[11px] text-white/60">SSVM NK Nagar, Berhampur</p>
                        </div>
                        <span className="text-emerald-300 font-medium text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                          90.00%
                        </span>
                      </div>
                    </div>

                    {/* Class X */}
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-white text-xs sm:text-sm">Class X (BSE)</p>
                          <p className="text-[11px] text-white/60">SSVM NK Nagar, Berhampur</p>
                        </div>
                        <span className="text-amber-300 font-medium text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30">
                          91.16%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center text-[10px] font-mono text-white/30">
                  Double-click card to flip back
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>


        {/* Skills Section - Infinite Scrolling Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Skills & Tech.
              </h2>
              <span className="font-serif italic text-white/50 text-xs sm:text-sm md:text-base block mt-0.5 tracking-wide">
                tools I build with
              </span>
            </div>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1" />
          </div>

          <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-2">
            <motion.div
              className="flex gap-4 sm:gap-6 w-max py-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[...skillCategories, ...skillCategories, ...skillCategories].map((group, idx) => {
                const colors = [
                  "from-blue-500/20 to-purple-500/20 text-blue-400",
                  "from-indigo-500/20 to-cyan-500/20 text-indigo-400",
                  "from-emerald-500/20 to-teal-500/20 text-emerald-400",
                  "from-amber-500/20 to-orange-500/20 text-amber-400"
                ];
                const colorTheme = colors[idx % (skillCategories.length)];
                const badgeColor = colorTheme.split(" ")[2];

                return (
                  <div
                    key={idx}
                    className="group w-[280px] sm:w-[340px] md:w-[380px] shrink-0 p-5 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.04] transition-colors relative overflow-hidden"
                  >
                    {/* Gradient hover effect */}
                    <div className={`absolute -top-10 -right-10 w-40 sm:w-48 h-40 sm:h-48 bg-gradient-to-br ${colorTheme.split(" text-")[0]} rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                    <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2.5 tracking-tight">
                      <span className={`w-2 h-2 rounded-full ${badgeColor.replace('text-', 'bg-')} group-hover:scale-150 transition-transform duration-300`} />
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {group.items.map((skill, index) => (
                        <span
                          key={index}
                          className="font-sans px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-white/5 border border-white/5 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default shadow-sm backdrop-blur-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
