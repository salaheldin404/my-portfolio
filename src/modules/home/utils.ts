import type { Variants } from "framer-motion";

export const createFadeUpVariants = (distance = 20): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
});

interface Options {
  delayChildren?: number;
  staggerChildren?: number;
  hidden?: { opacity: number; y: number };
  visible?: { opacity: number; y: number };
}
export const createStaggerVariants = ({
  delayChildren,
  staggerChildren,
  hidden,
  visible,
}: Options): Variants => ({
  hidden: {
    opacity: hidden?.opacity ?? 0,
    y: hidden?.y ?? 16,
  },
  visible: {
    opacity: visible?.opacity ?? 1,
    y: visible?.y ?? 0,
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
