import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-bg">
      <Navbar />
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <p className="mono text-primary text-sm tracking-widest uppercase mb-4">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Engineering Projects
            </h2>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </motion.div>

          <div className="space-y-20 lg:space-y-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="mono text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Salma Alrowaie
          </p>
          <div className="flex gap-6">
            <a href="mailto:salmarowaie@gmail.com" className="mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider">
              Email
            </a>
            <a href="https://www.linkedin.com/in/salma-alrowaie/" target="_blank" rel="noopener noreferrer" className="mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
