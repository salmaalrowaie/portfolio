import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.03,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const AnimatedWord = ({ text, startIndex }: { text: string; startIndex: number }) => (
  <span className="inline-block overflow-hidden">
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={startIndex + i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </span>
);

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const infoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-between pt-12 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-foreground/5"
            style={{ left: `${(i + 1) * 16.66}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="w-full px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            {/* Left — Big headline with parallax */}
            <motion.div style={{ y: headlineY, opacity }}>
              <h1
                className="text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[0.95] text-foreground"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <AnimatedWord text="DESIGN," startIndex={0} />
                <br />
                <AnimatedWord text="BY" startIndex={7} />
                <br />
                <AnimatedWord text="ENGINEERING." startIndex={9} />
              </h1>

              {/* Animated underline */}
              <motion.div
                className="h-[3px] bg-foreground mt-6 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>

            {/* Right — Info blocks with parallax */}
            <motion.div style={{ y: infoY, opacity }} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="info-box group hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="tech-label tracking-widest font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px" }}>
                    SALMA ALROWAIE
                  </span>
                  <motion.span
                    className="tech-label text-muted-foreground group-hover:text-background/60"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    /25
                  </motion.span>
                </div>
                <div className="space-y-1 text-muted-foreground group-hover:text-background/70" style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>
                  <p>MECHANICAL ENGINEER</p>
                  <p>+ MS TECHNOLOGY & INNOVATION (KAUST)</p>
                  <p>+ BS MECHANICAL ENGINEERING (PURDUE)</p>
                  <p>→ DESIGN · ANALYSIS · PROTOTYPING</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="info-box group hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                <p className="text-muted-foreground group-hover:text-background/70" style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", lineHeight: 1.7 }}>
                  Where engineering precision meets creative problem-solving. 
                  This portfolio is a collection of what I design, build, 
                  and learn along the way.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex gap-3"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://www.linkedin.com/in/salma-alrowaie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-box px-4 py-2 tech-label hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                  LINKEDIN
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:salmarowaie@gmail.com"
                  className="info-box px-4 py-2 tech-label hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                  EMAIL
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="info-box px-4 py-2 tech-label bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors duration-200"
                >
                  VIEW WORK
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="border-t border-foreground px-6 md:px-10 py-4 flex items-center justify-between"
      >
        <motion.span
          className="tech-label text-muted-foreground"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓ SCROLL TO EXPLORE
        </motion.span>
        <span className="tech-label text-muted-foreground">KAUST, SAUDI ARABIA</span>
      </motion.div>
    </section>
  );
};
