import { Project } from "@/types/project";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const accentColors = [
  { border: "group-hover:border-eng-orange", text: "group-hover:text-eng-orange", bg: "group-hover:bg-eng-orange/5", num: "text-eng-orange" },
  { border: "group-hover:border-eng-magenta", text: "group-hover:text-eng-magenta", bg: "group-hover:bg-eng-magenta/5", num: "text-eng-magenta" },
  { border: "group-hover:border-eng-blue", text: "group-hover:text-eng-blue", bg: "group-hover:bg-eng-blue/5", num: "text-eng-blue" },
];

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const navigate = useNavigate();
  const num = String(index + 1).padStart(2, "0");
  const accent = accentColors[index % 3];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
      onClick={() => navigate(`/project/${project.id}`)}
      className={`group cursor-pointer border border-border ${accent.border} ${accent.bg} transition-all duration-300`}
    >
      <div className="grid md:grid-cols-[2fr_3fr]">
        {/* Image */}
        <div className="aspect-[4/3] md:aspect-auto bg-secondary overflow-hidden border-b md:border-b-0 md:border-r border-border">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <span className={`section-label ${accent.num} font-bold`}>{num}</span>
              <span className="section-label">{project.semester} {project.year}</span>
            </div>

            <h3 className={`text-xl lg:text-2xl text-foreground mb-3 leading-tight font-bold tracking-tight ${accent.text} transition-colors duration-300`}>
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

            <motion.span
              className={`tech-label text-muted-foreground ${accent.text} transition-colors whitespace-nowrap ml-4`}
              whileHover={{ x: 4 }}
            >
              View →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
