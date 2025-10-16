import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
          Salma Alrowaie
        </h1>
        <div className="mb-8 space-y-4 text-lg text-primary-foreground/90 sm:text-xl">
          <p>
            Pursuing Bachelor's Degree in Mechanical Engineering at Purdue University
          </p>
          <p>
            Sponsored by the King Abdulaziz University of Science and Technology (KAUST) through the KAUST Gifted Student Program (KGSP)
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            className="gap-2 bg-card text-card-foreground hover:bg-card/90"
            asChild
          >
            <a href="mailto:salmarowaie@gmail.com">
              <Mail className="h-5 w-5" />
              salmarowaie@gmail.com
            </a>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="gap-2 bg-card text-card-foreground hover:bg-card/90"
            asChild
          >
            <a href="mailto:alrowaie@purdue.edu">
              <Mail className="h-5 w-5" />
              alrowaie@purdue.edu
            </a>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="gap-2 bg-card text-card-foreground hover:bg-card/90"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/salma-alrowaie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
