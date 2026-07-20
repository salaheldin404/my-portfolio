import type { AboutPrinciple } from "../types"

type PrincipleCardProps = {
  principle: AboutPrinciple
}

export const PrincipleCard = ({ principle }: PrincipleCardProps) => {
  const Icon = principle.icon

  return (
    <article className="group h-full rounded-2xl border border-border/70 bg-card/80 p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-full gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
          <Icon className="size-4" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            {principle.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {principle.description}
          </p>
        </div>
      </div>
    </article>
  )
}