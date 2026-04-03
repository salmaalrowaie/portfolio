import { motion } from "framer-motion";
import { skillCategories } from "@/data/experience";

const categoryColors = [
  "hover:border-l-eng-orange",
  "hover:border-l-eng-magenta",
  "hover:border-l-eng-blue",
  "hover:border-l-eng-orange",
  "hover:border-l-eng-magenta",
  "hover:border-l-eng-blue",
];

const pillColors = [
  "hover:bg-eng-orange hover:text-background hover:border-eng-orange",
  "hover:bg-eng-magenta hover:text-background hover:border-eng-magenta",
  "hover:bg-eng-blue hover:text-background hover:border-eng-blue",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 border-b border-border bg-grid-fine">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label text-eng-blue pt-1"
          >
            Technical Skills
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`bg-background p-5 border-l-2 border-l-transparent ${categoryColors[i % 6]} transition-colors duration-300`}
              >
                <p className="text-foreground text-sm font-semibold mb-3">
                  <span className={`font-bold mr-1.5 ${i % 3 === 0 ? "text-eng-orange" : i % 3 === 1 ? "text-eng-magenta" : "text-eng-blue"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {category.category}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {category.items.map(item => (
                    <span
                      key={item}
                      className={`tech-label px-2 py-1 border border-border text-muted-foreground ${pillColors[i % 3]} transition-colors duration-200 cursor-default`}
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
