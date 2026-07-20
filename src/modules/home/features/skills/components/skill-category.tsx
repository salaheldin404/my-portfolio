import { createFadeUpVariants, createStaggerVariants, reducedMotionVariants } from "@/modules/home/utils"
import type { SkillCategory as SkillCategoryType } from "../types"
import { SkillCard } from "./skill-card"
import { motion, Variants } from "framer-motion"

type SkillCategoryProps = {
  category: SkillCategoryType
  index: number
  shouldReduceMotion?: boolean
}

export const SkillCategory = ({
  category,
  index,
  shouldReduceMotion = false,
}: SkillCategoryProps) => {
const containerVariants = shouldReduceMotion
    ? reducedMotionVariants
    : createStaggerVariants({ delayChildren: 0.10, staggerChildren: 0.20 })

  const itemVariants: Variants = shouldReduceMotion
    ? reducedMotionVariants
    : createFadeUpVariants(20)

  return (
    <motion.div
      custom={index}
      variants={containerVariants}

      className="rounded-2xl border border-border/80 bg-card/55 p-5 sm:p-6 backdrop-blur-sm shadow-lg shadow-black/5 dark:shadow-black/20"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
        {category.title}
      </h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {category.skills.map((skill) => (
          <motion.li key={skill.id} variants={itemVariants} >
            <SkillCard skill={skill} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
