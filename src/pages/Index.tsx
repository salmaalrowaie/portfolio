import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Engineering Portfolio
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" style={{ boxShadow: 'var(--shadow-accent)' }} />
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer className="border-t border-border/50 bg-secondary/30 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 text-center text-muted-foreground sm:px-6 lg:px-8">
          <p className="text-sm">© {new Date().getFullYear()} Salma Alrowaie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
