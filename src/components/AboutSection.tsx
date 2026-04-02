import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(target);

  useEffect(() => {
    if (!inView) return;
    // Scramble effect
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayed(
        target.split("").map((char, i) => {
          if (i < iteration) return target[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("") + suffix
      );
      iteration += 1 / 2;
      if (iteration >= target.length) {
        setDisplayed(target + suffix);
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [inView, target, suffix]);

  return <span ref={ref} className="tech-label text-foreground font-bold" style={{ fontSize: "12px" }}>{displayed}</span>;
};

export const AboutSection = () => {
  const facts = [
    { label: "EDUCATION", value: "MS KAUST", extra: "BS PURDUE" },
    { label: "FOCUS", value: "DESIGN &", extra: "MANUFACTURING" },
    { label: "SEEKING", value: "MECH DESIGN", extra: "R&D ROLES" },
  ];

  return (
    <section id="about" className="py-24 border-b border-foreground">
      <div className="px-6 md:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="bracket-label text-muted-foreground">[ ABOUT ]</p>
          </motion.div>

          {/* Content */}
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl text-foreground mb-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              NOT A STUDIO — JUST ME
            </motion.h2>

            <div className="space-y-6 text-muted-foreground leading-[1.8]">
              {[
                "I'm a mechanical engineer currently pursuing a Master's in Technology, Innovation & Entrepreneurship at KAUST, sponsored through the KGSP program.",
                "I hold a Bachelor's in Mechanical Engineering from Purdue University, where I developed strong foundations in design, analysis, manufacturing, and systems thinking.",
                "My work spans product design, mechanical systems, CAD/FEA/CFD analysis, prototyping, and taking projects from concept through manufacturing.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Animated facts grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid grid-cols-3 border border-foreground"
            >
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  className={`p-5 ${i < 2 ? "border-r border-foreground" : ""} group hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="tech-label text-muted-foreground group-hover:text-background/60 mb-2">{fact.label}</p>
                  <Counter target={fact.value} />
                  <br />
                  <Counter target={fact.extra} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
