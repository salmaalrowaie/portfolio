import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 border-b border-foreground">
      <div className="px-6 md:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="bracket-label text-muted-foreground">[ EXPERIENCE ]</p>
          </motion.div>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.organization + exp.role}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-t border-foreground py-8 grid md:grid-cols-[180px_1fr] gap-4 md:gap-8"
              >
                <p className="tech-label text-muted-foreground">{exp.dates.toUpperCase()}</p>
                <div>
                  <h3 className="text-foreground font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px" }}>
                    {exp.role.toUpperCase()}
                  </h3>
                  <p className="tech-label text-muted-foreground mb-4">{exp.organization.toUpperCase()}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-muted-foreground leading-[1.7] flex gap-3" style={{ fontSize: "13px" }}>
                        <span className="text-foreground shrink-0">—</span>
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
