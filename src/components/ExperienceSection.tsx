import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 border-b border-border">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-label text-eng-orange pt-1"
          >
            Experience
          </motion.p>

          <div className="divide-y divide-border border-t border-border">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.organization + exp.role}
                custom={0.05 + i * 0.08}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-5 grid md:grid-cols-[160px_1fr] gap-3 md:gap-6"
              >
                <p className="section-label pt-0.5">{exp.dates}</p>
                <div>
                  <h3 className="text-foreground text-sm font-semibold mb-0.5">{exp.role}</h3>
                  <p className="text-eng-magenta text-xs font-medium mb-3">{exp.organization}</p>
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
