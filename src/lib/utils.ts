import { clsx, type ClassValue } from "clsx";
import Lenis from "lenis";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const smoothScrollTo = (
  lenis: Lenis | null,
  target: number | HTMLElement,
  offset = 0,
) => {
  if (lenis) {
    lenis.scrollTo(target, offset ? { offset } : undefined);
    return;
  }
  const top =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
};
