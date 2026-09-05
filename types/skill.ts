import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  Icon: IconType;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
