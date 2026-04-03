import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

interface DetailBlockProps {
  label: string;
  content: string;
  index: number;
}

const DetailBlock = ({ label, content, index }: DetailBlockProps) => {
  if (!content || content === "N/A") return null;
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8 py-6 border-t border-border"
    >
      <h3 className="section-label pt-0.5">{label}</h3>
      <p className="text-muted-foreground text-[14px] leading-[1.75]">{content}</p>
    </motion.div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="section-label hover:text-foreground">← Back</Link>
        </div>
      </div>
    );
  }

  const sections = [
    { label: "Objective", content: project.objectives },
    { label: "Requirements", content: project.requirements },
    { label: "Contribution", content: project.contribution },
    { label: "Design Process", content: project.designProcess },
    { label: "Analysis", content: project.analysis },
    { label: "Manufacturing", content: project.manufacturing },
    { label: "Testing", content: project.testing },
    { label: "Results", content: project.results },
    { label: "Lessons Learned", content: project.lessonsLearned },
    { label: "Improvements", content: project.improvements },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-20 pb-12 border-b border-border">
        <div className="px-6 md:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <Link to="/" className="section-label hover:text-foreground transition-colors mb-8 inline-block">
              ← Back to Projects
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="flex items-center gap-3 section-label mb-4">
              <span>{project.semester} {project.year}</span>
              <span className="text-border">—</span>
              <span className="text-eng-magenta">{project.role}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.05] mb-4 max-w-3xl tracking-tight">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl">{project.summary}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-1.5 mt-6"
          >
            {project.tools.map(tool => (
              <span key={tool} className="tech-label px-2.5 py-1 border border-border text-muted-foreground">
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="border-b border-border">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="aspect-[16/9] bg-secondary overflow-hidden"
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="px-6 md:px-10 lg:px-16 max-w-4xl">
          {sections.map((section, i) => (
            <DetailBlock key={section.label} label={section.label} content={section.content} index={i} />
          ))}

          {/* Skills */}
          <motion.div custom={10} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8 py-6 border-t border-border">
            <h3 className="section-label">Skills Applied</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map(skill => (
                <span key={skill} className="tech-label px-2.5 py-1 border border-border text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Media */}
          {project.media && (project.media.images?.length! > 0 || project.media.videos?.length! > 0 || project.media.reportLinks?.length! > 0) && (
            <motion.div custom={11} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8 py-6 border-t border-border">
              <h3 className="section-label">Visuals</h3>
              <div>
                {project.media.images && project.media.images.length > 0 && (
                  <div className="grid gap-3 sm:grid-cols-2 mb-4">
                    {project.media.images.map((img, idx) => (
                      <img key={idx} src={img} alt={`${project.title} ${idx + 1}`} className="w-full border border-border" />
                    ))}
                  </div>
                )}

                {project.media.videos && project.media.videos.length > 0 && (
                  <div className="grid gap-3 mb-4">
                    {project.media.videos.map((video, idx) => (
                      <video key={idx} controls className="w-full border border-border">
                        <source src={video} />
                      </video>
                    ))}
                  </div>
                )}

                {project.media.reportLinks && project.media.reportLinks.length > 0 && (
                  <div className="space-y-1">
                    {project.media.reportLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-2.5 border-b border-border hover:text-eng-orange transition-colors"
                      >
                        <ExternalLink className="h-3 w-3 shrink-0" />
                        <span className="tech-label">{link.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-5">
        <div className="px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="section-label">© {new Date().getFullYear()} Salma Alrowaie</span>
          <div className="flex gap-6">
            <a href="mailto:salmarowaie@gmail.com" className="section-label hover:text-eng-orange transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/salma-alrowaie/" target="_blank" rel="noopener noreferrer" className="section-label hover:text-eng-blue transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
