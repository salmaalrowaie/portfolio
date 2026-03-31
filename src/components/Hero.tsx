import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mono text-primary text-sm tracking-widest uppercase mb-6">
            Mechanical Engineer · Innovator
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.9]"
        >
          Building the
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            future
          </span>
          , one
          <br />
          project at a time.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            Master's student in Technology, Innovation & Entrepreneurship at{" "}
            <span className="text-foreground font-medium">KAUST</span>. 
            Bachelor's in Mechanical Engineering from{" "}
            <span className="text-foreground font-medium">Purdue University</span>.
          </p>
          <p className="text-muted-foreground/70 text-sm mt-3">
            Sponsored by KAUST through the Gifted Student Program (KGSP)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors mx-auto"
          >
            <span className="mono text-xs tracking-widest uppercase">Explore Projects</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
