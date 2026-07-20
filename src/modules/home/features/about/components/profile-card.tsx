import Image from "next/image"
import type { AboutProfile } from "../types"

type ProfileCardProps = {
  profile: AboutProfile
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <article className=" rounded-3xl border border-border/70 bg-card/80 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
      <div className="p-4 sm:p-5">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted">
          <Image
            src={profile.imageSrc}
            alt={profile.imageAlt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        </div>

        <div className="mt-5 space-y-3">
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              {profile.name}
            </h3>
            <p className="text-sm font-medium text-primary">
              {profile.role}
            </p>
          </div>

          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            {profile.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}