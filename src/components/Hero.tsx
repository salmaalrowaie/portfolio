import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative w-full max-w-xl">
      <div className="space-y-8">
        <div>
          <p className="text-white/70 text-sm font-medium mb-2 tracking-wide uppercase">
            Mechanical Engineer
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Salma Alrowaie
          </h1>
          <div className="space-y-3 text-white/80 text-base sm:text-lg leading-relaxed">
            <p>
              Master's in Technology, Innovation, and Entrepreneurship at KAUST
            </p>
            <p>
              Bachelor's Degree in Mechanical Engineering from Purdue University
            </p>
            <p className="text-sm text-white/60">
              Sponsored by King Abdulaziz University of Science and Technology (KAUST) through the KAUST Gifted Student Program (KGSP)
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            size="lg"
            className="gap-2 bg-white text-gray-900 hover:bg-white/90 shadow-lg"
            asChild
          >
            <a href="mailto:salmarowaie@gmail.com">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-white/20 text-white hover:bg-white/10"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/salma-alrowaie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
