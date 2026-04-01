import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const },
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
      className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-t border-foreground"
    >
      <h3 className="tech-label text-muted-foreground pt-0.5">{label.toUpperCase()}</h3>
      <p className="text-foreground/80 leading-[1.8]" style={{ fontSize: "13px" }}>{content}</p>
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
          <h1 className="text-3xl text-foreground mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>PROJECT NOT FOUND</h1>
          <Link to="/" className="tech-label text-muted-foreground hover:text-foreground">[ ← BACK ]</Link>
        </div>
      </div>
    );
  }

  const sections = [
    { label: "Objective", content: project.objectives },
    { label: "Requirements", content: project.requirements },
    { label: "My Contribution", content: project.contribution },
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
      <section className="pt-24 pb-16 border-b border-foreground">
        <div className="px-6 md:px-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Link to="/" className="tech-label text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block">
              [ ← BACK TO PROJECTS ]
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="flex items-center gap-4 tech-label text-muted-foreground mb-6">
              <span>{project.semester.toUpperCase()} {project.year}</span>
              <span>—</span>
              <span>{project.role.toUpperCase()}</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1] mb-6 max-w-4xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.title.toUpperCase()}
            </h1>
            <p className="text-muted-foreground leading-[1.8] max-w-2xl" style={{ fontSize: "14px" }}>{project.summary}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {project.tools.map((tool) => (
              <span key={tool} className="tech-label px-3 py-1.5 border border-foreground">
                {tool.toUpperCase()}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="border-b border-foreground">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="aspect-[16/9] bg-muted overflow-hidden"
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Content sections */}
      <section className="py-16">
        <div className="px-6 md:px-10 max-w-5xl">
          {sections.map((section, i) => (
            <DetailBlock key={section.label} label={section.label} content={section.content} index={i} />
          ))}

          {/* Skills */}
          <motion.div custom={10} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-t border-foreground">
            <h3 className="tech-label text-muted-foreground">SKILLS APPLIED</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="tech-label px-3 py-1.5 border border-foreground text-foreground">
                  {skill.toUpperCase()}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Media */}
          {project.media && (project.media.images?.length! > 0 || project.media.videos?.length! > 0 || project.media.reportLinks?.length! > 0) && (
            <motion.div custom={11} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-t border-foreground">
              <h3 className="tech-label text-muted-foreground">VISUALS</h3>
              <div>
                {project.media.images && project.media.images.length > 0 && (
                  <div className="grid gap-4 sm:grid-cols-2 mb-6">
                    {project.media.images.map((img, idx) => (
                      <img key={idx} src={img} alt={`${project.title} ${idx + 1}`} className="w-full border border-foreground" />
                    ))}
                  </div>
                )}

                {project.media.videos && project.media.videos.length > 0 && (
                  <div className="grid gap-4 mb-6">
                    {project.media.videos.map((video, idx) => (
                      <video key={idx} controls className="w-full border border-foreground">
                        <source src={video} />
                      </video>
                    ))}
                  </div>
                )}

                {project.media.reportLinks && project.media.reportLinks.length > 0 && (
                  <div className="space-y-2">
                    {project.media.reportLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-3 border-b border-foreground hover:bg-foreground hover:text-background transition-colors px-2"
                      >
                        <ExternalLink className="h-3 w-3 shrink-0" />
                        <span className="tech-label">{link.title.toUpperCase()}</span>
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
      <footer className="border-t border-foreground py-6">
        <div className="px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="tech-label text-muted-foreground">© {new Date().getFullYear()} SALMA ALROWAIE</span>
          <div className="flex gap-6">
            <a href="mailto:salmarowaie@gmail.com" className="tech-label text-muted-foreground hover:text-foreground transition-colors">EMAIL</a>
            <a href="https://www.linkedin.com/in/salma-alrowaie/" target="_blank" rel="noopener noreferrer" className="tech-label text-muted-foreground hover:text-foreground transition-colors">LINKEDIN</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
