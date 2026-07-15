"use client"
import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react"
import Lenis from "lenis"

const LenisContext = createContext<Lenis | null>(null)


export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const rafId = useRef<number | undefined>(undefined)

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      instance.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }
    rafId.current = requestAnimationFrame(raf)

    setLenis(instance)

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      instance.destroy()
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

export const useLenis = () => useContext(LenisContext)

