export interface Project {
  id: string
  title: string
  slug: string
  description: string
  overview : string
  technologies: string[]
  screenshots: string[]
  features: string[]
  githubUrl: string
  liveDemoUrl?: string
}

export type ProjectFileTab =
  | "readme"
  | "features"
  | "screenshots"

