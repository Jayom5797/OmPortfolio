// Centralized project data for portfolio usage
export interface Project {
  title: string;
  description: string;
  image: string; // Relative path from public/ or absolute URL
  liveUrl: string;
  repoUrl?: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Edupluse",
    description: "A comprehensive education platform for students and teachers.",
    image: "/images/projects/edupluse.png",
    liveUrl: "https://edupluse.vercel.app/",
    repoUrl: "https://github.com/yourusername/edupluse",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "SDE Prep",
    description: "Platform to help students prepare for software engineering interviews.",
    image: "/images/projects/sdeprep.png",
    liveUrl: "https://sdeprep.vercel.app/",
    repoUrl: "https://github.com/yourusername/sdeprep",
    techStack: ["React", "Express", "MongoDB", "Vercel"],
  },
  {
    title: "Stackit",
    description: "A collaborative tool for managing and sharing code snippets.",
    image: "/images/projects/stackit.png",
    liveUrl: "https://stackit.vercel.app/",
    repoUrl: "https://github.com/yourusername/stackit",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
  },
  {
    title: "Secure Vote",
    description: "A blockchain-based secure voting platform.",
    image: "/images/projects/securevote.png",
    liveUrl: "https://securevote.vercel.app/",
    repoUrl: "https://github.com/yourusername/securevote",
    techStack: ["React", "Solidity", "Ethereum", "Vercel"],
  },
  {
    title: "Event Ai",
    description: "AI-powered event management and recommendation system.",
    image: "/images/projects/eventai.png",
    liveUrl: "https://eventai.vercel.app/",
    repoUrl: "https://github.com/yourusername/eventai",
    techStack: ["Next.js", "Python", "FastAPI", "Vercel"],
  },
  {
    title: "Smart City DB",
    description: "A smart city dashboard and analytics platform.",
    image: "/images/projects/smartcitydb.png",
    liveUrl: "https://smartcitydb.vercel.app/",
    repoUrl: "https://github.com/yourusername/smartcitydb",
    techStack: ["React", "Node.js", "MongoDB", "Vercel"],
  },
];
