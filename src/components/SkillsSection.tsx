import { motion } from "framer-motion";
import { skillCategories } from "@/data/experience";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 border-b border-foreground">
      <div className="px-6 md:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="bracket-label text-muted-foreground">[ CORE THREADS OF MY WORK ]</p>
          </motion.div>

          <div className="space-y-0">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-t border-foreground py-6 grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="tech-label text-muted-foreground">{String(i + 1).padStart(2, "0")}.</span>
                  <span className="tech-label text-foreground font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px" }}>
                    {category.category.toUpperCase()}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="tech-label px-3 py-1.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-200 cursor-default"
                    >
                      {item.toUpperCase()}
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
