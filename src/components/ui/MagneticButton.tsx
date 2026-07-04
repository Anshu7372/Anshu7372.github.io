"use client";

import { useRef, useCallback, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
  size = "md",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    ref.current.style.transition = "transform 0.1s ease-out";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  }, []);

  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 font-medium rounded-full",
    "transition-all duration-300 cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    {
      "bg-primary text-white hover:bg-primary-light hover:shadow-glow": variant === "primary",
      "border border-white/20 text-text-primary hover:border-primary/50 hover:bg-white/[0.04]":
        variant === "secondary",
      "text-text-secondary hover:text-text-primary hover:bg-white/[0.04]":
        variant === "ghost",
    },
    className
  );

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      whileTap={{ scale: 0.95 }}
    >
      {href ? (
        <a
          href={href}
          className={baseClasses}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={baseClasses} aria-label={ariaLabel}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
