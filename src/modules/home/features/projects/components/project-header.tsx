
import { Project } from "../types"

interface ProjectHeaderProps {
  project: Project
}

export const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2.5 items-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          {project.title}
        </h2>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary uppercase tracking-wide select-none">
          Active Project
        </span>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {project.description}
      </p>
    </div>
  )
}
