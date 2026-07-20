import { motion, Variants } from "framer-motion"
import type { Certificate } from "../types"
import { CertificateCard } from "./certificate-card"
import { createFadeUpVariants, createStaggerVariants, reducedMotionVariants } from "@/modules/home/utils"

type CertificatesGridProps = {
  certificates: Certificate[]
  shouldReduceMotion?: boolean
}


export const CertificatesGrid = ({ certificates, shouldReduceMotion = false }: CertificatesGridProps) => {
  const containerVariants = shouldReduceMotion
    ? reducedMotionVariants
    : createStaggerVariants({ delayChildren: 0.08, staggerChildren: 0.15 })

  const itemVariants: Variants = shouldReduceMotion
    ? reducedMotionVariants
    : createFadeUpVariants(16)


  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {certificates.map((certificate) => (
        <motion.div
          key={certificate.id}
          variants={itemVariants}

          className="break-inside-avoid h-full"
        >
          <CertificateCard
            certificate={certificate}
            shouldReduceMotion={shouldReduceMotion}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}