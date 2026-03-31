import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Background</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-4">
            <p className="text-foreground/80 leading-relaxed">
              I'm a mechanical engineer currently pursuing a <span className="font-semibold text-foreground">Master's in Technology, Innovation & Entrepreneurship</span> at <span className="font-semibold text-foreground">King Abdullah University of Science and Technology (KAUST)</span>, sponsored through the KAUST Gifted Student Program (KGSP).
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I hold a <span className="font-semibold text-foreground">Bachelor's in Mechanical Engineering</span> from <span className="font-semibold text-foreground">Purdue University</span>, where I developed strong foundations in design, analysis, manufacturing, and systems thinking.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-foreground/80 leading-relaxed">
              My core interests span product design, mechanical systems, CAD/FEA/CFD analysis, prototyping, and taking projects from concept through manufacturing. I enjoy working at the intersection of engineering fundamentals and practical problem-solving.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I'm seeking opportunities in <span className="font-semibold text-foreground">mechanical design, product development, and R&D engineering</span> where I can apply my technical skills and hands-on experience to build things that matter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
