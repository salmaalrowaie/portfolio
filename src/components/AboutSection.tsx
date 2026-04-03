import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const highlights = [
  { label: "Education", value: "MS KAUST · BS Purdue" },
  { label: "Focus", value: "Design & Manufacturing" },
  { label: "Seeking", value: "Mech Design / R&D Roles" },
  { label: "Location", value: "KAUST, Saudi Arabia" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 border-b border-border">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-label text-eng-magenta pt-1"
          >
            About
          </motion.p>

          <div className="grid md:grid-cols-[1fr_280px] gap-10">
            {/* Left — text */}
            <div className="space-y-4 text-muted-foreground text-[14px] leading-[1.75]">
              {[
                "Mechanical engineer currently pursuing a Master's in Technology, Innovation & Entrepreneurship at KAUST, sponsored through the KGSP program.",
                "I hold a Bachelor's in Mechanical Engineering from Purdue University, with strong foundations in design, analysis, manufacturing, and systems thinking.",
                "My work spans product design, mechanical systems, CAD/FEA/CFD analysis, prototyping, and taking projects from concept through manufacturing.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  custom={0.05 + i * 0.08}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Right — highlights */}
            <motion.div
              custom={0.15}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-border divide-y divide-border"
            >
              {highlights.map(h => (
                <div key={h.label} className="px-5 py-3.5">
                  <p className="section-label mb-0.5">{h.label}</p>
                  <p className="text-foreground text-sm font-medium">{h.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
