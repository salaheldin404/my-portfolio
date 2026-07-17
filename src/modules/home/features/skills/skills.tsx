
"use client"


import { SKILL_CATEGORIES } from "./data"
import AmbientGlow from "@/components/ambient-glow"
import  {SectionHeader}  from "@/components/section-header"
import { SkillsGrid } from "./components/skills-grid"
import { Sparkles } from "lucide-react"
import { motion, useReducedMotion, Variants } from "framer-motion"

const contentRevealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
}

const reducedContentVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0 },
  },
}

const SkillsSection = () => {
  const shouldReduceMotion = useReducedMotion()
  const headerVariants = shouldReduceMotion ? reducedContentVariants : contentRevealVariants

  return (
    <section
      id="skills"
      className="relative isolate py-24 border-t border-border/40 scroll-mt-header overflow-hidden"
    >
      <AmbientGlow />

      <div className="main-container relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <SectionHeader
            title="Core Skills"
            description="A curated toolkit used to build performant, accessible, and production-ready products from interface to infrastructure."
            icon={Sparkles}
            mainTitle="Toolkit"
          />
        </motion.div>

        <SkillsGrid
          categories={SKILL_CATEGORIES}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      </div>
    </section>
  )
}

export default SkillsSection
