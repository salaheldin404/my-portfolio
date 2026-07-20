
"use client"


import { SKILL_CATEGORIES } from "./data"
import AmbientGlow from "@/modules/home/components/ambient-glow"
import { SectionHeader } from "@/modules/home/components/section-header"
import { SkillsGrid } from "./components/skills-grid"
import { Sparkles } from "lucide-react"
import { useReducedMotion } from "framer-motion"


const SkillsSection = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="skills"
      className="relative isolate py-24 border-t border-border/40 scroll-mt-header overflow-hidden"
    >
      <AmbientGlow />

      <div className="main-container relative z-10 space-y-10">

        <SectionHeader
          title="Core Skills"
          description="A curated toolkit used to build performant, accessible, and production-ready products from interface to infrastructure."
          icon={Sparkles}
          eyebrow="Toolkit"
          shouldReduceMotion={shouldReduceMotion ?? false}

        />


        <SkillsGrid
          categories={SKILL_CATEGORIES}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      </div>
    </section>
  )
}

export default SkillsSection
