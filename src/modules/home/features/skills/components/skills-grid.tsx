import type { SkillCategory as SkillCategoryType } from "../types"
import { SkillCategory } from "./skill-category"

type SkillsGridProps = {
  categories: SkillCategoryType[]
  shouldReduceMotion?: boolean
}

export const SkillsGrid = ({ categories, shouldReduceMotion = false }: SkillsGridProps) => {
  return (
    <div className="relative z-10 grid gap-5 md:grid-cols-2">
      {categories.map((category, index) => (
        <SkillCategory
          key={category.id}
          category={category}
          index={index}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </div>
  )
}
