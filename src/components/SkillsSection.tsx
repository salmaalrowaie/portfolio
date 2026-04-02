import { motion } from "framer-motion";
import { skillCategories } from "@/data/experience";
import { SpringDoodle, GearDoodle } from "./EngineeringDoodles";

const categoryColors = [
  "hsl(var(--eng-orange))",
  "hsl(var(--eng-magenta))",
  "hsl(var(--eng-purple))",
  "hsl(var(--eng-pink))",
  "hsl(var(--eng-yellow))",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 border-b border-foreground relative">
      {/* Doodle accents */}
      <div className="absolute top-16 right-8 opacity-15 hidden lg:block">
        <SpringDoodle color="hsl(var(--eng-pink))" />
      </div>
      <div className="absolute bottom-16 right-16 opacity-15 hidden lg:block">
        <GearDoodle size={70} color="hsl(var(--eng-yellow))" />
      </div>

      <div className="px-6 md:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="bracket-label text-eng-purple">[ CORE THREADS OF MY WORK ]</p>
          </motion.div>

          <div className="space-y-0">
            {skillCategories.map((category, i) => {
              const color = categoryColors[i % categoryColors.length];
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-foreground py-6 grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="tech-label" style={{ color }}>{String(i + 1).padStart(2, "0")}.</span>
                    <span className="tech-label text-foreground font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px" }}>
                      {category.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + j * 0.03, duration: 0.3 }}
                        whileHover={{ scale: 1.1, backgroundColor: color, color: "#fff", borderColor: color }}
                        className="tech-label px-3 py-1.5 border border-foreground text-foreground transition-colors duration-200 cursor-default"
                      >
                        {item.toUpperCase()}
                      </motion.span>
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
