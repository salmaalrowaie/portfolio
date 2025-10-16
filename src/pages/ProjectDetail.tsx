import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
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
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {project.semester} {project.year}
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Project Summary</h2>
            <p className="text-foreground/80 leading-relaxed">{project.summary}</p>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">My Role</h2>
            <p className="text-foreground/80 leading-relaxed">{project.role}</p>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Outcome</h2>
            <p className="text-foreground/80 leading-relaxed">{project.outcome}</p>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">What I Learned</h2>
            <p className="text-foreground/80 leading-relaxed">{project.learnings}</p>
          </Card>

          {project.media && (
            <>
              {project.media.images && project.media.images.length > 0 && (
                <Card className="p-6">
                  <h2 className="mb-4 text-2xl font-semibold text-foreground">Project Images</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.media.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="rounded-lg border border-border"
                      />
                    ))}
                  </div>
                </Card>
              )}

              {project.media.videos && project.media.videos.length > 0 && (
                <Card className="p-6">
                  <h2 className="mb-4 text-2xl font-semibold text-foreground">Project Videos</h2>
                  <div className="grid gap-4">
                    {project.media.videos.map((video, index) => (
                      <video
                        key={index}
                        controls
                        className="w-full rounded-lg border border-border"
                      >
                        <source src={video} />
                        Your browser does not support the video tag.
                      </video>
                    ))}
                  </div>
                </Card>
              )}

              {project.media.reportLinks && project.media.reportLinks.length > 0 && (
                <Card className="p-6">
                  <h2 className="mb-4 text-2xl font-semibold text-foreground">Related Documents</h2>
                  <div className="space-y-3">
                    {project.media.reportLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {link.title}
                      </a>
                    ))}
                  </div>
                </Card>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
