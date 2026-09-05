import {
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaServer,
  FaSyncAlt,
  FaThLarge,
  FaYoutube,
} from "react-icons/fa";

import { SiJavascript, SiNextdotjs, SiTypescript } from "react-icons/si";

import type { Course } from "@/types/course";

export const courses: Course[] = [
  {
    title: "Dashboard with CSS & JavaScript",
    company: "SabzLearn",
    icon: FaChartLine,
    link: "https://sabzlearn.ir/course-cat/front-end/",
  },
  {
    title: "HTML & CSS Mini Projects",
    company: "SabzLearn",
    icon: FaCode,
    link: "https://sabzlearn.ir/course-cat/front-end/",
  },
  {
    title: "JavaScript Zero to Hero",
    company: "SabzLearn",
    icon: FaCode,
    link: "https://sabzlearn.ir/course/java-script-zero-to-hero/",
  },
  {
    title: "REST API Development with Node.js",
    company: "SabzLearn",
    icon: FaServer,
    link: "https://sabzlearn.ir/course/api-dev-with-nodejs/",
  },
  {
    title: "Complete Tailwind CSS",
    company: "SabzLearn",
    icon: FaCode,
    link: "https://sabzlearn.ir/course-cat/front-end/",
  },
  {
    title: "ReactJS Libraries",
    company: "SabzLearn",
    icon: FaReact,
    link: "https://sabzlearn.ir/course-cat/front-end/",
  },
  {
    title: "Advanced Redux",
    company: "SabzLearn",
    icon: FaSyncAlt,
    link: "https://sabzlearn.ir/course-cat/front-end/",
  },
  {
    title: "Next.js",
    company: "SabzLearn",
    icon: SiNextdotjs,
    link: "https://sabzlearn.ir/course-cat/front-end/",
  },
  {
    title: "HTML Tutorial",
    company: "SabzLearn",
    icon: FaHtml5,
    link: "https://sabzlearn.ir/course/html-tutorial/",
  },
  {
    title: "CSS Tutorial",
    company: "SabzLearn",
    icon: FaCss3Alt,
    link: "https://sabzlearn.ir/course/css-tutorial/",
  },
  {
    title: "Flexbox",
    company: "SabzLearn",
    icon: FaThLarge,
    link: "https://sabzlearn.ir/course/flex-box/",
  },

  {
    title: "JavaScript Full Course",
    company: "JavaScript Mastery",
    icon: SiJavascript,
    link: "https://www.youtube.com/@javascriptmastery",
  },
  {
    title: "React & Next.js Projects",
    company: "JavaScript Mastery",
    icon: FaReact,
    link: "https://www.youtube.com/@javascriptmastery",
  },
  {
    title: "Next.js Full-Stack Development",
    company: "JavaScript Mastery",
    icon: SiNextdotjs,
    link: "https://www.youtube.com/@javascriptmastery",
  },
  {
    title: "TypeScript for Developers",
    company: "JavaScript Mastery",
    icon: SiTypescript,
    link: "https://www.youtube.com/@javascriptmastery",
  },

  {
    title: "Advanced JavaScript",
    company: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com/",
  },
  {
    title: "React.js & Modern Frontend",
    company: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com/",
  },
];
