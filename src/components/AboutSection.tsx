import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const infoCards = [
  { label: "Design Philosophy", value: "Function first, then elegance. Every part should earn its place.", color: "border-l-eng-orange", hoverColor: "hover:border-l-eng-orange/80" },
  { label: "Strengths", value: "Concept-to-prototype thinking, analysis-backed design, clear technical communication.", color: "border-l-eng-magenta", hoverColor: "hover:border-l-eng-magenta/80" },
  { label: "Interests", value: "Product development, robotics, mechanical systems, user-centered engineering.", color: "border-l-eng-blue", hoverColor: "hover:border-l-eng-blue/80" },
  { label: "Best At", value: "Turning ambiguous technical ideas into structured, buildable solutions.", color: "border-l-eng-orange", hoverColor: "hover:border-l-eng-orange/80" },
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
                "I approach engineering as a balance of function, analysis, and buildability. I enjoy taking ideas from early concept through modeling, validation, prototyping, and refinement — until they are technically sound and practical to manufacture.",
                "My work is strongest when I can move between structured technical problem-solving and the bigger product picture — making sure a design is not only functional, but thoughtful, well-documented, and useful in the real world.",
                "I'm especially drawn to product development and R&D environments where iteration matters, and where engineering decisions need to be analytical, hands-on, and clearly communicated.",
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

            {/* Right — strategy card */}
            <motion.div
              custom={0.15}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-border divide-y divide-border"
            >
              {infoCards.map(h => (
                <div key={h.label} className={`px-5 py-3.5 border-l-2 ${h.color} hover:bg-muted/30 transition-colors duration-200 cursor-default`}>
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
