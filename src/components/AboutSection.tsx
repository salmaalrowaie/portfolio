import { motion } from "framer-motion";
import { TypingText } from "./TypingText";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const infoCards = [
  { label: "Design Philosophy", value: "Function first, then elegance. Every part should earn its place.", color: "border-l-eng-orange", activeColor: "text-eng-orange" },
  { label: "Strengths", value: "Concept-to-prototype thinking, analysis-backed design, clear technical communication.", color: "border-l-eng-magenta", activeColor: "text-eng-magenta" },
  { label: "Interests", value: "Product development, robotics, mechanical systems, user-centered engineering.", color: "border-l-eng-blue", activeColor: "text-eng-blue" },
  { label: "Best At", value: "Turning ambiguous technical ideas into structured, buildable solutions.", color: "border-l-eng-orange", activeColor: "text-eng-orange" },
];

export const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasHovered = useState(false);

  return (
    <section id="about" className="py-14 border-b border-border">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          <TypingText text="About" className="section-label text-eng-magenta pt-1" delay={0.1} />

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
              {infoCards.map((h, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={h.label}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`px-5 py-3.5 border-l-2 ${h.color} cursor-default transition-all duration-300 ${
                      isActive ? "bg-muted/40 -translate-y-[1px]" : "opacity-50 hover:opacity-75"
                    }`}
                  >
                    <p className={`section-label mb-0.5 transition-colors duration-300 ${isActive ? h.activeColor : ""}`}>
                      {h.label}
                    </p>
                    <motion.p
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.6, height: isActive ? "auto" : "1.25rem" }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="text-foreground text-sm overflow-hidden"
                    >
                      {h.value}
                    </motion.p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};