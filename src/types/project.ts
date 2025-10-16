export interface Project {
  id: string;
  title: string;
  year: number;
  semester: string;
  imageUrl: string;
  objectives: string;
  outcomes: string;
  contribution: string;
  technicalDetails: string;
  skills: string[];
  media?: {
    images?: string[];
    videos?: string[];
    reportLinks?: { title: string; url: string }[];
  };
}
