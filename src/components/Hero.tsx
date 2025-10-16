import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--gradient-hero)' }}>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Salma Alrowaie
          </h1>
          <div className="mx-auto max-w-3xl space-y-3 text-lg text-white/90 sm:text-xl">
            <p className="font-medium">
              Master's in Technology, Innovation, and Entrepreneurship at KAUST
            </p>
            <p>
              Bachelor's Degree in Mechanical Engineering from Purdue University
            </p>
            <p className="text-base text-white/80">
              Sponsored by King Abdulaziz University of Science and Technology (KAUST) through the KAUST Gifted Student Program (KGSP)
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Button
            size="lg"
            className="gap-2 bg-white/95 text-primary hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:salmarowaie@gmail.com">
              <Mail className="h-5 w-5" />
              salmarowaie@gmail.com
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/salma-alrowaie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
