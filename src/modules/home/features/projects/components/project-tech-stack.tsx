"use client"

interface ProjectTechStackProps {
  technologies: string[]
}

export const ProjectTechStack = ({ technologies }: ProjectTechStackProps) => {
  return (
    <div className="space-y-2">
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block">
        Modules & Dependencies
      </span>
      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md border border-border bg-muted/20 dark:bg-muted/10 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
