
import { Folder, FolderOpen } from "lucide-react"
import { Project, ProjectFileTab } from "../types"
import { ExplorerItem } from "./explorer-item"

interface ExplorerTreeProps {
  projects: Project[]
  selectedProjectId: string
  selectedTab: ProjectFileTab
  expandedProjects: string[]
  onSelectFile: (projectId: string, tab: ProjectFileTab) => void
  onToggleProject: (projectId: string) => void
}
import { PROJECT_TABS } from "../data"


export const ExplorerTree = ({
  projects,
  selectedProjectId,
  selectedTab,
  expandedProjects,
  onSelectFile,
  onToggleProject,
}: ExplorerTreeProps) => {
  return (
    <div className="space-y-1">
      {/* Root PROJECTS folder */}
      <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 select-none">
        Workspace
      </div>

      <div className="space-y-1">
        {projects.map((project) => {
          const isProjectExpanded = expandedProjects.includes(project.id)
          const isProjectActive = selectedProjectId === project.id

          return (
            <div key={project.id} className="space-y-0.5">
              {/* Project Folder */}
              <ExplorerItem
                label={project.title}
                icon={isProjectExpanded ? FolderOpen : Folder}
                isFolder
                isExpanded={isProjectExpanded}
                onClick={() => onToggleProject(project.id)}
                indent={0}
              />

              {/* Collapsible File List with basic smooth CSS transition */}
              {isProjectExpanded && (
                <div className="space-y-0.5 transition-all duration-300">
                  {PROJECT_TABS.map((tab) => {
                    const isActive = isProjectActive && selectedTab === tab.id
                    return (
                      <ExplorerItem
                        key={tab.id}
                        label={tab.label}
                        icon={tab.icon}
                        isActive={isActive}
                        onClick={() => onSelectFile(project.id, tab.id)}
                        indent={1}
                      />
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
