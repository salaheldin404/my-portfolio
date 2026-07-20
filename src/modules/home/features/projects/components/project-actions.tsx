"use client"

import { ExternalLink,  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa";

interface ProjectActionsProps {
  githubUrl: string
  liveDemoUrl?: string
}

export const ProjectActions = ({ githubUrl, liveDemoUrl }: ProjectActionsProps) => {
  
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
