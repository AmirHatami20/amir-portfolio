import {
  FaBookOpen,
  FaClock,
  FaCode,
  FaKeyboard,
  FaLanguage,
  FaProjectDiagram,
  FaRegCalendarCheck,
  FaRobot,
  FaSmileWink,
  FaUsers,
} from "react-icons/fa";

import type { SoftSkill } from "@/types/soft-skill";

export const softSkills: SoftSkill[] = [
  {
    name: "English",
    Icon: FaLanguage,
  },
  {
    name: "10-Finger Typing",
    Icon: FaKeyboard,
  },
  {
    name: "Project Management",
    Icon: FaProjectDiagram,
  },
  {
    name: "Continuous Learning",
    Icon: FaBookOpen,
  },
  {
    name: "Time Management",
    Icon: FaClock,
  },
  {
    name: "AI Proficiency",
    Icon: FaRobot,
  },
  {
    name: "Teamwork",
    Icon: FaUsers,
  },
  {
    name: "Work Discipline",
    Icon: FaRegCalendarCheck,
  },
  {
    name: "Sense of Humor",
    Icon: FaSmileWink,
  },
  {
    name: "Problem Solving",
    Icon: FaCode,
  },
];
