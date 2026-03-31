import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Where I've Worked</h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.organization + exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid md:grid-cols-[240px_1fr] gap-4 md:gap-8 py-8 border-b border-border last:border-0"
            >
              <div>
                <p className="text-sm text-muted-foreground">{exp.dates}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">{exp.role}</h3>
                <p className="text-primary text-sm font-medium mb-3">{exp.organization}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
