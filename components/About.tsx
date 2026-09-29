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
    <section id="about" className="py-32 px-6 md:px-12 bg-neutral-950 text-white relative flex flex-col items-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* About Section Wrapper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mb-32 flex flex-col lg:flex-row gap-16 items-start"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-6xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
            >
              About Me.
            </motion.h2>

            <div className="text-xl md:text-2xl text-white/70 space-y-6 leading-relaxed font-light">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                I am a Computer Science undergraduate at <span className="text-white font-medium">VSSUT, Odisha</span>, focused on <span className="text-blue-400 font-medium">Machine Learning</span>, <span className="text-blue-400 font-medium">Cybersecurity</span>, and intelligent software systems.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                I enjoy building practical solutions that combine AI, security, cloud technologies, and modern web development.
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

            {/* Achievements - integrated naturally as compact badges */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="pt-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Highlights & Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {achievements.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white/5 border border-white/5 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all cursor-default shadow-sm backdrop-blur-md"
                  >
                    <span>{item.icon}</span>
                    {item.text}
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
            transition={{ duration: 0.7, ease: "easeOut" }} // Placed outside of variants for safety
            className="lg:w-1/3 w-full shrink-0 group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative p-8 rounded-2xl bg-neutral-900 border border-white/10 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-neutral-800/80 duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7l9 5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">Education</h3>
              <p className="font-medium text-lg text-white/90 mb-1">B.Tech — Computer Science and Engineering</p>
              <p className="text-white/60 mb-8">Veer Surendra Sai University of Technology (VSSUT), Burla, Odisha</p>
              <div className="space-y-3 text-sm font-medium text-white/50 border-t border-white/10 pt-6">
                <div className="flex justify-between items-center group-hover:text-white transition-colors">
                  <span>Expected Graduation</span>
                  <span className="text-white badge px-3 py-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">2028</span>
                </div>
                <div className="flex justify-between items-center group-hover:text-white transition-colors">
                  <span>CGPA</span>
                  <span className="text-white badge px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 group-hover:bg-blue-500/40 transition-colors">8.63 / 10</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Tech.</h2>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1" />
          </div>

          <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div
              className="flex gap-6 w-max py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
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
                const badgeColor = colorTheme.split(" ")[2]; // e.g., "text-blue-400"

                return (
                  <div
                    key={idx}
                    className="group w-[320px] md:w-[380px] shrink-0 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.04] transition-colors relative overflow-hidden"
                  >
                    {/* Vibrant gradient hover effect inside card */}
                    <div className={`absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br ${colorTheme.split(" text-")[0]} rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${badgeColor.replace('text-', 'bg-')} group-hover:scale-150 transition-transform duration-300`} />
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2.5 relative z-10">
                      {group.items.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm font-medium rounded-lg bg-white/5 border border-white/5 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all cursor-default shadow-sm backdrop-blur-md"
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
