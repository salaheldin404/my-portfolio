import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Certificate } from "../types"

type CertificateCardProps = {
  certificate: Certificate
  shouldReduceMotion?: boolean
}

export const CertificateCard = ({ certificate, shouldReduceMotion = false }: CertificateCardProps) => {
  const image = certificate.image

  return (
    <motion.div
     
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }}
      className="group bg-card/50 relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-border/50  backdrop-blur-md p-4 sm:p-5 shadow-sm hover:shadow-[0_20px_50px_color-mix(in_oklab,var(--primary)_10%,transparent)] hover:border-primary/30 transition-all duration-300 select-none outline-none focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30"
    >

      {/* Main card body with flex col */}
      <div className="relative flex h-full flex-col justify-between space-y-4">
        {/* Top Section: Provider Name */}
          <p className="truncate text-sm font-semibold uppercase text-muted-foreground">{certificate.provider}</p>

        {/* Middle Section: Preview Image */}
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-inner group/image">
          <div className="relative aspect-16/11 overflow-hidden">
            <Image
              src={image}
              alt={`${certificate.title} certificate preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              unoptimized
            />

            {/* Subtle glass reflection overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Inner shadow overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />

          </div>

        </div>

        {/* Lower Section: Title */}
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary leading-snug">
            {certificate.title}
          </h3>
        </div>

        {/* Bottom Section: ID and Action Button */}
        <div className="space-y-3 pt-1">


          <a
            href={certificate.certificateUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "w-full justify-center gap-1.5 border-border/80 bg-muted/40 text-foreground/80 hover:border-primary/30 hover:bg-primary/8 hover:text-primary transition-all duration-300 font-semibold group/btn"
            )}
          >
            <span>View Certificate</span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}