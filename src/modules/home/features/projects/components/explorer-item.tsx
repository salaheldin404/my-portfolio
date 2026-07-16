"use client"

import { ChevronRight, ChevronDown, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExplorerItemProps {
  label: string
  icon: LucideIcon
  isActive?: boolean
  isFolder?: boolean
  isExpanded?: boolean
  onClick: () => void
  indent: number
}

export const ExplorerItem = ({
  label,
  icon: Icon,
  isActive,
  isFolder,
  isExpanded,
  onClick,
  indent,
}: ExplorerItemProps) => {
  return (
    <button
      onClick={onClick}
      style={{ paddingLeft: `${indent * 12 + 8}px` }}
      className={cn(
        "w-full flex items-center gap-1.5 py-1.5 text-xs font-semibold select-none text-left rounded-md transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-primary",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
      role={isFolder ? "button" : "tab"}
      aria-expanded={isFolder ? isExpanded : undefined}
    >
      {isFolder && (
        <span className="text-muted-foreground/60 shrink-0">
          {isExpanded ? (
            <ChevronDown className="size-3.5" />
          ) : (
            <ChevronRight className="size-3.5" />
          )}
        </span>
      )}
      <Icon className={cn("size-4 shrink-0", isActive ? "text-primary" : "text-muted-foreground/80")} />
      <span className="truncate">{label}</span>
    </button>
  )
}
