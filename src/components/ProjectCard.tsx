import { Project } from "@/types/project";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const navigate = useNavigate();
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group cursor-pointer"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Image */}
        <div className={`relative overflow-hidden aspect-[4/3] bg-muted ${index % 2 === 1 ? "lg:order-2" : ""}`}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className={`flex flex-col justify-center py-4 lg:py-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
          <span className="editorial-number text-3xl mb-4">{num}.</span>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
            <span>{project.semester} {project.year}</span>
            <span className="w-4 h-px bg-muted-foreground/40" />
            <span>{project.role}</span>
          </div>

          <h3
            className="text-2xl sm:text-3xl lg:text-4xl text-foreground group-hover:text-muted-foreground transition-colors duration-300 mb-5 leading-[1.15]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {project.title}
          </h3>

          <p className="text-muted-foreground text-[15px] leading-[1.8] mb-8 max-w-lg">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[11px] uppercase tracking-[0.1em] px-3 py-1.5 border border-border text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>

          <span className="text-xs uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-1 self-start group-hover:text-muted-foreground group-hover:border-muted-foreground transition-colors duration-300">
            View Project
          </span>
        </div>
      </div>
    </motion.article>
  );
};
