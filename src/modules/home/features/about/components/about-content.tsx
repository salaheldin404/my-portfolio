"use client"

import { motion, useReducedMotion } from "framer-motion"
import { User } from "lucide-react"
import Image from "next/image"
import { ABOUT_CURRENT_FOCUS, ABOUT_FOCUS_AREAS, ABOUT_PROFILE, ABOUT_QUICK_FACTS } from "../data"
import { GROUP_VIEWPORT } from "@/modules/home/constants"
import type { AboutSectionCopy } from "../types"
import { createFadeUpVariants, reducedMotionVariants } from "@/modules/home/utils"
import { SectionHeader } from "@/modules/home/components/section-header"
import { WhatIFocusOn } from "./what-focus-on"
import { CurrentFocus } from "./current-focus"
import { QuickFacts } from "./quick-facts"

type AboutContentProps = {
  copy: AboutSectionCopy
}

const contentItemVariants = createFadeUpVariants(20)

export const AboutContent = ({ copy }: AboutContentProps) => {
  const shouldReduceMotion = useReducedMotion() ?? false
  const itemVariants = shouldReduceMotion ? reducedMotionVariants : contentItemVariants

  return (
    <div className="space-y-10">

      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        icon={User}
        shouldReduceMotion={shouldReduceMotion}
      />



      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={GROUP_VIEWPORT}
        className="relative max-w-4xl overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm sm:p-6"
      >
        <div
          className="pointer-events-none absolute -top-20 -right-16 size-48 rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:gap-7">
          <div className="relative mx-auto aspect-4/5 w-full max-w-50 shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-muted sm:mx-0 sm:w-40">
            <Image
              src={ABOUT_PROFILE.imageSrc}
              alt={ABOUT_PROFILE.imageAlt}
              fill
              sizes="(max-width: 640px) 200px, 160px"
              className="object-cover object-[center_18%]"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {ABOUT_PROFILE.name}
              </h3>
              <span className="hidden size-1 rounded-full bg-primary sm:block" aria-hidden="true" />
              <p className="text-sm font-medium text-primary">{ABOUT_PROFILE.role}</p>
            </div>

            <div className="space-y-3 border-l-2 border-primary/30 pl-4">
              {ABOUT_PROFILE.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <WhatIFocusOn items={ABOUT_FOCUS_AREAS} shouldReduceMotion={shouldReduceMotion} />

      <CurrentFocus items={ABOUT_CURRENT_FOCUS} shouldReduceMotion={shouldReduceMotion} />

      <QuickFacts facts={ABOUT_QUICK_FACTS} shouldReduceMotion={shouldReduceMotion} />
    </div>
  )
}
