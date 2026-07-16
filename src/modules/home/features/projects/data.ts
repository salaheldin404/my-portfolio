import { Project, ProjectFileTab } from "./types";
import {
  FileText,
  ListChecks,
  Image as ImageIcon,
  type LucideIcon,
} from "lucide-react";

export const PROJECTS_DATA: Project[] = [
  {
    id: "sakinah-streams",
    title: "Sakinah Streams",
    slug: "sakinah-streams",
    description:
      "A modern Quran companion platform featuring an intelligent Khatma Planner, activity tracking, AI-powered reflections, Athkar, Quran audio, and offline-first PWA support to help users stay consistent in their daily Quran journey.",
    overview:
      "Sakinah Streams is a modern Quran companion platform that helps Muslims build a consistent and meaningful relationship with the Quran through intelligent planning, habit tracking, immersive experiences, and AI-powered spiritual reflections. It combines daily Quran engagement, personalized progress tracking, Athkar, audio recitations, and cross-device synchronization into a seamless Progressive Web App designed for long-term spiritual growth.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Zod",
      "OpenRouter",
    ],
    screenshots: [
      "/projects/streams-1.png",
      "/projects/streams-2.png",
      "/projects/streams-3.png",
      "/projects/streams-4.png",
      "/projects/streams-5.png",
      "/projects/streams-6.png",
      "/projects/streams-7.png",
      "/projects/streams-8.png",
      "/projects/streams-9.png",
      "/projects/streams-10.png",
      "/projects/streams-11.png",
      "/projects/streams-12.png",
    ],
    features: [
      "Intelligent Khatma Planner with adaptive daily goals",
      "Interactive Quranic Galaxy exploration experience",
      "Activity tracking and streak system",
      "Morning & Evening Athkar integration",
      "Quran radio and reciter audio experience",
      "Wishlist system for Surahs and reciters",
      "Personalized Quran journey tracking",
      "The AI Reflection Companion provides Quran-inspired reflections, authentic verse references, and relevant adhkar while maintaining strict authenticity and safety standards.",
    ],
    githubUrl: "https://github.com/salaheldin404/Sakinah-Streams-V2",
    liveDemoUrl: "https://sakinah-streams-v2.vercel.app",
  },
  {
    id: "lms-platform",
    title: "LMS Platform",
    slug: "lms-platform",
    description:
      "A full-stack Learning Management System built with the MERN stack, featuring JWT authentication, course management, Stripe payments, progress tracking with certificates, and interactive dashboards, ratings, and analytics for students and instructors.",
    overview:
      "A full-featured Learning Management System (LMS) built with the MERN stack that provides a complete online learning experience for both students and instructors. The platform supports secure authentication, course creation and management, online payments, progress tracking, and interactive learning features, enabling educators to deliver courses efficiently while helping learners monitor their achievements in a seamless and scalable environment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Express.js",
      "Stripe",
      "Tailwind CSS",
      "Zod",
      "Node.js",
      "JWT",
    ],
    screenshots: [
      "/projects/lms-1.png",
      "/projects/lms-2.png",
      "/projects/lms-3.png",
      "/projects/lms-4.png",
      "/projects/lms-5.png",
      "/projects/lms-6.png",
      "/projects/lms-7.png",
      "/projects/lms-8.png",
      "/projects/lms-9.png",
      "/projects/lms-10.png",
      "/projects/lms-11.png",
      "/projects/lms-12.png",
      "/projects/lms-13.png",
      "/projects/lms-14.png",
      "/projects/lms-15.png",
      "/projects/lms-16.png",
    ],
    features: [
      "Secure Authentication – JWT-based authentication with refresh tokens for secure and persistent user sessions.",
      "Course Management – Complete CRUD functionality for courses, chapters, and lessons with an intuitive management interface.",
      "Progress Tracking – Monitor learning progress with personalized dashboards and completion statistics.",
      "Certificates – Automatically generate and deliver course completion certificates, hosted on Cloudinary.",
      "Ratings & Reviews – Allow students to rate courses and share feedback to improve learning quality.",
      "Analytics – Visual insights and statistics for both learners and instructors to track performance and engagement.",
      "Online Payments – Integrated Stripe payment gateway for secure course enrollment and purchases.",
    ],
    githubUrl: "https://github.com/salaheldin404/LMS-Platform-API",
  },
  {
    id: "social-media-platform",
    title: "Social Media Platform",
    slug: "social-media-platform",
    description:
      "A MERN stack social media application featuring JWT authentication, real-time messaging, posts, comments, notifications, follow system, user profiles, and search functionality.",
    overview:
      "A full-stack social media platform built with the MERN stack that enables users to connect, share content, and communicate in real time. The application offers a modern social networking experience with secure authentication, interactive posts, instant messaging, notifications, and personalized user profiles.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Mongoose",
      "Express.js",
      "JWT",
      "Socket.io",
    ],
    screenshots: [
      "/projects/social-1.png",
      "/projects/social-2.png",
      "/projects/social-3.png",
      "/projects/social-4.png",
    ],
    features: [
      "Secure Authentication – JWT-based authentication with refresh tokens for secure and persistent user sessions.",
      "Real-Time Messaging – Send and receive instant messages with live updates.",
      "Post Management – Create, edit, delete, and like/unlike posts.",
      "Comments – Add and remove comments on posts.",
      "Notifications – Receive real-time notifications for likes, comments, and new followers.",
      "Follow System – Follow and unfollow users to build your social network.",
      "User Profiles – Customize profile information, profile picture, username, and password",
      "User Search – Quickly search and discover users by name.",
    ],
    githubUrl: "https://github.com/salaheldin404/fullstack-social-media-web-app",
  },
];

interface ProjectTab {
  id: ProjectFileTab;
  label: string;
  icon: LucideIcon;
}

export const PROJECT_TABS: ProjectTab[] = [
  {
    id: "readme",
    label: "README.md",
    icon: FileText,
  },
  // {
  //   id: "architecture",
  //   label: "Architecture.md",
  //   icon: Workflow,
  // },
  {
    id: "features",
    label: "features.json",
    icon: ListChecks,
  },
  {
    id: "screenshots",
    label: "Screenshots",
    icon: ImageIcon,
  },
  // {
  //   id: "demo",
  //   label: "Live Demo",
  //   icon: ExternalLink,
  // },
  // {
  //   id: "github",
  //   label: "GitHub",
  //   icon: FaGithub as LucideIcon, // Type assertion to satisfy LucideIcon type
  // },
];
