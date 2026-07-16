"use client"

import { ExternalLink,  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa";

interface ProjectActionsProps {
  githubUrl: string
  liveDemoUrl?: string
}

export const ProjectActions = ({ githubUrl, liveDemoUrl }: ProjectActionsProps) => {
  // if (type === "github") {
  //   return (
  //     <div className="border border-border bg-muted/10 dark:bg-muted/5 p-6 rounded-xl flex flex-col items-center justify-center text-center space-y-4 max-w-md mx-auto my-8 shadow-sm">
  //       <div className="p-3 rounded-full bg-foreground/10 text-foreground">
  //         <FaGithub className="size-8" />
  //       </div>
  //       <div className="space-y-1">
  //         <h4 className="font-bold text-foreground text-sm">Source Code Repository</h4>
  //         <p className="text-xs text-muted-foreground">Explore files, commit logs, and documentation directly on GitHub.</p>
  //       </div>
  //       <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
  //         <Button className="w-full h-10 font-semibold cursor-pointer">
  //           Open Repository
  //           <ExternalLink className="size-4 ml-1.5" />
  //         </Button>
  //       </a>
  //     </div>
  //   )
  // }

  // if (type === "demo" && liveDemoUrl) {
  //   return (
  //     <div className="border border-border bg-muted/10 dark:bg-muted/5 p-6 rounded-xl flex flex-col items-center justify-center text-center space-y-4 max-w-md mx-auto my-8 shadow-sm">
  //       <div className="p-3 rounded-full bg-primary/10 text-primary">
  //         <ExternalLink className="size-8" />
  //       </div>
  //       <div className="space-y-1">
  //         <h4 className="font-bold text-foreground text-sm">Live Production Host</h4>
  //         <p className="text-xs text-muted-foreground">Launch the live deployed web application to interact with the production system.</p>
  //       </div>
  //       <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
  //         <Button className="w-full h-10 font-semibold cursor-pointer">
  //           Launch Application
  //           <ExternalLink className="size-4 ml-1.5" />
  //         </Button>
  //       </a>
  //     </div>
  //   )
  // }

  return (
    <div className="flex flex-wrap gap-3">
      {liveDemoUrl && (
        <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
          <Button className="h-9 px-4 font-semibold text-xs cursor-pointer">
            Launch Application
            <ExternalLink className="size-3.5 ml-1.5" />
          </Button>
        </a>
      )}
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="h-9 px-4 font-semibold text-xs cursor-pointer">
          <FaGithub className="size-3.5 mr-1.5" />
          View Source
        </Button>
      </a>
    </div>
  )
}
