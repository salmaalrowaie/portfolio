import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left side - Dark Hero Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8 lg:p-12">
          <Hero />
        </div>
        
        {/* Right side - Light Projects Grid */}
        <div className="bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-2xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-3 tracking-tight">
                Engineering Projects
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-border/50 bg-secondary/30 py-8 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 text-center text-muted-foreground sm:px-6 lg:px-8">
          <p className="text-sm">© {new Date().getFullYear()} Salma Alrowaie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
