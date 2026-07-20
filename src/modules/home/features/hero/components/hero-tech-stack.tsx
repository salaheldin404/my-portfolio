'use client'
import { createStaggerVariants } from "@/modules/home/utils"
import { motion, Variants } from "framer-motion"

const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS"
]

const stackContainerVariants= createStaggerVariants({ staggerChildren: 0.08, delayChildren: 1.35 })

const techBadgeVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 0.85,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    }
  }
}

const reducedStackContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    }
  }
}

const reducedTechBadgeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
    }
  }
}

export const HeroTechStack = ({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) => {
  const containerVariants = shouldReduceMotion ? reducedStackContainerVariants : stackContainerVariants
  const badgeVariants = shouldReduceMotion ? reducedTechBadgeVariants : techBadgeVariants

  return (
    <div className="space-y-3 w-full">
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block">
        Core Technologies
      </span>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2"
      >
        {TECH_STACK.map((tech) => (
          <motion.span
            key={tech}
            variants={badgeVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-xs font-semibold text-muted-foreground select-none transition-colors duration-250 hover:border-primary/45 hover:bg-primary/5 hover:text-foreground"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
