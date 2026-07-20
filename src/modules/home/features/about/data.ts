import {
  Accessibility,
  BookOpenText,
  BriefcaseBusiness,
  Code2,
  Gauge,
  GraduationCap,
  Layers3,
  MapPin,
  Workflow,
} from "lucide-react"
import type {
  AboutFocusItem,
  AboutPrinciple,
  AboutProfile,
  AboutQuickFact,
  AboutSectionCopy,
} from "./types"

export const ABOUT_SECTION_COPY: AboutSectionCopy = {
  eyebrow: "About",
  title: "About Me",
  description:
    "A quick look at how I think, what I enjoy building, and the habits that shape my personal projects.",
}

export const ABOUT_PROFILE: AboutProfile = {
  name: "Salah Eldin",
  role: "Full Stack Developer",
  imageSrc: "/salah.jpeg",
  imageAlt: "Portrait of Salah Eldin",
  intro: [
    "I build production-quality personal projects with a strong focus on clarity, performance, and long-term maintainability.",
    "I learn best through hands-on development, and I enjoy turning ideas into modern applications that feel thoughtful, scalable, and enjoyable to use.",
  ],
}

export const ABOUT_FOCUS_AREAS: AboutPrinciple[] = [
  {
    title: "Performance Optimization",
    description:
      "Building applications with fast load times, smooth interactions, and efficient rendering.",
    icon: Gauge,
  },
  {
    title: "Clean Architecture",
    description:
      "Keeping code organized with clear boundaries so projects stay easier to understand and evolve.",
    icon: Layers3,
  },
  {
    title: "Scalable Applications",
    description:
      "Designing structures that can grow with new features without becoming difficult to maintain.",
    icon: Code2,
  },
  {
    title: "Modern UI Development",
    description:
      "Creating clean interfaces that feel refined, responsive, and pleasant to navigate.",
    icon: Accessibility,
  },
  {
    title: "Accessibility",
    description:
      "Using semantic HTML, keyboard support, and visible states to make interfaces usable for more people.",
    icon: Workflow,
  },
  {
    title: "Continuous Learning",
    description:
      "Improving through every build by studying better patterns, tools, and ideas for the next project.",
    icon: GraduationCap,
  },
]

export const ABOUT_CURRENT_FOCUS: AboutFocusItem[] = [
  { label: "System Design" },
  { label: "Software Architecture" },
  { label: "Backend Engineering" },
  { label: "AI-powered Applications" },
  { label: "Advanced Next.js" },
  { label: "Performance Optimization" },
]

export const ABOUT_QUICK_FACTS: AboutQuickFact[] = [
  {
    label: "Location",
    value: "Egypt",
    icon: MapPin,
  },
  {
    label: "Role",
    value: "Full Stack Developer",
    icon: BriefcaseBusiness,
  },
  {
    label: "Primary Stack",
    value: "Next.js • TypeScript • Node.js",
    icon: Layers3,
  },
  {
    label: "Database",
    value: "PostgreSQL • MongoDB",
    icon: BookOpenText,
  },
  {
    label: "Availability",
    value: "Open to Full-Time Opportunities",
    icon: GraduationCap,
  },
]
