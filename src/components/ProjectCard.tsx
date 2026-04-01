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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group cursor-pointer border border-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
    >
      <div className="grid md:grid-cols-[1fr_1fr]">
        {/* Image */}
        <div className="aspect-[4/3] bg-muted overflow-hidden border-b md:border-b-0 md:border-r border-foreground">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between mb-6">
              <span className="tech-label text-inherit opacity-40">{num}.</span>
              <span className="tech-label text-inherit opacity-60">{project.semester} {project.year}</span>
            </div>

            <h3
              className="text-2xl md:text-3xl text-inherit mb-4 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.title.toUpperCase()}
            </h3>

            <p className="text-inherit opacity-70 mb-6 leading-[1.7]" style={{ fontSize: "13px" }}>
              {project.summary}
            </p>

            <p className="tech-label text-inherit opacity-50 mb-6">{project.role.toUpperCase()}</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="tech-label px-3 py-1 border border-current opacity-60"
                >
                  {tool.toUpperCase()}
                </span>
              ))}
            </div>

            <span className="tech-label text-inherit opacity-70 group-hover:opacity-100 transition-opacity">
              [ VIEW PROJECT → ]
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
