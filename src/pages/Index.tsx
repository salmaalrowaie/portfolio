import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { LayoutGrid, List } from "lucide-react";

const Index = () => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

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
            className="mb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          >
            <div>
              <p className="mono text-primary text-sm tracking-widest uppercase mb-4">Portfolio</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                Engineering Projects
              </h2>
              <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-lg border border-border bg-secondary/50">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            key={viewMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-20 lg:space-y-32"
            }
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} viewMode={viewMode} />
            ))}
          </motion.div>
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
