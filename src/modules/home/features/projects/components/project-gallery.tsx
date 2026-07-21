"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  X,
  Search,
  LayoutGrid,
} from "lucide-react"

interface ProjectGalleryProps {
  projectScreens: string[]
  projectName?: string
}

export const ProjectGallery = ({ projectScreens, projectName }: ProjectGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [scale, setScale] = useState(1)

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectScreens.length)
    setScale(1)
  }, [projectScreens.length])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectScreens.length) % projectScreens.length)
    setScale(1)
  }, [projectScreens.length])

  useEffect(() => {
    if (!isLightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "Escape") {
        handleCloseLightbox()
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn()
      } else if (e.key === "-") {
        handleZoomOut()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen, handleNext, handlePrev])

  function handleOpenLightbox(index: number) {
    setActiveIndex(index)
    setScale(1)
    setIsLightboxOpen(true)
  }

  function handleCloseLightbox() {
    setIsLightboxOpen(false)
    setScale(1)
  }

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.5, 4))
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.5, 1))
  const handleResetZoom = () => setScale(1)

  if (!projectScreens || projectScreens.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 border border-dashed border-border rounded-xl bg-card text-muted-foreground text-center space-y-3">
        <LayoutGrid className="w-8 h-8 opacity-50 text-neutral-400" />
        <p className="text-sm font-mono">No screenshots available for this project.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground select-none">
        <LayoutGrid className="w-3.5 h-3.5" />
        <span>Grid Overview</span>
        <span className="text-foreground/40">{projectScreens.length} screenshots</span>
      </div>

      <div
        
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {projectScreens.map((screen, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleOpenLightbox(idx)}
            className="group/grid-item relative aspect-16/10 rounded-xl overflow-hidden border border-border/85 bg-card hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer select-none text-left"
          >
            <div
              className="absolute inset-0 select-none pointer-events-none blur-xl opacity-0 group-hover/grid-item:opacity-20 transition-all duration-300"
              style={{
                backgroundImage: `url(${screen})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />

            <Image
              src={screen}
              alt={projectName ? `${projectName} Screenshot ${idx + 1}` : `Screenshot ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover/grid-item:scale-105 p-0.5"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/grid-item:opacity-100 transition-all duration-200 flex flex-col justify-end p-3">
              
              <div className="flex items-center justify-between mt-1 text-white/60 text-[9px] font-mono">
                <span>SCREEN {idx + 1}</span>
                <Search className="w-3 h-3" />
              </div>
            </div>

            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-[9px] font-mono text-white px-1.5 py-0.5 rounded border border-white/10 group-hover/grid-item:opacity-0 transition-opacity">
              {idx + 1}
            </div>

            <div className="absolute left-2 bottom-2 opacity-0 group-hover/grid-item:opacity-100 transition-opacity">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/55 px-2 py-1 text-[9px] font-mono text-white/80 backdrop-blur-md">
                <Maximize2 className="w-3 h-3" />
                Open
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between overflow-hidden"
          >
            {/* Header controls */}
            <div className="w-full flex items-center justify-between p-4 bg-linear-to-b from-black/80 to-transparent z-10 select-none">
              <div className="text-left font-mono space-y-0.5">
                <h4 className="text-sm font-semibold text-white/90">
                  {projectName || "Project Screenshots"}
                </h4>
                
              </div>
              
              {/* Toolbar */}
              <div className="flex items-center gap-4 text-white/80">
                {/* Zoom buttons */}
                <div className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/5 text-xs">
                  <button
                    onClick={handleZoomOut}
                    disabled={scale === 1}
                    className="p-1.5 rounded hover:bg-white/10 hover:text-white transition disabled:opacity-40 cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    disabled={scale === 1}
                    className="px-2 py-1 rounded hover:bg-white/10 hover:text-white transition disabled:opacity-40 font-mono text-[10px] cursor-pointer"
                    title="Reset Zoom"
                  >
                    {Math.round(scale * 100)}%
                  </button>
                  <button
                    onClick={handleZoomIn}
                    disabled={scale === 4}
                    className="p-1.5 rounded hover:bg-white/10 hover:text-white transition disabled:opacity-40 cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Counter */}
                <span className="text-xs font-mono hidden sm:inline bg-white/10 border border-white/5 px-2.5 py-1 rounded">
                  {activeIndex + 1} / {projectScreens.length}
                </span>

                {/* Close button */}
                <button
                  onClick={handleCloseLightbox}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition hover:scale-105 border border-white/10 cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Interactive Zoom viewport */}
            <div className="flex-1 relative w-full flex items-center justify-center overflow-hidden">
              {/* Large ambient blur background */}
              <div
                className="absolute inset-0 pointer-events-none blur-3xl opacity-30 select-none scale-125 transition-all duration-700"
                style={{
                  backgroundImage: `url(${projectScreens[activeIndex]})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />

              <div className="absolute inset-0 flex items-center justify-between p-4 z-10 pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-black/50 hover:bg-black border border-white/10 text-white/80 hover:text-white shadow-xl pointer-events-auto cursor-pointer"
                  title="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-black/50 hover:bg-black border border-white/10 text-white/80 hover:text-white shadow-xl pointer-events-auto cursor-pointer"
                  title="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Draggable/zoomable image container */}
              <div className="w-full h-full flex items-center justify-center p-6 select-none">
                <motion.div
                  key={`${activeIndex}-${scale}`}
                  drag={scale > 1}
                  dragElastic={0.15}
                  dragConstraints={{
                    left: -200 * (scale - 1),
                    right: 200 * (scale - 1),
                    top: -150 * (scale - 1),
                    bottom: 150 * (scale - 1),
                  }}
                  animate={{ scale }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  className="relative max-h-[75vh] max-w-[85vw] aspect-16/10 w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={projectScreens[activeIndex]}
                    alt={`Screenshot ${activeIndex + 1}`}
                    fill
                    sizes="90vw"
                    className={`object-contain ${
                      scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
                    }`}
                    onDoubleClick={() => {
                      if (scale > 1) handleResetZoom()
                      else setScale(2)
                    }}
                    draggable={false}
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom mini film strip in Lightbox */}
            <div className="w-full bg-linear-to-t from-black to-black/80 p-4 border-t border-white/10 z-10 select-none">
              <div className="max-w-3xl mx-auto flex flex-col gap-2">
                <div className="flex gap-2 overflow-x-auto py-1 justify-center scrollbar-none">
                  {projectScreens.map((screen, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative shrink-0 aspect-16/10 w-14 sm:w-16 rounded border transition-all duration-150 cursor-pointer ${
                        idx === activeIndex
                          ? "border-primary ring-2 ring-primary/40 scale-105"
                          : "border-white/20 opacity-40 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={screen}
                        alt={`Mini thumbnail ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
                <div className="text-center text-[10px] font-mono text-white/50">
                  Tip: Double-click to Zoom. Drag to Pan when zoomed. Arrow keys navigate.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
