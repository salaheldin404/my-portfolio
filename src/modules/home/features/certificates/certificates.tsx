"use client"

import { Award } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import AmbientGlow from "@/modules/home/components/ambient-glow"
import { CERTIFICATES_DATA } from "./data"

import { CertificatesGrid } from "./components/certificates-grid"
import { SectionHeader } from "@/modules/home/components/section-header"
import { createFadeUpVariants, reducedMotionVariants } from "@/modules/home/utils"


const contentItemVariants = createFadeUpVariants(24)

const CertificatesSection = () => {
  const shouldReduceMotion = useReducedMotion()

  const contentVariants = shouldReduceMotion ? reducedMotionVariants : contentItemVariants

  return (
    <section id="certificates" className="relative isolate overflow-hidden border-t border-border/40 py-24 scroll-mt-header">
      <AmbientGlow />

      <div className="main-container relative z-10 space-y-10">

        <SectionHeader
          title="Certificates"
          description="A showcase of my professional achievements and certifications, highlighting my commitment to continuous learning and expertise in web development."
          icon={Award}
          eyebrow="Achievement Gallery"
          shouldReduceMotion={shouldReduceMotion ?? false}

        />

        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="space-y-8"
        >

          <CertificatesGrid
            certificates={CERTIFICATES_DATA}
            shouldReduceMotion={shouldReduceMotion ?? false}
          />
        </motion.div>
      </div>

    </section>
  )
}

export default CertificatesSection

