"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
        <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {title}
        </span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
      </motion.div>

      {subtitle && (
        <motion.h2
          className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.h2>
      )}

      <motion.div
        className={`mt-6 h-px w-24 bg-gradient-to-r from-primary via-secondary to-accent ${
          align === "center" ? "mx-auto" : ""
        }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}
