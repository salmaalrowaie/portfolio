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
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] bg-card border-border"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {project.semester} {project.year}
        </p>
      </div>
    </Card>
  );
};
