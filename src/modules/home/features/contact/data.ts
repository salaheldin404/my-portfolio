import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactMethod } from "./types";

export const CONTACT_METHODS: ContactMethod[] = [
  {
    title: "Email",
    value: "salahlala303@gmail.com",
    description:
      "The best way to reach me about opportunities and collaborations.",
    href: "mailto:salahlala303@gmail.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    value: "github.com/salaheldin404",
    description:
      "Explore the projects, experiments, and source code I am building.",
    href: "https://github.com/salaheldin404",
    icon: FaGithub,
    external: true,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/salah-eldin-ahmed",
    description: "Let’s connect professionally and start a conversation.",
    href: "https://www.linkedin.com/in/salah-eldin-ahmed-389471221/",
    icon: FaLinkedin,
    external: true,
  },
];
