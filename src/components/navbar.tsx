"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import ThemeSwitcher from "./theme-switcher"
import Lenis from "lenis"
import { useLenis } from "./SmoothScrollProvider"

const Links = [
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]
const SCROLL_THRESHOLD = 20
const SECTIONS = ["home", "work", "skills", "about", "contact"] as const

const smoothScrollTo = (lenis: Lenis | null, target: number | HTMLElement, offset = 0) => {
  if (lenis) {
    lenis.scrollTo(target, offset ? { offset } : undefined)
    return
  }
  const top =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY + offset
  window.scrollTo({ top, behavior: "smooth" })
}

const Navbar = () => {
  const lenis = useLenis()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position to transition styling
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
        ticking = false
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll Spy to highlight the currently visible section
  useEffect(() => {
    const elements = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    )

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top among intersecting ones,
        // instead of arbitrarily taking whichever fires last
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible){
          setActiveSection(visible.target.id)
        }
      },
      { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])


  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    document.body.style.overflow = "unset"
    setIsOpen(false)

    const targetId = href.replace("#", "")

    if (href === "#") {
      requestAnimationFrame(() => smoothScrollTo(lenis, 0))
      setActiveSection("")
      return
    }

    const element = document.getElementById(targetId)
    if (element) {
      requestAnimationFrame(() => smoothScrollTo(lenis, element, -80))
      setActiveSection(targetId)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-4 px-4 md:px-8 lg:px-16 xl:px-32 pointer-events-none">
      <nav
        className={cn(
          "mx-auto max-w-7xl w-full relative pointer-events-auto transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border border-border/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full px-6 py-2"
            : "bg-background/20 backdrop-blur-sm border border-border/10 rounded-[24px] px-4 py-3"
        )}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Back to top"
          >
            <div className="relative w-25 h-25 ">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1 bg-muted/40 p-1 rounded-full border border-border/20 backdrop-blur-sm">
              {Links.map((link) => {
                const sectionId = link.href.replace("#", "")
                const isActive = activeSection === sectionId
                return (
                  <li key={link.name} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={cn(
                        "relative z-10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors duration-300 block select-none",
                        isActive
                          ? "text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_2px_8px_rgba(var(--primary),0.2)]"
                        />
                      )}
                      {link.name}
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="ml-4 pl-4 border-l border-border/40 flex items-center gap-4">
              <ThemeSwitcher />
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="inline-flex h-9 items-center justify-center rounded-full bg-foreground px-5 text-xs font-bold uppercase tracking-wider text-background transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 h-screen w-screen bg-background/60 backdrop-blur-sm -z-20 md:hidden"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Dropdown Panel */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border border-border/30 shadow-xl z-50 md:hidden overflow-hidden rounded-2xl mt-3"
              >
                <div className="px-6 py-6 flex flex-col gap-4">
                  <ul className="flex flex-col gap-2">
                    {Links.map((link) => {
                      const sectionId = link.href.replace("#", "")
                      const isActive = activeSection === sectionId
                      return (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={cn(
                              "flex items-center px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all",
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                            )}
                          >
                            {link.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                  <div className="pt-4 border-t border-border/40">
                    <a
                      href="#contact"
                      onClick={(e) => handleLinkClick(e, "#contact")}
                      className="flex h-11 items-center justify-center rounded-xl bg-foreground text-sm font-bold uppercase tracking-wider text-background shadow-sm transition-all hover:bg-foreground/90 active:scale-[0.98]"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
