import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="editorial-number text-5xl">01.</span>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3">About</p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              Where imagination meets
              <br />
              <em>engineering precision</em>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-[1.8] text-[15px]">
              <p>
                Currently pursuing a <span className="text-foreground">Master's in Technology, Innovation & Entrepreneurship</span> at <span className="text-foreground">King Abdullah University of Science and Technology (KAUST)</span>, sponsored through the KGSP program.
              </p>
              <p>
                I hold a <span className="text-foreground">Bachelor's in Mechanical Engineering</span> from <span className="text-foreground">Purdue University</span>, where I developed strong foundations in design, analysis, manufacturing, and systems thinking.
              </p>
              <p>
                My work spans product design, mechanical systems, CAD/FEA/CFD analysis, prototyping, and taking projects from concept through manufacturing. I seek opportunities in mechanical design, product development, and R&D engineering.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {[
                { label: "Education", value: "MS KAUST · BS Purdue" },
                { label: "Focus", value: "Design & Manufacturing" },
                { label: "Based in", value: "Saudi Arabia" },
              ].map((fact) => (
                <div key={fact.label}>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{fact.label}</p>
                  <p className="text-sm text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
