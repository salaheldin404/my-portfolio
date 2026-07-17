import type { SkillItem } from "../types"

type SkillCardProps = {
  skill: SkillItem
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  const Icon = skill.icon

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-border/70 bg-card/70 px-3.5 py-3 text-sm text-foreground/90 shadow-sm transition-all duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:border-primary/45 hover:bg-card hover:text-foreground hover:shadow-[0_10px_30px_color-mix(in_oklab,var(--primary)_10%,transparent)]">
      <div className="inline-flex size-8 items-center justify-center rounded-lg border border-border/60 bg-background/70 text-muted-foreground transition-all duration-200 ease-out group-hover:border-primary/40 group-hover:text-primary group-hover:scale-105">
        <Icon className="size-4" aria-hidden="true" />
      </div>
      <span className="font-medium tracking-tight">{skill.label}</span>
    </div>
  )
}
