import type { LucideIcon } from "lucide-react"

export type AboutSectionCopy = {
  eyebrow: string
  title: string
  description: string
}

export type AboutProfile = {
  name: string
  role: string
  imageSrc: string
  imageAlt: string
  intro: string[]
}

export type AboutPrinciple = {
  title: string
  description: string
  icon: LucideIcon
}

export type AboutQuickFact = {
  label: string
  value: string
  icon: LucideIcon
}

export type AboutFocusItem = {
  label: string
}