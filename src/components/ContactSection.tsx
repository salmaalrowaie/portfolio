import { motion } from "framer-motion";
import { TypingText } from "./TypingText";

const contactItems = [
  { label: "Email", value: "salmarowaie@gmail.com", href: "mailto:salmarowaie@gmail.com", hoverColor: "hover:border-l-eng-orange hover:text-eng-orange" },
  { label: "LinkedIn", value: "salma-alrowaie", href: "https://www.linkedin.com/in/salma-alrowaie/", external: true, hoverColor: "hover:border-l-eng-blue hover:text-eng-blue" },
  { label: "Location", value: "KAUST, Saudi Arabia", hoverColor: "hover:border-l-eng-magenta" },
  { label: "Resume", value: "Download PDF", href: "#", hoverColor: "hover:border-l-eng-orange hover:text-eng-orange" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-14">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label text-eng-blue pt-1"
          >
            Contact
          </motion.p>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl text-foreground mb-2 tracking-tight"
            >
              Let's <span className="text-eng-orange">Connect</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-muted-foreground text-sm mb-6 max-w-md"
            >
              Open to opportunities in mechanical design, product development, and R&D engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="grid sm:grid-cols-2 gap-px bg-border border border-border max-w-lg"
            >
              {contactItems.map(item => {
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`bg-background px-5 py-4 border-l-2 border-l-transparent ${item.hoverColor} transition-all duration-200 ${item.href ? "hover:bg-secondary cursor-pointer" : ""}`}
                  >
                    <p className="section-label mb-1">{item.label}</p>
                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                  </Tag>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
