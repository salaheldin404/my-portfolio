import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons"

type SectionHeaderProps = {
  title: string
  description: string
  icon: LucideIcon | IconType
  mainTitle: string
}

export const SectionHeader = ({ title, description, icon: Icon, mainTitle }: SectionHeaderProps) => {
  return (
    <div className="space-y-4 mb-16">
      <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider select-none">
        <Icon className="size-3.5" />
        {mainTitle}
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-2xl text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  )
}
