"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl",
        "transition-all duration-500",
        hover &&
          "hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3),0_0_40px_rgba(124,58,237,0.1)]",
        hover && "hover:-translate-y-1",
        glow && "shadow-glow-sm",
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {glow && (
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
