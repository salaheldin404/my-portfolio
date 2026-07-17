import type { SkillCategory as SkillCategoryType } from "../types"
import { SkillCard } from "./skill-card"
import { motion, Variants } from "framer-motion"

type SkillCategoryProps = {
  category: SkillCategoryType
  index: number
  shouldReduceMotion?: boolean
}

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.2,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
      staggerChildren: 0.15,
      delayChildren: 0.04, // Starts after the card slide animation begins
    },
  }),
}

const reducedCategoryVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
}


const reducedItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0 },
  },
}

export const SkillCategory = ({
  category,
  index,
  shouldReduceMotion = false,
}: SkillCategoryProps) => {
  const cardVariants = shouldReduceMotion ? reducedItemVariants : itemVariants

  return (
    <motion.article
      custom={index}
      variants={shouldReduceMotion ? reducedCategoryVariants : categoryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="rounded-2xl border border-border/80 bg-card/55 p-5 sm:p-6 backdrop-blur-sm shadow-lg shadow-black/5 dark:shadow-black/20"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
        {category.title}
      </h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {category.skills.map((skill) => (
          <motion.li key={skill.id} variants={cardVariants} >
            <SkillCard skill={skill} />
          </motion.li>
        ))}
      </ul>
    </motion.article>
  )
}
