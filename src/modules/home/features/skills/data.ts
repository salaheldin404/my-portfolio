import {

  ShieldCheck,
  Terminal,
  Workflow,

} from "lucide-react";
import {
  FaReact,
  FaCss3,
  FaBootstrap,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { BsTypescript } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import { DiMongodb, DiRedis } from "react-icons/di";
import { SiPrisma, SiExpress } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import type { SkillCategory } from "./types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { id: "html", label: "HTML5", icon: FaHtml5 },
      { id: "css", label: "CSS3", icon: FaCss3 },
      { id: "bootstrap", label: "Bootstrap", icon: FaBootstrap },
      { id: "javascript", label: "JavaScript", icon: IoLogoJavascript },
      { id: "react", label: "React", icon: FaReact },
      { id: "redux", label: "Redux", icon: SiRedux },
      { id: "nextjs", label: "Next.js", icon: RiNextjsFill },
      { id: "tailwind", label: "Tailwind CSS", icon: RiTailwindCssFill },
      { id: "typescript", label: "TypeScript", icon: BsTypescript },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { id: "node", label: "Node.js", icon: FaNodeJs },
      { id: "express", label: "Express.js", icon: SiExpress },
      { id: "prisma", label: "Prisma", icon: SiPrisma },
      { id: "graphql", label: "GraphQL", icon: GrGraphQl },

      { id: "typescript", label: "TypeScript", icon: BsTypescript },
      { id: "api", label: "REST APIs", icon: Workflow },
      { id: "auth", label: "Auth", icon: ShieldCheck },

      // { id: "performance", label: "Performance", icon: Wrench },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { id: "postgres", label: "PostgreSQL", icon: BiLogoPostgresql },
      { id: "mongo", label: "MongoDB", icon: DiMongodb },
      { id: "redis", label: "Redis", icon: DiRedis },
    ],
  },
  {
    id: "tooling",
    title: "Tools",
    skills: [
      { id: "git", label: "Git", icon: FaGitAlt },
      // { id: "docker", label: "Docker", icon: Container },
      { id: "linux", label: "Linux", icon: Terminal },
      // { id: "figma", label: "Figma", icon: Palette },
    ],
  },
];
