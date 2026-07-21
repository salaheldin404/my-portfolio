import Image from "next/image"

export const HeroImage = () => {
  return (
    <div className="relative group flex items-center justify-center lg:justify-end w-full">
      {/* Subtle background glow effect using primary theme color */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/15 transition-colors duration-500 pointer-events-none" />

      {/* Glass card frame */}
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-3 shadow-2xl transition-all duration-500 group-hover:border-primary/30">
        <div className="relative aspect-square w-64 sm:w-72 md:w-80 overflow-hidden rounded-xl bg-muted">
          <Image
            src="/salah.jpeg"
            alt="Salah Eldin"
            fill
            priority

            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-w-768px) 256px, (max-w-1024px) 288px, 320px"
          />
        </div>
      </div>
    </div>
  )
}
