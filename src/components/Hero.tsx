import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-12 overflow-hidden">
      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="w-full px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            {/* Left — Big headline */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[0.95] text-foreground"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                DESIGN,
                <br />
                BY
                <br />
                ENGINEERING.
              </motion.h1>
            </div>

            {/* Right — Info blocks */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="info-box"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="tech-label text-foreground tracking-widest font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px" }}>
                    SALMA ALROWAIE
                  </span>
                  <span className="tech-label text-muted-foreground">/25</span>
                </div>
                <div className="space-y-1 text-muted-foreground" style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>
                  <p>MECHANICAL ENGINEER</p>
                  <p>+ MS TECHNOLOGY & INNOVATION (KAUST)</p>
                  <p>+ BS MECHANICAL ENGINEERING (PURDUE)</p>
                  <p>→ DESIGN · ANALYSIS · PROTOTYPING</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="info-box"
              >
                <p className="text-muted-foreground" style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", lineHeight: 1.7 }}>
                  Where engineering precision meets creative problem-solving. 
                  This portfolio is a collection of what I design, build, 
                  and learn along the way.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex gap-3"
              >
                <a href="https://www.linkedin.com/in/salma-alrowaie/" target="_blank" rel="noopener noreferrer" className="info-box px-4 py-2 tech-label hover:bg-foreground hover:text-background transition-colors duration-200">
                  LINKEDIN
                </a>
                <a href="mailto:salmarowaie@gmail.com" className="info-box px-4 py-2 tech-label hover:bg-foreground hover:text-background transition-colors duration-200">
                  EMAIL
                </a>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="info-box px-4 py-2 tech-label bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors duration-200"
                >
                  VIEW WORK
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="border-t border-foreground px-6 md:px-10 py-4 flex items-center justify-between"
      >
        <span className="tech-label text-muted-foreground">SCROLL TO EXPLORE</span>
        <span className="tech-label text-muted-foreground">KAUST, SAUDI ARABIA</span>
      </motion.div>
    </section>
  );
};
