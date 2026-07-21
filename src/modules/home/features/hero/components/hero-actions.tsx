import { ArrowUpRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { smoothScrollTo } from "@/lib/utils"
import { useLenis } from "@/components/SmoothScrollProvider"

export const HeroActions = () => {
  const lenis = useLenis()
  
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()

    document.body.style.overflow = "unset"

    const element = document.getElementById("work")
    if (element) {
      requestAnimationFrame(() => smoothScrollTo(lenis, element, -80))
    }
  }

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <a href="#work" onClick={handleScrollToProjects}>
        <Button size="lg" className="rounded-full h-11 px-6 font-semibold cursor-pointer">
          View Projects
          <ArrowUpRight className="size-4 ml-1" />
        </Button>
      </a>
      <a href="/resume.pdf" download>
        <Button size="lg" variant="outline" className="rounded-full h-11 px-6 font-semibold cursor-pointer">
          <Download className="size-4 mr-2" />
          Download Resume
        </Button>
      </a>
    </div>
  )
}
