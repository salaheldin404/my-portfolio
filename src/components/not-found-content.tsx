"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { createFadeUpVariants, reducedMotionVariants } from "@/modules/home/utils";


export default function NotFoundContent({ children }: {
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const itemVariants: Variants = shouldReduceMotion
    ? reducedMotionVariants
    : createFadeUpVariants(14)
  return (
    <motion.div
      className="mx-auto flex max-w-xl flex-col items-center text-center"
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
}
