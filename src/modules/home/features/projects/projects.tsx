"use client"

import { useState } from "react"
import { Briefcase } from "lucide-react"
import { PROJECTS_DATA } from "./data"
import { ProjectFileTab } from "./types"
import { ExplorerSidebar } from "./components/explorer-sidebar"
import { ProjectViewer } from "./components/project-viewer"

const ProjectsSection = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS_DATA[0].id)
  const [selectedTab, setSelectedTab] = useState<ProjectFileTab>("readme")
  const [expandedProjects, setExpandedProjects] = useState<string[]>([PROJECTS_DATA[0].id])

  const selectedProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0]

  const handleSelectFile = (projectId: string, tab: ProjectFileTab) => {
    setSelectedProjectId(projectId)
    setSelectedTab(tab)
    
    // Auto-scroll to details on mobile/tablet so user sees the change
    // if (window.innerWidth < 1024) {
    //   document.getElementById("project-viewer-anchor")?.scrollIntoView({ behavior: "smooth", block: "start" })
    // }
  }

  const handleToggleProject = (projectId: string) => {
    setExpandedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    )
  }

  return (
    <section id="work" className="py-24 border-t border-border/40 scroll-mt-header">
      <div className="main-container">
        {/* Section Heading */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider select-none">
            <Briefcase className="size-3.5" />
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base leading-relaxed">
            Navigate the project workspace below. Expand folders to review README specifications,  and source files.
          </p>
        </div>

        {/* IDE Container */}
        <div className="relative border border-border/80 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm shadow-xl flex flex-col lg:flex-row h-auto lg:h-150 max-w-7xl mx-auto">
          {/* Left panel: File Explorer tree */}
          <ExplorerSidebar
            projects={PROJECTS_DATA}
            selectedProjectId={selectedProjectId}
            selectedTab={selectedTab}
            expandedProjects={expandedProjects}
            onSelectFile={handleSelectFile}
            onToggleProject={handleToggleProject}
          />

          {/* Anchor for scrolling on mobile */}
          <div id="project-viewer-anchor" className="absolute top-[-80px]" />

          {/* Right panel: Active file tab viewer */}
          <ProjectViewer
            project={selectedProject}
            selectedTab={selectedTab}
            onSelectTab={(tab) => setSelectedTab(tab)}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
