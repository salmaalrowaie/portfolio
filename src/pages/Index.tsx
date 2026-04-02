import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/data/projects";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-foreground z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      <AboutSection />

      {/* Featured Projects */}
      <section id="projects" className="py-24 border-b border-foreground">
        <div className="px-6 md:px-10">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="bracket-label text-muted-foreground">[ SELECTED WORK ]</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl text-foreground mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                FEATURED PROJECTS
              </h2>
              <p className="tech-label text-muted-foreground">
                CLICK ANY PROJECT FOR THE FULL CASE STUDY
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />
      <ExperienceSection />
      <ContactSection />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-foreground py-6"
      >
        <div className="px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="tech-label text-muted-foreground">
            © {new Date().getFullYear()} SALMA ALROWAIE
          </span>
          <div className="flex gap-6">
            <a href="mailto:salmarowaie@gmail.com" className="tech-label text-muted-foreground hover:text-foreground transition-colors">
              EMAIL
            </a>
            <a href="https://www.linkedin.com/in/salma-alrowaie/" target="_blank" rel="noopener noreferrer" className="tech-label text-muted-foreground hover:text-foreground transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
