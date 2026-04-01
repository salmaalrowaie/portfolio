import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="editorial-number text-5xl">05.</span>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3">Contact</p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let's build something
              <br />
              <em>together</em>
            </h2>

            <p className="text-muted-foreground text-[15px] leading-[1.8] mb-14 max-w-lg">
              Open to opportunities in mechanical design, product development, and R&D engineering. Feel free to reach out.
            </p>

            <div className="space-y-8">
              <div className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</p>
                <a href="mailto:salmarowaie@gmail.com" className="text-foreground hover:text-muted-foreground transition-colors text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  salmarowaie@gmail.com
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/salma-alrowaie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  linkedin.com/in/salma-alrowaie
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Location</p>
                <p className="text-foreground text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  KAUST, Saudi Arabia
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
