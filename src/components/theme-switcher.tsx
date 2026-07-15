"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { useCallback, useEffect, useState } from "react"

const ThemeSwitcher = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const activeTheme = theme === "system" ? resolvedTheme : theme
  const toggleTheme = useCallback(() => {
    const newTheme = activeTheme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }, [activeTheme, setTheme])

  if (!mounted) {
    return (
      <div
        className="w-8 h-8 rounded-full border border-border/40 bg-muted/40"
        aria-hidden="true"
      />
    )
  }
  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-8 h-8 rounded-full border border-border/40 bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus:outline-none cursor-pointer overflow-hidden"
      aria-label="Toggle color theme"
    >
      {/* Sun Icon */}
      <motion.div
        initial={false}
        animate={{
          scale: activeTheme === "light" ? 1 : 0,
          rotate: activeTheme === "light" ? 0 : 90,
          opacity: activeTheme === "light" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <Sun className="size-4.5 text-amber-500 fill-amber-500/20" />
      </motion.div>

      {/* Moon Icon */}
      <motion.div
        initial={false}
        animate={{
          scale: activeTheme === "dark" ? 1 : 0,
          rotate: activeTheme === "dark" ? 0 : -90,
          opacity: activeTheme === "dark" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <Moon className="size-4.5 text-primary fill-primary/20" />
      </motion.div>
    </button>
  )
}

export default ThemeSwitcher
