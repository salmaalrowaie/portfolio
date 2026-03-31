import { motion } from "framer-motion";
import { Mail, Linkedin, FileText, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm open to opportunities in mechanical design, product development, and R&D engineering. Feel free to reach out.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:salmarowaie@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors group"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">salmarowaie@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/salma-alrowaie/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors group"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-sm text-muted-foreground">linkedin.com/in/salma-alrowaie</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors group"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Resume</p>
                <p className="text-sm text-muted-foreground">Download PDF</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">KAUST, Saudi Arabia</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
