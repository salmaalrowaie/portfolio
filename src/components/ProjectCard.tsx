import { Project } from "@/types/project";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
  viewMode: "stacked" | "grid";
}

const accentColors = [
  { border: "group-hover:border-eng-orange", text: "group-hover:text-eng-orange", bg: "group-hover:bg-eng-orange/5", num: "text-eng-orange", arrow: "group-hover:text-eng-orange", hoverBg: "group-hover:bg-foreground", hoverText: "group-hover:text-background", accentText: "group-hover:text-eng-orange" },
  { border: "group-hover:border-eng-magenta", text: "group-hover:text-eng-magenta", bg: "group-hover:bg-eng-magenta/5", num: "text-eng-magenta", arrow: "group-hover:text-eng-magenta", hoverBg: "group-hover:bg-foreground", hoverText: "group-hover:text-background", accentText: "group-hover:text-eng-magenta" },
  { border: "group-hover:border-eng-blue", text: "group-hover:text-eng-blue", bg: "group-hover:bg-eng-blue/5", num: "text-eng-blue", arrow: "group-hover:text-eng-blue", hoverBg: "group-hover:bg-foreground", hoverText: "group-hover:text-background", accentText: "group-hover:text-eng-blue" },
];

export const ProjectCard = ({ project, index, viewMode }: ProjectCardProps) => {
  const navigate = useNavigate();
  const num = String(index + 1).padStart(2, "0");
  const accent = accentColors[index % 3];

  if (viewMode === "grid") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => navigate(`/project/${project.id}`)}
        className={`group cursor-pointer border border-border bg-background ${accent.border} ${accent.hoverBg} transition-all duration-500`}
      >
        <div className="aspect-[4/3] bg-secondary overflow-hidden border-b border-border">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
        </div>
        <div className="p-5">
          <div className="flex items-baseline justify-between mb-3">
            <span className={`section-label ${accent.num} font-bold`}>{num}</span>
            <span className="section-label">{project.semester} {project.year}</span>
          </div>
          <h3 className={`text-lg text-foreground mb-2 font-bold tracking-tight ${accent.accentText} transition-colors duration-300`}>
            {project.title}
          </h3>
          <p className={`text-muted-foreground text-xs mb-3 leading-relaxed line-clamp-2 ${accent.hoverText} transition-colors duration-300`}>{project.summary}</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tools.slice(0, 3).map(tool => (
              <span key={tool} className="tech-label px-1.5 py-0.5 border border-border text-muted-foreground">
                {tool}
              </span>
            ))}
          </div>
          <span className={`tech-label text-muted-foreground ${accent.arrow} transition-colors`}>View →</span>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
      onClick={() => navigate(`/project/${project.id}`)}
      className={`group cursor-pointer border border-border bg-background ${accent.border} ${accent.hoverBg} transition-all duration-500`}
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

            <p className={`section-label mb-4 ${index % 3 === 0 ? "text-eng-orange" : index % 3 === 1 ? "text-eng-magenta" : "text-eng-blue"}`}>{project.role}</p>
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
              className={`tech-label text-muted-foreground ${accent.arrow} transition-colors whitespace-nowrap ml-4`}
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
