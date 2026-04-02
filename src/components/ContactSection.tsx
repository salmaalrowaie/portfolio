import { motion } from "framer-motion";
import { CompassDoodle } from "./EngineeringDoodles";

const contactItems = [
  { label: "EMAIL", value: "SALMAROWAIE@GMAIL.COM", href: "mailto:salmarowaie@gmail.com", color: "hsl(var(--eng-orange))" },
  { label: "LINKEDIN", value: "SALMA-ALROWAIE", href: "https://www.linkedin.com/in/salma-alrowaie/", external: true, color: "hsl(var(--eng-purple))" },
  { label: "LOCATION", value: "KAUST, SAUDI ARABIA", color: "hsl(var(--eng-magenta))" },
  { label: "RESUME", value: "DOWNLOAD PDF", href: "#", color: "hsl(var(--eng-pink))" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-10 right-12 opacity-15 hidden lg:block">
        <CompassDoodle size={80} color="hsl(var(--eng-yellow))" />
      </div>

      <div className="px-6 md:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="bracket-label text-eng-pink">[ CONTACT ]</p>
          </motion.div>

          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl text-foreground mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              LET'S <span className="text-eng-orange">CONNECT</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground leading-[1.8] mb-12"
              style={{ fontSize: "13px" }}
            >
              Open to opportunities in mechanical design, product development, and R&D engineering. Feel free to reach out.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item, i) => {
                const Tag = item.href ? motion.a : motion.div;
                return (
                  <Tag
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={item.href ? { scale: 1.03 } : undefined}
                    whileTap={item.href ? { scale: 0.98 } : undefined}
                    {...(item.href ? { href: item.href } : {})}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`info-box flex flex-col relative overflow-hidden ${item.href ? "hover:bg-foreground hover:text-background transition-colors duration-200 group" : ""}`}
                  >
                    {/* Colored top stripe */}
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: item.color }} />
                    <span className="tech-label opacity-50 mb-2">{item.label}</span>
                    <span className="tech-label text-inherit" style={{ fontSize: "12px" }}>{item.value}</span>
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
