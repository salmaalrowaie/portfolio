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
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Objectives</h2>
            <p className="text-foreground/80 leading-relaxed">{project.objectives}</p>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Outcomes & Contribution</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Outcomes</h3>
                <p className="text-foreground/80 leading-relaxed">{project.outcomes}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">My Contribution</h3>
                <p className="text-foreground/80 leading-relaxed">{project.contribution}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Technical Details & Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Technical Details</h3>
                <p className="text-foreground/80 leading-relaxed">{project.technicalDetails}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Skills Applied</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {project.media && (
            <Card className="p-6">
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Visuals & Resources</h2>
              
              {project.media.images && project.media.images.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-foreground mb-3">Images</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.media.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="rounded-lg border border-border w-full"
                      />
                    ))}
                  </div>
                </div>
              )}

              {project.media.videos && project.media.videos.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-foreground mb-3">Videos</h3>
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
                </div>
              )}

              {project.media.reportLinks && project.media.reportLinks.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">Related Documents</h3>
                  <div className="space-y-2">
                    {project.media.reportLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-accent transition-colors p-2 hover:bg-primary/5 rounded-md"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="font-medium">{link.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
