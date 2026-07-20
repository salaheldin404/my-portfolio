"use client"

import { motion, type Variants } from "framer-motion"
import { Target } from "lucide-react"
import type { AboutPrinciple } from "../types"
import { createFadeUpVariants, createStaggerVariants, reducedMotionVariants } from "@/modules/home/utils"
import { SectionHeader } from "@/modules/home/components/section-header"
import { PrincipleCard } from "./principle-card"

type WhatIFocusOnProps = {
  items: AboutPrinciple[]
  shouldReduceMotion: boolean
}

export const WhatIFocusOn = ({
  items,
  shouldReduceMotion,
}: WhatIFocusOnProps) => {
  const containerVariants = shouldReduceMotion
    ? reducedMotionVariants
    : createStaggerVariants({ delayChildren: 0.04, staggerChildren: 0.08 })

  const itemVariants: Variants = shouldReduceMotion
    ? reducedMotionVariants
    : createFadeUpVariants(16)

  return (
    <section className="space-y-5">
      <SectionHeader
        eyebrow="Focus"
        title="What I Focus On"
        description="The priorities I keep in mind while building personal projects and learning through hands-on work."
        icon={Target}
        compact
        shouldReduceMotion={shouldReduceMotion ?? false}

      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="grid gap-4 md:grid-cols-2"
      >
        {items.map((principle) => (
          <motion.div key={principle.title} variants={itemVariants}>
            <PrincipleCard principle={principle} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}