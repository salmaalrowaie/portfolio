import { Project } from "@/types/project";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const navigate = useNavigate();
  const num = String(index + 1).padStart(2, "0");
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [3, -3]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-3, 3]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => navigate(`/project/${project.id}`)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="group cursor-pointer border border-foreground hover:bg-foreground hover:text-background transition-colors duration-300 will-change-transform"
    >
      <div className="grid md:grid-cols-[1fr_1fr]">
        {/* Image */}
        <div className="aspect-[4/3] bg-muted overflow-hidden border-b md:border-b-0 md:border-r border-foreground relative">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover mix-blend-multiply"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Animated overlay on hover */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between mb-6">
              <motion.span
                className="tech-label text-inherit opacity-40"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 0.4, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {num}.
              </motion.span>
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
              {project.tools.map((tool, ti) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.6, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + ti * 0.05 }}
                  className="tech-label px-3 py-1 border border-current opacity-60"
                >
                  {tool.toUpperCase()}
                </motion.span>
              ))}
            </div>

            <motion.span
              className="tech-label text-inherit opacity-70 group-hover:opacity-100 transition-opacity inline-block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              [ VIEW PROJECT → ]
            </motion.span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
