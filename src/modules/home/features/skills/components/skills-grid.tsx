import { createStaggerVariants, reducedMotionVariants } from "@/modules/home/utils"
import type { SkillCategory as SkillCategoryType } from "../types"
import { SkillCategory } from "./skill-category"
import { motion } from "framer-motion"
import { GROUP_VIEWPORT } from "@/modules/home/constants"

type SkillsGridProps = {
  categories: SkillCategoryType[]
  shouldReduceMotion?: boolean
}

export const SkillsGrid = ({ categories, shouldReduceMotion = false }: SkillsGridProps) => {
  const containerVariants = shouldReduceMotion
    ? reducedMotionVariants
    : createStaggerVariants({ delayChildren: 0.30, staggerChildren: 0.25 })


  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={GROUP_VIEWPORT} className="relative z-10 grid gap-5 md:grid-cols-2">
      {categories.map((category, index) => (
        <SkillCategory
          key={category.id}
          category={category}
          index={index}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </motion.div>
  )
}
