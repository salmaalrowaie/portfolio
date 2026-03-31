import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ArrowLeft, ExternalLink, Target, Trophy, Wrench, Eye } from "lucide-react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/">
            <Button variant="default" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background noise-bg">
      <Navbar />

      {/* Hero banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground mb-8 -ml-4">
                <ArrowLeft className="h-4 w-4" />
                <span className="mono text-xs tracking-wider">Back to Projects</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mono text-xs text-primary tracking-widest uppercase mb-4">
              {project.semester} {project.year}
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground tracking-tighter leading-[0.95]">
              {project.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="mono text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 space-y-16">
          {/* Objectives */}
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <div className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12">
              <div className="flex items-start gap-3 text-primary">
                <Target className="h-5 w-5 mt-0.5 shrink-0" />
                <h2 className="mono text-sm tracking-widest uppercase font-medium">Objectives</h2>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">{project.objectives}</p>
            </div>
          </motion.div>

          <div className="h-px bg-border" />

          {/* Outcomes & Contribution */}
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <div className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12">
              <div className="flex items-start gap-3 text-primary">
                <Trophy className="h-5 w-5 mt-0.5 shrink-0" />
                <h2 className="mono text-sm tracking-widest uppercase font-medium">Outcomes</h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Results</h3>
                  <p className="text-foreground/80 leading-relaxed">{project.outcomes}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">My Contribution</h3>
                  <p className="text-foreground/80 leading-relaxed">{project.contribution}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="h-px bg-border" />

          {/* Technical Details */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <div className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12">
              <div className="flex items-start gap-3 text-primary">
                <Wrench className="h-5 w-5 mt-0.5 shrink-0" />
                <h2 className="mono text-sm tracking-widest uppercase font-medium">Technical</h2>
              </div>
              <div>
                <p className="text-foreground/80 leading-relaxed">{project.technicalDetails}</p>
              </div>
            </div>
          </motion.div>

          {/* Visuals & Resources */}
          {project.media && (project.media.images?.length > 0 || project.media.videos?.length > 0 || project.media.reportLinks?.length > 0) && (
            <>
              <div className="h-px bg-border" />
              <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                <div className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12">
                  <div className="flex items-start gap-3 text-primary">
                    <Eye className="h-5 w-5 mt-0.5 shrink-0" />
                    <h2 className="mono text-sm tracking-widest uppercase font-medium">Visuals</h2>
                  </div>
                  <div className="space-y-8">
                    {project.media.images && project.media.images.length > 0 && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {project.media.images.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="rounded-xl border border-border w-full"
                          />
                        ))}
                      </div>
                    )}

                    {project.media.videos && project.media.videos.length > 0 && (
                      <div className="grid gap-4">
                        {project.media.videos.map((video, index) => (
                          <video key={index} controls className="w-full rounded-xl border border-border">
                            <source src={video} />
                          </video>
                        ))}
                      </div>
                    )}

                    {project.media.reportLinks && project.media.reportLinks.length > 0 && (
                      <div className="space-y-2">
                        {project.media.reportLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary group"
                          >
                            <ExternalLink className="h-4 w-4 shrink-0" />
                            <span className="font-medium">{link.title}</span>
                            <ArrowLeft className="h-3 w-3 rotate-[135deg] opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="mono text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Salma Alrowaie
          </p>
          <div className="flex gap-6">
            <a href="mailto:salmarowaie@gmail.com" className="mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider">
              Email
            </a>
            <a href="https://www.linkedin.com/in/salma-alrowaie/" target="_blank" rel="noopener noreferrer" className="mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
