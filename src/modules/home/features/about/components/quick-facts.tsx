"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import type { AboutQuickFact } from "../types"
import { createFadeUpVariants, createStaggerVariants, reducedMotionVariants } from "@/modules/home/utils"
import { SectionHeader } from "@/modules/home/components/section-header"

type QuickFactsProps = {
  facts: AboutQuickFact[]
  shouldReduceMotion: boolean
}

export const QuickFacts = ({ facts, shouldReduceMotion }: QuickFactsProps) => {
  const containerVariants = shouldReduceMotion
    ? reducedMotionVariants
    : createStaggerVariants({ delayChildren: 0.05, staggerChildren: 0.08 })

  const itemVariants = shouldReduceMotion ? reducedMotionVariants : createFadeUpVariants(14)

  return (
    <section className="space-y-5">
      <SectionHeader
        eyebrow="Snapshot"
        title="Quick Facts"
        description="A concise summary of where I am, what I build, and what I am refining next."
        icon={Sparkles}
        compact
        shouldReduceMotion={shouldReduceMotion ?? false}

      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {facts.map((fact) => {
          const Icon = fact.icon

          return (
            <motion.article
              key={fact.label}
              variants={itemVariants}
              className="rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </div>

                <div className="min-w-0 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {fact.value}
                  </p>
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}