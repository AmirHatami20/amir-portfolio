import {
  FaCloud,
  FaCode,
  FaDocker,
  FaGitAlt,
  FaKey,
  FaLinux,
  FaMobileAlt,
  FaNetworkWired,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";

import {
  SiCss,
  SiDrizzle,
  SiElectron,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
  SiZod,
} from "react-icons/si";

import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "shadcn/ui", Icon: FaCode },
    ],
  },

  {
    name: "State & Data",
    skills: [
      { name: "Redux", Icon: SiRedux },
      { name: "Zustand", Icon: FaSyncAlt },
      { name: "TanStack Query", Icon: SiReactquery },
      { name: "React Hook Form", Icon: FaCode },
    ],
  },

  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "NestJS", Icon: FaCode },
      { name: "REST API", Icon: FaNetworkWired },
      { name: "JWT & OAuth", Icon: SiJsonwebtokens },
      { name: "Zod", Icon: SiZod },
    ],
  },

  {
    name: "Database & ORM",
    skills: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Drizzle ORM", Icon: SiDrizzle },
    ],
  },

  {
    name: "Security",
    skills: [
      { name: "OWASP Top 10", Icon: FaShieldAlt },
      { name: "Web Application Security", Icon: FaShieldAlt },
      { name: "Authentication & Authorization", Icon: FaKey },
      { name: "Security Testing", Icon: FaShieldAlt },
      { name: "Penetration Testing", Icon: FaNetworkWired },
    ],
  },

  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", Icon: FaDocker },
      { name: "Git & GitHub", Icon: FaGitAlt },
      { name: "Linux", Icon: FaLinux },
      { name: "Vercel & Cloudflare", Icon: FaCloud },
      { name: "Redis", Icon: SiRedis },
    ],
  },

  {
    name: "Cross-Platform",
    skills: [
      { name: "React Native", Icon: FaMobileAlt },
      { name: "Electron", Icon: SiElectron },
      { name: "Tauri", Icon: SiTauri },
    ],
  },
];
