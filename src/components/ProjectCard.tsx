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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group cursor-pointer border border-border hover:border-foreground transition-colors duration-300"
    >
      <div className="grid md:grid-cols-[2fr_3fr]">
        {/* Image */}
        <div className="aspect-[4/3] md:aspect-auto bg-secondary overflow-hidden border-b md:border-b-0 md:border-r border-border">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <span className="section-label text-eng-orange">{num}</span>
              <span className="section-label">{project.semester} {project.year}</span>
            </div>

            <h3 className="text-xl lg:text-2xl text-foreground mb-3 leading-tight font-bold tracking-tight">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
              {project.summary}
            </p>

            <p className="section-label text-eng-magenta mb-4">{project.role}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.tools.slice(0, 4).map(tool => (
                <span key={tool} className="tech-label px-2 py-0.5 border border-border text-muted-foreground group-hover:border-foreground/30 transition-colors">
                  {tool}
                </span>
              ))}
            </div>

            <span className="tech-label text-muted-foreground group-hover:text-eng-orange transition-colors whitespace-nowrap ml-4">
              View →
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
