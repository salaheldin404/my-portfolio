"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, House } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFoundActions() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const hoverAnimation = shouldReduceMotion ? {} : { y: -2 };
  const tapAnimation = shouldReduceMotion ? {} : { y: 0 };

  return (
    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row" aria-label="404 page actions">
      <motion.div whileHover={hoverAnimation} whileTap={tapAnimation}>
        <Link
          href="/"
          className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full px-6 font-semibold shadow-sm transition-shadow hover:shadow-[0_8px_24px_color-mix(in_oklab,var(--primary)_22%,transparent)]")}
        >
          <House className="size-4" aria-hidden="true" />
          Back to Home
        </Link>
      </motion.div>
      <motion.div whileHover={hoverAnimation} whileTap={tapAnimation}>
        <button
          type="button"
          onClick={() => window.history.back()}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 cursor-pointer rounded-full px-6 font-semibold")}
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Go Back
        </button>
      </motion.div>
    </div>
  );
}
