import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { useState } from "react";
import { TypingText } from "./TypingText";

const dotColors = ["bg-eng-orange", "bg-eng-magenta", "bg-eng-blue"];
const textColors = ["text-eng-orange", "text-eng-magenta", "text-eng-blue"];

export const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-14 border-b border-border">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label text-eng-orange pt-1"
          >
            Experience
          </motion.p>

          <div className="divide-y divide-border border-t border-border">
            {experiences.map((exp, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={exp.organization + exp.role}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`py-5 grid md:grid-cols-[160px_1fr] gap-3 md:gap-6 cursor-default transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-40"}`}
                >
                  <p className="section-label pt-0.5 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? dotColors[i % 3] : "bg-border"}`} />
                    {exp.dates}
                  </p>
                  <div>
                    <h3 className="text-foreground text-sm font-semibold mb-0.5">{exp.role}</h3>
                    <p className={`text-xs font-medium mb-2 transition-colors duration-300 ${isActive ? textColors[i % 3] : "text-muted-foreground"}`}>
                      {exp.organization}
                    </p>
                    <motion.ul
                      className="space-y-1.5 overflow-hidden"
                      initial={false}
                      animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {exp.bullets.map((bullet, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -8 }}
                          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                          transition={{ delay: isActive ? j * 0.06 : 0, duration: 0.3 }}
                          className="text-muted-foreground text-[13px] leading-relaxed flex gap-2"
                        >
                          <span className="text-border shrink-0">—</span>
                          {bullet}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
