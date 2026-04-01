import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="px-6 md:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="bracket-label text-muted-foreground">[ CONTACT ]</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              LET'S CONNECT
            </h2>

            <p className="text-muted-foreground leading-[1.8] mb-12" style={{ fontSize: "13px" }}>
              Open to opportunities in mechanical design, product development, and R&D engineering. Feel free to reach out.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:salmarowaie@gmail.com"
                className="info-box flex flex-col hover:bg-foreground hover:text-background transition-colors duration-200 group"
              >
                <span className="tech-label opacity-50 mb-2">EMAIL</span>
                <span className="tech-label text-inherit" style={{ fontSize: "12px" }}>SALMAROWAIE@GMAIL.COM</span>
              </a>

              <a
                href="https://www.linkedin.com/in/salma-alrowaie/"
                target="_blank"
                rel="noopener noreferrer"
                className="info-box flex flex-col hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                <span className="tech-label opacity-50 mb-2">LINKEDIN</span>
                <span className="tech-label text-inherit" style={{ fontSize: "12px" }}>SALMA-ALROWAIE</span>
              </a>

              <div className="info-box flex flex-col">
                <span className="tech-label text-muted-foreground mb-2">LOCATION</span>
                <span className="tech-label text-foreground" style={{ fontSize: "12px" }}>KAUST, SAUDI ARABIA</span>
              </div>

              <a href="#" className="info-box flex flex-col hover:bg-foreground hover:text-background transition-colors duration-200">
                <span className="tech-label opacity-50 mb-2">RESUME</span>
                <span className="tech-label text-inherit" style={{ fontSize: "12px" }}>DOWNLOAD PDF</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
