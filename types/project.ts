import type { IconType } from "react-icons";

export type ProjectTechnology =
  | "React"
  | "NextJS"
  | "TailwindCSS"
  | "NodeJS"
  | "MongoDB"
  | "ExpressJS"
  | "PostgreSQL"
  | "JavaScript"
  | "TypeScript"
  | "ReactQuery"
  | "JWT"
  | "Redux"
  | "NextAuth"
  | "Prisma";

export interface Project {
  num: string;
  slug: string;
  name: string;
  description: string;
  features: string[];
  stack: ProjectTechnology[];
  image: string;
  icon: string;
  live: string;
  github: string;
}

export type StackIcons = Record<ProjectTechnology, IconType>;
