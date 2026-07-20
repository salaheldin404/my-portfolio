"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { PROJECTS_DATA } from "./data"
import { ProjectFileTab } from "./types"
import { ExplorerSidebar } from "./components/explorer-sidebar"
import { ProjectViewer } from "./components/project-viewer"
import { SectionHeader } from "@/modules/home/components/section-header"
import useIsMobile from "./hooks/useIsMobile"
import { createFadeUpVariants, reducedMotionVariants } from "@/modules/home/utils"
import { GROUP_VIEWPORT } from "@/modules/home/constants"


const contentItemVariants = createFadeUpVariants(30)


const ProjectsSection = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS_DATA[0].id)
  const [selectedTab, setSelectedTab] = useState<ProjectFileTab>("readme")
  const [expandedProjects, setExpandedProjects] = useState<string[]>([PROJECTS_DATA[0].id])
  const shouldReduceMotion = useReducedMotion()
  const panelVariants = shouldReduceMotion ? reducedMotionVariants : contentItemVariants
  const isMobile = useIsMobile()
  const selectedProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0]

  const handleSelectFile = (projectId: string, tab: ProjectFileTab) => {
    setSelectedProjectId(projectId)
    setSelectedTab(tab)

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
      <div className="main-container space-y-10">
        {/* Section Heading */}

        <SectionHeader
          title="Selected Projects"
          description="Navigate the project workspace below. Expand folders to review README specifications,  and source files."
          icon={Briefcase}
          eyebrow="Portfolio"
          shouldReduceMotion={shouldReduceMotion ?? false}
        />

        {/* IDE Container */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={GROUP_VIEWPORT}
        >
          <div className="relative border border-border/80 rounded-2xl  bg-card/50 backdrop-blur-sm shadow-xl flex flex-col lg:flex-row h-auto lg:h-150 max-w-7xl mx-auto">
            {/* Left panel: File Explorer tree */}
            <ExplorerSidebar
              projects={PROJECTS_DATA}
              selectedProjectId={selectedProjectId}
              selectedTab={selectedTab}
              expandedProjects={expandedProjects}
              onSelectFile={handleSelectFile}
              onToggleProject={handleToggleProject}
            />

            {/* Right panel: Active file tab viewer */}
            <ProjectViewer
              project={selectedProject}
              selectedTab={selectedTab}
              onSelectTab={(tab) => setSelectedTab(tab)}
              isMobile={isMobile}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
