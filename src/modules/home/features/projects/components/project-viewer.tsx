"use client"

import { Project, ProjectFileTab } from "../types"
import { ProjectHeader } from "./project-header"
import { ProjectGallery } from "./project-gallery"
import { ProjectActions } from "./project-actions"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PROJECT_TABS } from "../data"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectViewerProps {
  project: Project
  selectedTab: ProjectFileTab
  onSelectTab: (tab: ProjectFileTab) => void
}

const tabVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

const TabSection = ({
  title,
  description,
  maxWidth = "max-w-full",
  children,
}: {
  title: string
  description: string
  maxWidth?: string
  children: React.ReactNode
}) => (
  <div className={`space-y-6 ${maxWidth}`}>
    <div className="space-y-2">
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    {children}
  </div>
)

function AnimatedTab({
  value,
  className,
  children,
  projectId
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
  projectId: string;  
}) {
  return (
    <TabsContent key={`${projectId}-${value}`} value={value} className={cn("bg-card p-4 rounded-md", className)}>
      <motion.div className='space-y-6' variants={tabVariants} initial="hidden" animate="visible">
        {children}
      </motion.div>
    </TabsContent>
  );
}


export const ProjectViewer = ({
  project,
  selectedTab,
  onSelectTab,
}: ProjectViewerProps) => {
  return (
    <div className="flex-1 flex flex-col gap-4 h-full bg-background min-w-0">

      <Tabs data-scroll-container className=" flex-1 p-6 space-y-4 overflow-y-auto overscroll-contain min-w-0 scrollbar-thin" value={selectedTab} onValueChange={onSelectTab}>
        <TabsList
          variant="line"
          className="w-full  h-full! md:h-auto! grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-0 rounded-none  p-0"
        >
          {PROJECT_TABS.map((tab) => {
            const Icon = tab.icon
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="h-10 rounded-none border-x border-transparent border-b-0 px-3 
                text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/90 
                transition-colors duration-150 hover:bg-muted/35 hover:text-foreground 
                data-active:border-l-border/70 data-active:border-r-border/70 
                data-active:border-t-2 data-active:text-foreground! data-active:border-t-primary! 
                data-active:bg-card! cursor-pointer"
              >
                <Icon className="size-3.5 shrink-0" />
                <span>{tab.label}</span>
              </TabsTrigger>
            )
          })}
        </TabsList>

        <AnimatedTab  projectId={project.id} value='readme' className='max-w-full'>
          <ProjectHeader project={project} />
          <hr className="border-border/60" />
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
            <div className="space-y-4 rounded-xl border border-border/60 bg-background/70 p-3 md:p-5 shadow-sm">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">
                  Project Overview
                </p>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{project.overview}</p>
            </div>

            <div className="space-y-4 rounded-xl border border-border/60 bg-linear-to-br from-card via-card to-muted/20 p-5 shadow-sm">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">
                  Tech Stack
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="inline-flex items-center rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-foreground shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>
          </div>
          <ProjectActions githubUrl={project.githubUrl} liveDemoUrl={project.liveDemoUrl} />
        </AnimatedTab>

        <AnimatedTab projectId={project.id} value="features" >
          <TabSection
            title="Product Features"
            description="List of core functions integrated inside the project workflow."
          >
            <div className="space-y-3 font-mono text-xs">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start text-muted-foreground">
                  <span className="text-neutral-500 w-5 text-right select-none shrink-0">{idx + 1}</span>
                  <div className="flex gap-2">
                    <span className="text-primary font-bold shrink-0">[✔]</span>
                    <p>{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabSection>
        </AnimatedTab>


        <AnimatedTab projectId={project.id} value="screenshots">
          <TabSection
            title="Project Screenshots"
            description="Explore the application's interface through selected screens highlighting the user experience, design system, and key workflows."
            maxWidth="max-w-4xl"
          >
            <ProjectGallery projectScreens={project.screenshots} projectName={project.title} />
          </TabSection>

        </AnimatedTab>


      </Tabs>

    </div>
  )
}
