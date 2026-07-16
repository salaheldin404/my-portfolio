"use client"

import { Terminal } from "lucide-react"
import { Project, ProjectFileTab } from "../types"
import { ExplorerTree } from "./explorer-tree"

interface ExplorerSidebarProps {
  projects: Project[]
  selectedProjectId: string
  selectedTab: ProjectFileTab
  expandedProjects: string[]
  onSelectFile: (projectId: string, tab: ProjectFileTab) => void
  onToggleProject: (projectId: string) => void
}

export const ExplorerSidebar = ({
  projects,
  selectedProjectId,
  selectedTab,
  expandedProjects,
  onSelectFile,
  onToggleProject,
}: ExplorerSidebarProps) => {
  return (
    <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-border bg-muted/10 dark:bg-muted/5 flex flex-col h-full shrink-0">
      {/* Title bar */}
      <div className="px-4 py-3 border-b border-border/80 flex items-center justify-between select-none">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Explorer
        </span>
        <Terminal className="size-3.5 text-muted-foreground/60" />
      </div>

      {/* Tree view */}
      <div className="flex-1 p-2 overflow-y-auto max-h-75 lg:max-h-none">
        <ExplorerTree
          projects={projects}
          selectedProjectId={selectedProjectId}
          selectedTab={selectedTab}
          expandedProjects={expandedProjects}
          onSelectFile={onSelectFile}
          onToggleProject={onToggleProject}
        />
      </div>
    </div>
  )
}
