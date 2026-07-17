"use client"

import { useState } from "react"
import { motion, useReducedMotion, Variants } from "framer-motion"
import { Briefcase } from "lucide-react"
import { PROJECTS_DATA } from "./data"
import { ProjectFileTab } from "./types"
import { ExplorerSidebar } from "./components/explorer-sidebar"
import { ProjectViewer } from "./components/project-viewer"
import { SectionHeader } from "@/components/section-header"

const contentRevealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
}

const delayedContentRevealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.08, ease: "easeOut" },
  },
}

const reducedContentVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0 },
  },
}

const ProjectsSection = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS_DATA[0].id)
  const [selectedTab, setSelectedTab] = useState<ProjectFileTab>("readme")
  const [expandedProjects, setExpandedProjects] = useState<string[]>([PROJECTS_DATA[0].id])
  const shouldReduceMotion = useReducedMotion()
  const headerVariants = shouldReduceMotion ? reducedContentVariants : contentRevealVariants
  const panelVariants = shouldReduceMotion ? reducedContentVariants : delayedContentRevealVariants

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
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <SectionHeader
            title="Selected Projects"
            description="Navigate the project workspace below. Expand folders to review README specifications,  and source files."
            icon={Briefcase}
            mainTitle="Portfolio"
          />
        </motion.div>

        {/* IDE Container */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
