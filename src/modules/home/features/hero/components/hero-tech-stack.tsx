
const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS"
]

export const HeroTechStack = () => {
  return (
    <div className="space-y-3 w-full">
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block">
        Core Technologies
      </span>
      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((tech) => (
          <span
            key={tech}
            className="px-3.5 py-1.5 rounded-full border border-border bg-card hover:border-primary/40 hover:bg-primary/5 hover:text-foreground transition-all duration-300 text-xs font-semibold text-muted-foreground select-none"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
