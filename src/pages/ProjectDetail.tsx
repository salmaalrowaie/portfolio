import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
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
    <motion.div custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
      <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-1">{label}</h3>
      <p className="text-foreground/80 leading-[1.8] text-[15px]">{content}</p>
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
          <h1 className="text-3xl text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Project Not Found</h1>
          <Link to="/" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">← Back to Portfolio</Link>
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
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-8 md:px-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-16">
              <ArrowLeft className="h-3 w-3" />
              Back
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">
              <span>{project.semester} {project.year}</span>
              <span className="w-4 h-px bg-muted-foreground/40" />
              <span>{project.role}</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6 max-w-4xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {project.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{project.summary}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {project.tools.map((tool) => (
              <span key={tool} className="text-[11px] uppercase tracking-[0.1em] px-3 py-1.5 border border-border text-muted-foreground">
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[16/9] bg-muted overflow-hidden"
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-8 md:px-12 space-y-14">
          {sections.map((section, i) => (
            <DetailBlock key={section.label} label={section.label} content={section.content} index={i} />
          ))}

          {/* Skills */}
          <motion.div custom={10} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-1">Skills Applied</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="text-sm px-4 py-2 border border-border text-foreground/70">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Media */}
          {project.media && (project.media.images?.length! > 0 || project.media.videos?.length! > 0 || project.media.reportLinks?.length! > 0) && (
            <motion.div custom={11} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-1">Visuals</h3>
              <div>
                {project.media.images && project.media.images.length > 0 && (
                  <div className="grid gap-4 sm:grid-cols-2 mb-6">
                    {project.media.images.map((img, idx) => (
                      <img key={idx} src={img} alt={`${project.title} ${idx + 1}`} className="w-full" />
                    ))}
                  </div>
                )}

                {project.media.videos && project.media.videos.length > 0 && (
                  <div className="grid gap-4 mb-6">
                    {project.media.videos.map((video, idx) => (
                      <video key={idx} controls className="w-full">
                        <source src={video} />
                      </video>
                    ))}
                  </div>
                )}

                {project.media.reportLinks && project.media.reportLinks.length > 0 && (
                  <div className="space-y-3">
                    {project.media.reportLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-3 border-b border-border hover:text-muted-foreground transition-colors text-foreground"
                      >
                        <ExternalLink className="h-4 w-4 shrink-0" />
                        <span className="text-sm">{link.title}</span>
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
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">© {new Date().getFullYear()} Salma Alrowaie</p>
          <div className="flex gap-8">
            <a href="mailto:salmarowaie@gmail.com" className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300">Email</a>
            <a href="https://www.linkedin.com/in/salma-alrowaie/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
