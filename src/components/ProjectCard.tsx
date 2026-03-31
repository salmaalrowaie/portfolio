import { Project } from "@/types/project";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group cursor-pointer"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl bg-secondary aspect-[4/3] border border-border">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-border">
            <ArrowUpRight className="h-4 w-4 text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="py-2">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
            <span>{project.semester} {project.year}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>{project.role}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-3">
            {project.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
