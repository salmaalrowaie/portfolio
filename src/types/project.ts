export interface Project {
  id: string;
  title: string;
  year: number;
  semester: string;
  imageUrl: string;
  summary: string;
  role: string;
  outcome: string;
  learnings: string;
  media?: {
    images?: string[];
    videos?: string[];
    reportLinks?: { title: string; url: string }[];
  };
}
