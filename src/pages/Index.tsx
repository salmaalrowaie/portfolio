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

      <div className="section-divider mx-8 md:mx-12" />
      <AboutSection />

      <div className="section-divider mx-8 md:mx-12" />

      {/* Featured Projects */}
      <section id="projects" className="py-32">
        <div className="mx-auto max-w-7xl px-8 md:px-12">
          <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-24 mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="editorial-number text-5xl">02.</span>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3">Work</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Selected <em>projects</em>
              </h2>
              <p className="text-muted-foreground text-[15px] max-w-lg">
                A curated selection of engineering work — click any project for the full case study.
              </p>
            </motion.div>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-8 md:mx-12" />
      <SkillsSection />

      <div className="section-divider mx-8 md:mx-12" />
      <ExperienceSection />

      <div className="section-divider mx-8 md:mx-12" />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            © {new Date().getFullYear()} Salma Alrowaie
          </p>
          <div className="flex gap-8">
            <a href="mailto:salmarowaie@gmail.com" className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300">
              Email
            </a>
            <a href="https://www.linkedin.com/in/salma-alrowaie/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
