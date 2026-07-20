"use client"

import { motion } from "framer-motion"
import { Radar } from "lucide-react"
import type { AboutFocusItem } from "../types"
import { createFadeUpVariants, createStaggerVariants, reducedMotionVariants } from "@/modules/home/utils"
import { SectionHeader } from "@/modules/home/components/section-header"

type CurrentFocusProps = {
  items: AboutFocusItem[]
  shouldReduceMotion: boolean
}

export const CurrentFocus = ({ items, shouldReduceMotion }: CurrentFocusProps) => {
  const containerVariants = shouldReduceMotion
    ? reducedMotionVariants
    : createStaggerVariants({ delayChildren: 0.05, staggerChildren: 0.08 })

  const itemVariants = shouldReduceMotion ? reducedMotionVariants : createFadeUpVariants(10)

  return (
    <section className="space-y-5">
      <SectionHeader
        eyebrow="Exploration"
        title="Currently Exploring"
        description="The areas I am studying right now to keep improving my project work and engineering judgment."
        icon={Radar}
        compact
        shouldReduceMotion={shouldReduceMotion ?? false}

      />

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="flex flex-wrap gap-3"

      >
        {items.map((item) => (
          <motion.li key={item.label} variants={itemVariants}>
            <span className="inline-flex items-center rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
              <span
                className="mr-2 size-1.5 rounded-full bg-primary/70"
                aria-hidden="true"
              />
              {item.label}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}