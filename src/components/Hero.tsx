import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const specialties = [
  { label: "Product Design & CAD", desc: "SolidWorks, CATIA, Fusion 360" },
  { label: "Analysis & Simulation", desc: "FEA, CFD, Thermal, ANSYS" },
  { label: "Prototyping & Manufacturing", desc: "CNC, 3D Printing, Laser Cutting" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-construction-lines">
      <div className="px-6 md:px-10 lg:px-16 py-16">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left — Headline */}
          <div>
            <motion.p
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="section-label mb-6 text-eng-orange"
            >
              Mechanical Engineer
            </motion.p>

            <motion.h1
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-foreground mb-8"
            >
              Salma<br />
              <span className="text-eng-orange">Alrowaie</span>
            </motion.h1>

            <motion.p
              custom={0.35}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-muted-foreground max-w-md leading-relaxed text-[15px]"
            >
              Mechanical engineer focused on design, analysis, prototyping, and product development. Currently pursuing an MS in Technology, Innovation & Entrepreneurship at KAUST.
            </motion.p>

            <motion.div
              custom={0.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex gap-3 mt-8"
            >
              <a
                href="mailto:salmarowaie@gmail.com"
                className="tech-label px-5 py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/salma-alrowaie/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-label px-5 py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                LinkedIn
              </a>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="tech-label px-5 py-2.5 bg-eng-orange text-white border border-eng-orange hover:bg-transparent hover:text-foreground transition-colors duration-200"
              >
                View Work
              </button>
            </motion.div>
          </div>

          {/* Right — Summary card */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="border border-border p-6 lg:p-8 space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="section-label mb-1">Education</p>
                <p className="text-foreground text-sm font-medium">MS — KAUST</p>
                <p className="text-muted-foreground text-xs">Technology & Innovation</p>
              </div>
              <div>
                <p className="section-label mb-1">Undergraduate</p>
                <p className="text-foreground text-sm font-medium">BS — Purdue</p>
                <p className="text-muted-foreground text-xs">Mechanical Engineering</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div>
              <p className="section-label mb-2">Focus Areas</p>
              <div className="flex flex-wrap gap-1.5">
                {["Product Design", "FEA/CFD", "Prototyping", "DFM", "Systems Design", "R&D"].map(tag => (
                  <span key={tag} className="tech-label px-2.5 py-1 border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-border" />

            <div>
              <p className="section-label mb-2">Tools</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                SolidWorks · CATIA · ANSYS · MATLAB · Python · Fusion 360
              </p>
            </div>
          </motion.div>
        </div>

        {/* Specialties bar */}
        <motion.div
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-px bg-border mt-14 border border-border"
        >
          {specialties.map((s, i) => (
            <div key={s.label} className="bg-background p-5 group hover:bg-secondary transition-colors duration-200">
              <p className="text-foreground text-sm font-semibold mb-1">
                <span className="text-muted-foreground font-normal mr-2">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </p>
              <p className="text-muted-foreground text-xs">{s.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="border-t border-border px-6 md:px-10 lg:px-16 py-3 flex items-center justify-between">
        <span className="section-label text-eng-orange">↓ Scroll</span>
        <span className="section-label">KAUST, Saudi Arabia</span>
      </div>
    </section>
  );
};
