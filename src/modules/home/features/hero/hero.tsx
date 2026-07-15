"use client"

import { motion, useReducedMotion, Variants } from "framer-motion"
import { HeroBadge } from "./components/hero-badge"
import { HeroContent } from "./components/hero-content"
import { HeroActions } from "./components/hero-actions"
import { HeroTechStack } from "./components/hero-tech-stack"
import { HeroImage } from "./components/hero-image"
import { HeroBackground } from "./components/hero-background"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const reducedFadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0 },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.22, ease: "easeOut" },
  },
}

const reducedImageVariants: Variants = {
  hidden: { opacity: 0, scale: 1, y: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0 },
  },
}


const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion()

  const textVariants = shouldReduceMotion ? reducedFadeUpVariants : fadeUpVariants
  const photoVariants = shouldReduceMotion ? reducedImageVariants : imageVariants

  return (
    <section
      id="home"
      className="relative z-10 min-h-[calc(100vh-var(--spacing-header))] flex items-center py-12 md:py-20 xl:py-28 scroll-mt-header overflow-hidden"
    >
      <HeroBackground />

      <div className="main-container w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8"
        >
          <motion.div
            variants={textVariants}
          >
            <HeroBadge />
          </motion.div>

          <motion.div
            variants={textVariants}
          >
            <HeroContent
            />
          </motion.div>

          <motion.div
            variants={textVariants}
          >
            <HeroActions />
          </motion.div>

          <motion.div
            variants={textVariants}
            className="w-full"
          >
            <HeroTechStack />
          </motion.div>
        </motion.div>

        {/* Right Column: Photograph */}
        <motion.div
          variants={photoVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end"
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
