import { motion } from "framer-motion"
import { ContactMethod } from "../types"
import { ArrowUpRight } from "lucide-react"
import { createFadeUpVariants, reducedMotionVariants } from "@/modules/home/utils"

const cardVariants = createFadeUpVariants(18)

const ContactCard = ({ method, shouldReduceMotion }: { method: ContactMethod; shouldReduceMotion: boolean }) => {
  const Icon = method.icon
  const itemVariants = shouldReduceMotion ? reducedMotionVariants : cardVariants
  return (
    <motion.div key={method.title} variants={itemVariants} className="h-full">
      <a
        href={method.href}
        target={method.external ? "_blank" : undefined}
        rel={method.external ? "noopener noreferrer" : undefined}
        className="group flex h-full min-h-52 flex-col rounded-xl border border-border/70 bg-card/70 p-5 shadow-sm transition-all duration-200 ease-out will-change-transform hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_16px_40px_color-mix(in_oklab,var(--primary)_12%,transparent)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        aria-label={`${method.title}: ${method.value}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex size-10 items-center justify-center rounded-lg border border-border/60 bg-background/70 text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:text-primary">
            <Icon className="size-4.5" aria-hidden="true" />
          </div>
          <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
        </div>

        <div className="mt-auto space-y-2 pt-8">
          <h3 className="text-sm font-semibold tracking-tight text-foreground">{method.title}</h3>
          <p className="truncate text-xs font-medium text-primary">{method.value}</p>
          <p className="text-xs leading-relaxed text-muted-foreground">{method.description}</p>
        </div>
      </a>
    </motion.div>
  )
}

export default ContactCard
