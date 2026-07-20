"use client"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons"
import { SECTION_VIEWPORT } from "../constants"
import { createFadeUpVariants, reducedMotionVariants } from "../utils"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  icon?: LucideIcon | IconType
  compact?: boolean
  className?: string
  shouldReduceMotion: boolean
}
const contentItemVariants = createFadeUpVariants(20)

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  icon: Icon,
  compact = false,
  className = "",
  shouldReduceMotion,
}: SectionHeaderProps) => {
  const titleClassName = compact
    ? "text-xl sm:text-2xl font-semibold tracking-tight text-foreground"
    : "text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground"
  const itemVariants = shouldReduceMotion ? reducedMotionVariants : contentItemVariants
  return (
    <motion.div variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={SECTION_VIEWPORT} className={`space-y-3 ${className}`.trim()}>
      <div className="inline-flex items-center gap-2 text-primary text-[10px] font-semibold uppercase tracking-[0.24em] select-none">
        {Icon ? <Icon className="size-3.5" aria-hidden="true" /> : null}
        <span>{eyebrow}</span>
      </div>
      <div className="space-y-2">
        <h2 className={titleClassName}>{title}</h2>
        {description ? (
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </motion.div>
  )
}