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
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
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
    <motion.div custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
      <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{label}</h3>
      <p className="text-foreground/80 leading-relaxed">{content}</p>
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
          <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline text-sm">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  const sections = [
    { label: "Objective", content: project.objectives },
    { label: "Requirements & Constraints", content: project.requirements },
    { label: "My Role & Contributions", content: project.contribution },
    { label: "Design Process", content: project.designProcess },
    { label: "Analysis & Simulation", content: project.analysis },
    { label: "Manufacturing & Prototyping", content: project.manufacturing },
    { label: "Testing & Validation", content: project.testing },
    { label: "Results & Outcomes", content: project.results },
    { label: "Lessons Learned", content: project.lessonsLearned },
    { label: "What I'd Improve", content: project.improvements },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span>{project.semester} {project.year}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>{project.role}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{project.summary}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {project.tools.map((tool) => (
              <span key={tool} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground/70 border border-border">
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-[16/9] rounded-xl bg-secondary border border-border overflow-hidden"
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6 space-y-12">
          {sections.map((section, i) => (
            <DetailBlock key={section.label} label={section.label} content={section.content} index={i} />
          ))}

          {/* Skills */}
          <motion.div custom={10} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Skills Applied</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-foreground/70 border border-border">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Media */}
          {project.media && (project.media.images?.length! > 0 || project.media.videos?.length! > 0 || project.media.reportLinks?.length! > 0) && (
            <motion.div custom={11} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">Visuals & Resources</h3>

              {project.media.images && project.media.images.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  {project.media.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`${project.title} ${idx + 1}`} className="rounded-xl border border-border w-full" />
                  ))}
                </div>
              )}

              {project.media.videos && project.media.videos.length > 0 && (
                <div className="grid gap-4 mb-6">
                  {project.media.videos.map((video, idx) => (
                    <video key={idx} controls className="w-full rounded-xl border border-border">
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
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 transition-colors text-foreground/80 hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4 shrink-0" />
                      <span className="text-sm font-medium">{link.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Salma Alrowaie</p>
          <div className="flex gap-6">
            <a href="mailto:salmarowaie@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/salma-alrowaie/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
