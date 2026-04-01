import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 md:px-12 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Subtle label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
          >
            Mechanical Engineer
          </motion.p>

          {/* Large editorial name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.95] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Salma
            <br />
            <em className="font-normal">Alrowaie</em>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed mb-12"
          >
            Design, analysis, prototyping, and manufacturing — 
            turning engineering challenges into tangible solutions.
          </motion.p>

          {/* Minimal CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex items-center gap-8"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-xs uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300"
            >
              View Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <motion.div
            className="w-full bg-foreground absolute top-0"
            animate={{ height: ["0%", "100%"], top: ["0%", "0%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ height: "30%" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
