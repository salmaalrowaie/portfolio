import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const charVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.03, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <span className={className}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={charVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : undefined }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const specialties = [
  { label: "Product Design & CAD", desc: "SolidWorks · CATIA · Fusion 360", color: "text-eng-orange", hoverBg: "hover:bg-eng-orange/5", hoverBorder: "hover:border-eng-orange" },
  { label: "Analysis & Simulation", desc: "FEA · CFD · Thermal · ANSYS", color: "text-eng-magenta", hoverBg: "hover:bg-eng-magenta/5", hoverBorder: "hover:border-eng-magenta" },
  { label: "Prototyping & Mfg", desc: "CNC · 3D Printing · Laser Cutting", color: "text-eng-blue", hoverBg: "hover:bg-eng-blue/5", hoverBorder: "hover:border-eng-blue" },
];

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex flex-col justify-center bg-construction-lines overflow-hidden">
      <div className="px-6 md:px-10 lg:px-16 py-14">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left — Headline */}
          <motion.div style={{ y: headlineY }}>
            <motion.p
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="section-label mb-5 text-eng-orange"
            >
              Mechanical Engineer
            </motion.p>

            <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-foreground mb-6">
              <AnimatedText text="Salma" />
              <br />
              <AnimatedText text="Alrowaie" className="text-eng-orange" />
            </h1>

            <motion.p
              custom={0.6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-muted-foreground max-w-md leading-relaxed text-[15px]"
            >
              Design-driven mechanical engineer focused on product development, analysis, and prototyping. Currently pursuing an MS at{" "}
              <span className="text-eng-blue font-medium">KAUST</span> after completing a BS at{" "}
              <span className="text-eng-magenta font-medium">Purdue</span>.
            </motion.p>

            <motion.div
              custom={0.75}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex gap-3 mt-7"
            >
              <a
                href="mailto:salmarowaie@gmail.com"
                className="tech-label px-5 py-2.5 border border-foreground text-foreground hover:bg-eng-orange hover:border-eng-orange hover:text-background transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/salma-alrowaie/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-label px-5 py-2.5 border border-foreground text-foreground hover:bg-eng-blue hover:border-eng-blue hover:text-background transition-colors duration-200"
              >
                LinkedIn
              </a>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="tech-label px-5 py-2.5 bg-eng-orange text-background border border-eng-orange hover:bg-transparent hover:text-foreground transition-colors duration-200"
              >
                View Work
              </button>
            </motion.div>
          </motion.div>

          {/* Right — Summary card */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="border border-border divide-y divide-border"
          >
            <div className="p-5 grid grid-cols-2 gap-4">
              <div>
                <p className="section-label mb-1">Education</p>
                <p className="text-foreground text-sm font-medium">MS — <span className="text-eng-blue">KAUST</span></p>
                <p className="text-muted-foreground text-xs">Technology & Innovation</p>
              </div>
              <div>
                <p className="section-label mb-1">Undergraduate</p>
                <p className="text-foreground text-sm font-medium">BS — <span className="text-eng-magenta">Purdue</span></p>
                <p className="text-muted-foreground text-xs">Mechanical Engineering</p>
              </div>
            </div>

            <div className="p-5">
              <p className="section-label mb-2">Focus Areas</p>
              <div className="flex flex-wrap gap-1.5">
                {["Product Design", "FEA/CFD", "Prototyping", "DFM", "Systems Design", "R&D"].map((tag, i) => {
                  const colors = ["border-eng-orange/40 text-eng-orange", "border-eng-magenta/40 text-eng-magenta", "border-eng-blue/40 text-eng-blue"];
                  return (
                    <span key={tag} className={`tech-label px-2.5 py-1 border ${colors[i % 3]} hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-200`}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="p-5">
              <p className="section-label mb-2">Tools</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                SolidWorks · CATIA · ANSYS · MATLAB · Python · Fusion 360
              </p>
            </div>

            <div className="p-5">
              <p className="section-label mb-1">Currently</p>
              <p className="text-foreground text-sm">Seeking design & R&D engineering roles</p>
            </div>
          </motion.div>
        </div>

        {/* Specialties bar */}
        <motion.div
          custom={0.85}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-px bg-border mt-12 border border-border"
        >
          {specialties.map((s, i) => (
            <div key={s.label} className={`bg-background p-5 border-b-2 border-b-transparent ${s.hoverBorder} ${s.hoverBg} transition-all duration-200 cursor-default`}>
              <p className="text-foreground text-sm font-semibold mb-1">
                <span className={`${s.color} font-bold mr-2`}>{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </p>
              <p className="text-muted-foreground text-xs">{s.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="border-t border-border px-6 md:px-10 lg:px-16 py-3 flex items-center justify-between"
      >
        <span className="section-label text-eng-orange">↓ Scroll</span>
        <span className="section-label">KAUST, Saudi Arabia</span>
      </motion.div>
    </section>
  );
};
