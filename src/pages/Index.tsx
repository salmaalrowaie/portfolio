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
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-eng-orange z-[60]"
      />

      <Navbar />
      <Hero />
      <AboutSection />

      {/* Projects */}
      <section id="projects" className="py-16 border-b border-border bg-grid-subtle">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[200px_1fr] gap-8 mb-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-label text-eng-orange pt-1"
            >
              Selected Work
            </motion.p>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-foreground mb-2 tracking-tight"
              >
                Featured <span className="text-eng-orange">Projects</span>
              </motion.h2>
              <p className="section-label">Click any project for the full case study</p>
            </div>
          </div>

          <div className="space-y-4 lg:ml-[232px]">
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
      <footer className="border-t border-border py-5">
        <div className="px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="section-label">© {new Date().getFullYear()} Salma Alrowaie</span>
          <div className="flex gap-6">
            <a href="mailto:salmarowaie@gmail.com" className="section-label hover:text-eng-orange transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/salma-alrowaie/" target="_blank" rel="noopener noreferrer" className="section-label hover:text-eng-blue transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
