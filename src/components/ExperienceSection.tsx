import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

const dotColors = ["bg-eng-orange", "bg-eng-magenta", "bg-eng-blue"];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 border-b border-border">
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
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.organization + exp.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="py-5 grid md:grid-cols-[160px_1fr] gap-3 md:gap-6 group"
              >
                <p className="section-label pt-0.5 flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${dotColors[i % 3]}`} />
                  {exp.dates}
                </p>
                <div>
                  <h3 className="text-foreground text-sm font-semibold mb-0.5">{exp.role}</h3>
                  <p className={`text-xs font-medium mb-3 ${i % 3 === 0 ? "text-eng-orange" : i % 3 === 1 ? "text-eng-magenta" : "text-eng-blue"}`}>
                    {exp.organization}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-muted-foreground text-[13px] leading-relaxed flex gap-2">
                        <span className="text-border shrink-0">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
