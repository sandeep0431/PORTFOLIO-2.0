"use client";

import { motion } from "framer-motion";

export const About = () => {
  const skillCategories = [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Machine Learning & AI",
      items: ["Machine Learning", "NLP", "Data Preprocessing", "Feature Engineering", "Classification", "Model Evaluation", "Explainable AI"]
    },
    {
      category: "Cybersecurity",
      items: ["Phishing Detection", "Network Security", "Threat Detection", "Digital Safety", "Security Analysis", "Linux / Kali Linux"]
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "REST APIs"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS Lambda", "API Gateway", "ECR", "CloudWatch", "IAM", "Docker", "Vercel", "GitHub"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "GitHub", "Node.js", "Chrome Extension APIs", "WebCMD", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "Google Colab"]
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
          className="mb-20 sm:mb-32 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
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
                beyond the code
              </span>
            </motion.div>

            <div className="text-base sm:text-lg md:text-xl text-white/70 space-y-4 sm:space-y-6 leading-relaxed font-normal">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                I am a Computer Science undergraduate at <strong className="text-white font-semibold">VSSUT, Odisha</strong>, focused on <span className="text-blue-400 font-medium">Machine Learning</span>, <span className="text-blue-400 font-medium">Cybersecurity</span>, and intelligent software systems.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                I enjoy building practical solutions that combine <strong className="text-white/90 font-medium">AI</strong>, <strong className="text-white/90 font-medium">security</strong>, <strong className="text-white/90 font-medium">cloud technologies</strong>, and modern web development.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                My work includes AI-powered digital safety, browser agents, network intrusion detection, blockchain applications, and real-world hackathon projects.
              </motion.p>
            </div>

            {/* Achievements */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="pt-4 sm:pt-6"
            >
              <h3 className="font-serif italic text-white/50 text-xs sm:text-sm md:text-base tracking-wide mb-3 sm:mb-4">
                highlights & achievements
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

          {/* Education Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
              }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/3 w-full shrink-0 group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-700" />
            <div className="relative p-6 sm:p-8 rounded-2xl bg-neutral-900/90 border border-white/10 backdrop-blur-xl transition hover:bg-neutral-800/80 duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7l9 5z" />
                </svg>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2 text-white tracking-tight">Education</h3>
              <p className="font-sans font-medium text-sm sm:text-base md:text-lg text-white/90 mb-1 leading-snug">B.Tech — Computer Science and Engineering</p>
              <p className="font-sans text-xs sm:text-sm text-white/60 mb-6 leading-relaxed">Veer Surendra Sai University of Technology (VSSUT), Burla, Odisha</p>
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
          </motion.div>
        </motion.div>

        {/* Skills Section */}
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
                tools I work with
              </span>
            </div>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1" />
          </div>

          <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-2">
            <motion.div
              className="flex gap-4 sm:gap-6 w-max py-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            >
              {[...skillCategories, ...skillCategories].map((group, idx) => {
                const colors = [
                  "from-blue-500/20 to-purple-500/20 text-blue-400",
                  "from-emerald-500/20 to-teal-500/20 text-emerald-400",
                  "from-orange-500/20 to-red-500/20 text-orange-400",
                  "from-pink-500/20 to-rose-500/20 text-pink-400",
                  "from-yellow-500/20 to-amber-500/20 text-yellow-400",
                  "from-cyan-500/20 to-blue-500/20 text-cyan-400"
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
