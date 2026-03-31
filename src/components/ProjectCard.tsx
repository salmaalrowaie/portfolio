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
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group cursor-pointer relative"
    >
      <div className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${isEven ? "" : "lg:direction-rtl"}`}>
        {/* Image */}
        <div className={`relative overflow-hidden rounded-xl bg-secondary aspect-[4/3] ${isEven ? "" : "lg:order-2"}`}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover indicator */}
          <div className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className={`space-y-4 ${isEven ? "" : "lg:order-1 lg:text-right"}`}>
          <div className={`flex gap-3 mono text-xs tracking-wider ${isEven ? "" : "lg:justify-end"}`}>
            <span className="text-primary">{project.year}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{project.semester}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
            {project.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed line-clamp-2">
            {project.objectives}
          </p>

          <div className={`flex flex-wrap gap-2 ${isEven ? "" : "lg:justify-end"}`}>
            {project.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="mono text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-primary/80 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
