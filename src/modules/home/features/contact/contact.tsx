"use client"

import { Button } from "@/components/ui/button"
import AmbientGlow from "@/modules/home/components/ambient-glow"
import { SECTION_VIEWPORT,GROUP_VIEWPORT } from "@/modules/home/constants"
import { createFadeUpVariants, createStaggerVariants, reducedMotionVariants } from "@/modules/home/utils"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react"
import { CONTACT_METHODS } from "./data"
import ContactCard from "./components/contact-card"
import { SectionHeader } from "@/modules/home/components/section-header"

const ctaVariants = createFadeUpVariants(16)

const ContactSection = () => {
  const shouldReduceMotion = useReducedMotion() ?? false
  const footerVariants = shouldReduceMotion ? reducedMotionVariants : ctaVariants
  const cardsContainerVariants = shouldReduceMotion
    ? reducedMotionVariants
    : createStaggerVariants({ delayChildren: 0.08, staggerChildren: 0.12 })

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-border/40 py-24 scroll-mt-header"
    >
      <AmbientGlow />

      <div className="main-container relative z-10">
          <SectionHeader eyebrow="Get in touch"
            title="Let’s build something great together."
            description="I’m always interested in new opportunities, meaningful projects, and connecting with fellow developers."
            icon={MessageSquare}
            shouldReduceMotion={shouldReduceMotion}
            className="max-w-2xl"
          />


          <div className="my-10 h-px w-full bg-border/60" />

          <motion.div
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={GROUP_VIEWPORT}
            className="grid gap-4 md:grid-cols-3"
          >
            {CONTACT_METHODS.map((method) => {

              return <ContactCard key={method.title} method={method} shouldReduceMotion={shouldReduceMotion} />
            })}
          </motion.div>

          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
            className="mt-10 flex flex-col items-start justify-between gap-6 rounded-xl border border-border/60 bg-muted/35 px-5 py-6 sm:flex-row sm:items-center sm:px-6"
          >
            <div className="space-y-1">
              <p className="text-sm font-semibold tracking-tight text-foreground">Interested in working together?</p>
              <p className="text-xs leading-relaxed text-muted-foreground">Let’s create something meaningful.</p>
            </div>
            <a href="mailto:salahlala303@gmail.com">
              <Button size="lg" className="h-10 rounded-full px-5 shadow-sm transition-shadow hover:shadow-[0_8px_24px_color-mix(in_oklab,var(--primary)_22%,transparent)]">
                <Mail className="size-4" aria-hidden="true" />
                Get in touch
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" aria-hidden="true" />
              </Button>
            </a>
          </motion.div>
        
      </div>
    </section>
  )
}

export default ContactSection
