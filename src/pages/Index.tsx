import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { EngineeringAccent } from "@/components/EngineeringAccent";
import { projects } from "@/data/projects";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [viewMode, setViewMode] = useState<"stacked" | "grid">("stacked");

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
      <section id="projects" className="py-14 border-b border-border relative overflow-hidden">
        <EngineeringAccent type="crosshair" size={100} className="absolute top-12 right-16 opacity-[0.03]" />

        <div className="px-6 md:px-10 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-[200px_1fr] gap-8 mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-label text-eng-orange pt-1"
            >
              Selected Work
            </motion.p>

            <div className="flex items-start justify-between gap-4">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-foreground mb-1 tracking-tight"
                >
                  Featured <span className="text-eng-orange">Projects</span>
                </motion.h2>
                <p className="section-label">Click any project for the full case study</p>
              </div>

              {/* View toggle */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex border border-border shrink-0"
              >
                <button
                  onClick={() => setViewMode("stacked")}
                  className={`tech-label px-3 py-1.5 transition-colors duration-200 ${viewMode === "stacked" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`tech-label px-3 py-1.5 border-l border-border transition-colors duration-200 ${viewMode === "grid" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                >
                  Grid
                </button>
              </motion.div>
            </div>
          </div>

          <div className={`lg:ml-[232px] ${viewMode === "grid" ? "grid md:grid-cols-2 gap-4" : "space-y-4"}`}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} viewMode={viewMode} />
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:ml-[232px] mt-8 flex justify-center"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="tech-label px-8 py-3 border border-foreground text-foreground hover:bg-eng-magenta hover:border-eng-magenta hover:text-background transition-colors duration-200"
            >
              View All Projects →
            </button>
          </motion.div>
        </div>
      </section>

      <SkillsSection />
      <ExperienceSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border py-5">
        <div className="px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="section-label">© {new Date().getFullYear()} Salma Alrowaie</span>
            <EngineeringAccent type="hammer" size={14} className="opacity-20" />
          </div>
          <div className="flex gap-6">
            <a href="mailto:salmarowaie@gmail.com" className="section-label hover:text-eng-magenta transition-colors">
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
