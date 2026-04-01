import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-b border-foreground">
      <div className="px-6 md:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="bracket-label text-muted-foreground">[ ABOUT ]</p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl text-foreground mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              NOT A STUDIO — JUST ME
            </h2>

            <div className="space-y-6 text-muted-foreground leading-[1.8]">
              <p>
                I'm a mechanical engineer currently pursuing a Master's in Technology, Innovation & Entrepreneurship at KAUST, sponsored through the KGSP program.
              </p>
              <p>
                I hold a Bachelor's in Mechanical Engineering from Purdue University, where I developed strong foundations in design, analysis, manufacturing, and systems thinking.
              </p>
              <p>
                My work spans product design, mechanical systems, CAD/FEA/CFD analysis, prototyping, and taking projects from concept through manufacturing.
              </p>
            </div>

            {/* Facts grid */}
            <div className="mt-12 grid grid-cols-3 border border-foreground">
              {[
                { label: "EDUCATION", value: "MS KAUST\nBS PURDUE" },
                { label: "FOCUS", value: "DESIGN &\nMANUFACTURING" },
                { label: "SEEKING", value: "MECH DESIGN\nR&D ROLES" },
              ].map((fact, i) => (
                <div key={fact.label} className={`p-5 ${i < 2 ? "border-r border-foreground" : ""}`}>
                  <p className="tech-label text-muted-foreground mb-2">{fact.label}</p>
                  <p className="tech-label text-foreground whitespace-pre-line font-bold" style={{ fontSize: "12px" }}>{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
