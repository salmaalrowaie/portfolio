import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="editorial-number text-5xl">04.</span>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3">Experience</p>
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl text-foreground mb-16 leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where I've <em>contributed</em>
            </motion.h2>

            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.organization + exp.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12 py-10 border-t border-border first:border-t-0 first:pt-0"
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground pt-1">{exp.dates}</p>
                  <div>
                    <h3 className="text-foreground text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{exp.organization}</p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="text-muted-foreground text-sm leading-[1.7] flex gap-3">
                          <span className="text-border mt-1 shrink-0">—</span>
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
      </div>
    </section>
  );
};
