import { motion } from "framer-motion";
import { skillCategories } from "@/data/experience";
import { EngineeringAccent } from "./EngineeringAccent";

const categoryAccents = [
  { num: "text-eng-orange", pill: "hover:bg-eng-orange hover:text-background hover:border-eng-orange", border: "hover:border-l-eng-orange" },
  { num: "text-eng-magenta", pill: "hover:bg-eng-magenta hover:text-background hover:border-eng-magenta", border: "hover:border-l-eng-magenta" },
  { num: "text-eng-blue", pill: "hover:bg-eng-blue hover:text-background hover:border-eng-blue", border: "hover:border-l-eng-blue" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-14 border-b border-border bg-grid-fine relative overflow-hidden">
      <EngineeringAccent type="gear" size={240} className="absolute -bottom-16 -right-16 opacity-[0.06]" speed={90} />
      <EngineeringAccent type="ring" size={160} className="absolute top-8 -left-12 opacity-[0.06]" speed={120} />

      <div className="px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label text-eng-blue pt-1"
          >
            Technical Skills
          </motion.p>

          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {skillCategories.map((category, i) => {
              const accent = categoryAccents[i % 3];
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`bg-background p-5 border-l-2 border-l-transparent ${accent.border} transition-colors duration-300`}
                >
                  <p className="text-foreground text-sm font-semibold mb-3">
                    <span className={`font-bold mr-1.5 ${accent.num}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {category.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map(item => (
                      <span
                        key={item}
                        className={`tech-label px-2 py-1 border border-border text-muted-foreground ${accent.pill} transition-colors duration-200 cursor-default`}
                      >
                        {item}
                      </span>
                    ))}
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
