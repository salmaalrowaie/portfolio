import { Card } from "@/components/ui/card";
import { Project } from "@/types/project";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/project/${project.id}`)}
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl border-border/50 backdrop-blur-sm"
      style={{ background: 'var(--gradient-card)' }}
    >
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 space-y-3">
        <div className="flex gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            {project.year}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-accent/30 text-accent">
            {project.semester}
          </span>
        </div>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
      </div>
    </Card>
  );
};
