import {
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import type { Project, ProjectTechnology, StackIcons } from "@/types/project";

export const projects: Project[] = [
  {
    num: "01",
    slug: "toy-store",
    name: "Toy Store",
    description:
      "A modern full-stack e-commerce platform for browsing and purchasing toys with authentication, product management, and optimized data fetching.",
    features: [
      "Authentication",
      "Product Management",
      "Shopping Cart",
      "Responsive UI",
      "Server-Side Rendering",
      "Optimized Data Fetching",
    ],
    stack: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "ReactQuery",
      "NodeJS",
      "MongoDB",
      "NextAuth",
    ],
    image: "/images/work/toy-store.png",
    icon: "/images/icons/toy-store-icon.png",
    live: "https://toy-shop-pi.vercel.app",
    github: "https://github.com/AmirHatami20/toy-shop",
  },

  {
    num: "02",
    slug: "shoe-store",
    name: "Shoe Store",
    description:
      "A full-stack online shoe store built with Next.js and PostgreSQL, featuring structured database management, authentication, and global state management.",
    features: [
      "Product Management",
      "Shopping Cart",
      "Authentication",
      "PostgreSQL Database",
      "State Management",
      "Responsive Design",
    ],
    stack: [
      "NextJS",
      "NodeJS",
      "Prisma",
      "PostgreSQL",
      "TailwindCSS",
      "TypeScript",
      "Redux",
    ],
    image: "/images/work/shoe-store.png",
    icon: "/images/icons/shoe-store-icon.png",
    live: "https://shoes-shop-liart.vercel.app",
    github: "https://github.com/AmirHatami20/shoes-shop",
  },

  {
    num: "03",
    slug: "sabzlearn",
    name: "SabzLearn",
    description:
      "A full-stack educational platform inspired by modern online learning systems, built with React and Node.js.",
    features: [
      "Course Management",
      "Authentication",
      "User Management",
      "REST API",
      "Responsive Interface",
      "Admin Features",
    ],
    stack: [
      "React",
      "TailwindCSS",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
    ],
    image: "/images/work/sabzlearn.png",
    icon: "/images/icons/sabzlearn-icon.png",
    live: "https://sabzlearn-frontend.vercel.app",
    github: "https://github.com/AmirHatami20/sabzlearn-frontend",
  },

  {
    num: "04",
    slug: "online-library",
    name: "Online Library",
    description:
      "A modern full-stack library platform for managing and exploring books with authentication, database integration, and efficient client-side data fetching.",
    features: [
      "Book Management",
      "Authentication",
      "Search",
      "Database Integration",
      "Responsive UI",
      "Data Fetching",
    ],
    stack: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "ReactQuery",
      "PostgreSQL",
      "NodeJS",
      "NextAuth",
    ],
    image: "/images/work/library.png",
    icon: "/images/icons/library-icon.png",
    live: "https://library-khaki-sigma.vercel.app",
    github: "https://github.com/AmirHatami20/library",
  },

  {
    num: "05",
    slug: "pizza-store",
    name: "Pizza Store",
    description:
      "A full-stack pizza ordering platform with authentication, product management, and modern responsive interfaces.",
    features: [
      "Online Ordering",
      "Authentication",
      "Product Management",
      "Shopping Cart",
      "Responsive Design",
      "Data Fetching",
    ],
    stack: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "ReactQuery",
      "NodeJS",
      "MongoDB",
      "NextAuth",
    ],
    image: "/images/work/pizza-store.png",
    icon: "/images/icons/pizza-store-icon.png",
    live: "https://pizza-shop-fawn-zeta.vercel.app",
    github: "https://github.com/AmirHatami20/pizza-shop",
  },

  {
    num: "06",
    slug: "online-grocery-store",
    name: "Online Grocery Store",
    description:
      "A modern online grocery shopping platform with product management, authentication, shopping cart functionality, and Redux-based state management.",
    features: [
      "Product Management",
      "Shopping Cart",
      "Authentication",
      "State Management",
      "Responsive Design",
      "REST API",
    ],
    stack: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "Redux",
      "NodeJS",
      "MongoDB",
      "JWT",
    ],
    image: "/images/work/grocery-store.png",
    icon: "/images/icons/grocery-store-icon.png",
    live: "https://fruits-shop-five.vercel.app",
    github: "https://github.com/AmirHatami20/fruits-shop",
  },

  {
    num: "07",
    slug: "polling-platform",
    name: "Polling Platform",
    description:
      "A full-stack polling platform that allows users to create and participate in polls with authentication and optimized client-side data management.",
    features: [
      "Create Polls",
      "Vote System",
      "Authentication",
      "User Management",
      "Responsive UI",
      "Data Fetching",
    ],
    stack: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "ReactQuery",
      "NodeJS",
      "MongoDB",
      "JWT",
    ],
    image: "/images/work/polling.png",
    icon: "/images/icons/polling-icon.png",
    live: "https://polling-site-dun.vercel.app",
    github: "https://github.com/AmirHatami20/polling-site",
  },
];

export const stackIcons: StackIcons = {
  React: SiReact,
  NextJS: SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  NodeJS: SiNodedotjs,
  MongoDB: SiMongodb,
  ExpressJS: SiNodedotjs,
  PostgreSQL: SiPostgresql,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  ReactQuery: SiReactquery,
  JWT: SiJsonwebtokens,
  Redux: SiRedux,
  NextAuth: SiNextdotjs,
  Prisma: SiPrisma,
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByTechnology = (
  technology: ProjectTechnology,
): Project[] => {
  return projects.filter((project) => project.stack.includes(technology));
};
