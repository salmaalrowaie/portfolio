import { motion } from "framer-motion";
import { skillCategories } from "@/data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 border-b border-border bg-grid-fine">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-label text-eng-blue pt-1"
          >
            Technical Skills
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.category}
                custom={0.05 + i * 0.08}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-background p-5"
              >
                <p className="text-foreground text-sm font-semibold mb-3">
                  <span className="text-muted-foreground font-normal mr-1.5">{String(i + 1).padStart(2, "0")}</span>
                  {category.category}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {category.items.map(item => (
                    <span
                      key={item}
                      className="tech-label px-2 py-1 border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
