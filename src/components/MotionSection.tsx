"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function MotionSection({ children, className, ...props }: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={cn("section-spacing", className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
