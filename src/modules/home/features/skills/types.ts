import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type SkillItem = {
  id: string;
  label: string;
  icon: LucideIcon | IconType;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: SkillItem[];
};
