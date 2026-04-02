import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { DimensionDoodle } from "./EngineeringDoodles";

const timelineColors = [
  "hsl(var(--eng-orange))",
  "hsl(var(--eng-magenta))",
  "hsl(var(--eng-purple))",
  "hsl(var(--eng-pink))",
  "hsl(var(--eng-yellow))",
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 border-b border-foreground relative">
      <div className="absolute bottom-8 left-10 opacity-15 hidden lg:block">
        <DimensionDoodle width={100} color="hsl(var(--eng-orange))" />
      </div>

      <div className="px-6 md:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="bracket-label text-eng-orange">[ EXPERIENCE ]</p>
          </motion.div>

          <div className="space-y-0">
            {experiences.map((exp, i) => {
              const color = timelineColors[i % timelineColors.length];
              return (
                <motion.div
                  key={exp.organization + exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-foreground py-8 grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 group hover:bg-foreground/[0.03] transition-colors duration-300 relative"
                >
                  {/* Colored dot */}
                  <div className="absolute left-0 top-8 w-2 h-2 rounded-full hidden md:block" style={{ backgroundColor: color }} />
                  <p className="tech-label text-muted-foreground md:pl-5">{exp.dates.toUpperCase()}</p>
                  <div>
                    <h3 className="text-foreground font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px" }}>
                      {exp.role.toUpperCase()}
                    </h3>
                    <p className="tech-label mb-4" style={{ color }}>{exp.organization.toUpperCase()}</p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + j * 0.05 }}
                          className="text-muted-foreground leading-[1.7] flex gap-3"
                          style={{ fontSize: "13px" }}
                        >
                          <span style={{ color }} className="shrink-0">—</span>
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
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
