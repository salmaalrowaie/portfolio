import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BracketDoodle, BoltDoodle } from "./EngineeringDoodles";

const Counter = ({ target, suffix = "", color }: { target: string; suffix?: string; color?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(target);

  useEffect(() => {
    if (!inView) return;
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

  return <span ref={ref} className="tech-label font-bold" style={{ fontSize: "12px", color: color || "hsl(var(--foreground))" }}>{displayed}</span>;
};

const factColors = ["hsl(var(--eng-orange))", "hsl(var(--eng-magenta))", "hsl(var(--eng-purple))"];

export const AboutSection = () => {
  const facts = [
    { label: "EDUCATION", value: "MS KAUST", extra: "BS PURDUE" },
    { label: "FOCUS", value: "DESIGN &", extra: "MANUFACTURING" },
    { label: "SEEKING", value: "MECH DESIGN", extra: "R&D ROLES" },
  ];

  return (
    <section id="about" className="py-24 border-b border-foreground relative">
      {/* Doodle accents */}
      <div className="absolute top-12 right-10 opacity-20 hidden lg:block">
        <BoltDoodle size={60} color="hsl(var(--eng-yellow))" />
      </div>
      <div className="absolute bottom-12 left-4 opacity-15 hidden lg:block">
        <BracketDoodle size={80} color="hsl(var(--eng-purple))" />
      </div>

      <div className="px-6 md:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="bracket-label text-eng-magenta">[ ABOUT ]</p>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl text-foreground mb-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              NOT A STUDIO — <span className="text-eng-orange">JUST ME</span>
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
                  className={`p-5 ${i < 2 ? "border-r border-foreground" : ""} group hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default relative overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* Colored top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: factColors[i] }} />
                  <p className="tech-label text-muted-foreground group-hover:text-background/60 mb-2">{fact.label}</p>
                  <Counter target={fact.value} color={factColors[i]} />
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
