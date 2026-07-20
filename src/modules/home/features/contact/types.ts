import type { IconType } from "react-icons"
import type { LucideIcon } from "lucide-react";

export type ContactMethod = {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: LucideIcon | IconType;
  external?: boolean;
};
