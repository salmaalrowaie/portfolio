export interface Project {
  id: string;
  title: string;
  summary: string;
  year: number;
  semester: string;
  role: string;
  imageUrl: string;
  tools: string[];
  objectives: string;
  requirements: string;
  contribution: string;
  designProcess: string;
  analysis: string;
  manufacturing: string;
  testing: string;
  results: string;
  lessonsLearned: string;
  improvements: string;
  skills: string[];
  media?: {
    images?: string[];
    videos?: string[];
    reportLinks?: { title: string; url: string }[];
  };
}

export interface Experience {
  organization: string;
  role: string;
  dates: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}
