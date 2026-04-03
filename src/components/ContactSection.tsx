import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const contactItems = [
  { label: "Email", value: "salmarowaie@gmail.com", href: "mailto:salmarowaie@gmail.com" },
  { label: "LinkedIn", value: "salma-alrowaie", href: "https://www.linkedin.com/in/salma-alrowaie/", external: true },
  { label: "Location", value: "KAUST, Saudi Arabia" },
  { label: "Resume", value: "Download PDF", href: "#" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
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
            Contact
          </motion.p>

          <div>
            <motion.h2
              custom={0.05}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-foreground mb-3 tracking-tight"
            >
              Let's Connect
            </motion.h2>

            <motion.p
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-muted-foreground text-sm mb-8 max-w-md"
            >
              Open to opportunities in mechanical design, product development, and R&D engineering.
            </motion.p>

            <motion.div
              custom={0.15}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-px bg-border border border-border max-w-lg"
            >
              {contactItems.map(item => {
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`bg-background px-5 py-4 ${item.href ? "hover:bg-secondary transition-colors duration-200" : ""}`}
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
