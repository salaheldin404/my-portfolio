import type { Metadata } from "next";
import AmbientGlow from "@/modules/home/components/ambient-glow";

import NotFoundActions from "@/components/not-found-actions";
import NotFoundContent from "@/components/not-found-content";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you’re looking for doesn’t exist or may have been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section
      className="relative isolate flex min-h-[calc(100vh-var(--spacing-header))] items-center overflow-hidden  py-12 md:py-20 xl:py-28 scroll-mt-header"
      aria-labelledby="not-found-title"
    >
      <AmbientGlow />

      <div className="main-container relative z-10 w-full">
        <NotFoundContent>
          <p className="mb-5 text-7xl font-extrabold leading-none tracking-[-0.08em] text-primary sm:text-8xl" aria-label="Error 404">
            404
          </p>
          <div className="space-y-3">
            <h1
              id="not-found-title"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Page Not Found
            </h1>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              The page you’re looking for doesn’t exist or may have been moved.
            </p>
          </div>
          <p className="mt-7 border-y border-border/60 py-3 font-mono text-xs text-muted-foreground">
            <span aria-hidden="true">&gt; </span>
            Route not found
          </p>
          <NotFoundActions />
        </NotFoundContent>
      </div>
    </section>
  );
}
