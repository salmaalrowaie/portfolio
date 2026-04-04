import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const infoCards = [
  { label: "Design Philosophy", value: "Function-first, then elegance. Every part should earn its place.", color: "border-l-eng-orange" },
  { label: "Strengths", value: "Taking projects from concept through analysis to a manufactured product.", color: "border-l-eng-magenta" },
  { label: "Interests", value: "Consumer products, robotics, medical devices, sustainable systems.", color: "border-l-eng-blue" },
  { label: "Targeting", value: "Mechanical design, product development, and R&D engineering roles.", color: "border-l-eng-orange" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-14 border-b border-border">
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
                "I approach engineering the way you'd approach a well-structured argument — every decision backed by analysis, every component justified by its function. I enjoy the full arc of a project: defining the problem, exploring solutions, running the numbers, and building something that works.",
                "My work spans CAD modeling, FEA/CFD simulation, hands-on prototyping, and design for manufacturing. I'm most energized when I can move between the digital model and the physical prototype, iterating until the design is right.",
                "I care about clean documentation, clear communication, and building things that are both technically sound and thoughtfully designed.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  custom={0.05 + i * 0.1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Right — info cards */}
            <motion.div
              custom={0.15}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-border divide-y divide-border"
            >
              {infoCards.map(h => (
                <div key={h.label} className={`px-5 py-3.5 border-l-2 ${h.color}`}>
                  <p className="section-label mb-0.5">{h.label}</p>
                  <p className="text-foreground text-sm">{h.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
