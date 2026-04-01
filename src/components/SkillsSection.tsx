import { motion } from "framer-motion";
import { skillCategories } from "@/data/experience";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="editorial-number text-5xl">03.</span>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3">Skills</p>
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
              Core threads of <em>my work</em>
            </motion.h2>

            <div className="space-y-12">
              {skillCategories.map((category, i) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-t border-border pt-8"
                >
                  <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">{category.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm text-foreground px-4 py-2 border border-border hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default"
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
      </div>
    </section>
  );
};
