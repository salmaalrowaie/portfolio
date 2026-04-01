import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <AboutSection />

      {/* Featured Projects */}
      <section id="projects" className="py-24 border-b border-foreground">
        <div className="px-6 md:px-10">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="bracket-label text-muted-foreground">[ SELECTED WORK ]</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
      <footer className="border-t border-foreground py-6">
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
      </footer>
    </div>
  );
};

export default Index;
