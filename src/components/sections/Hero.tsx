"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary gradient orb */}
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-secondary/15 blur-[100px]"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Accent orb */}
        <motion.div
          className="absolute left-1/2 top-1/3 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[80px]"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -30, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-text-secondary">
            Open to Research Collaborations & Opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
            <span className="text-text-primary">Hi, I&apos;m </span>
            <span className="gradient-text-shimmer">{personalInfo.name}</span>
          </h1>
        </motion.div>

        {/* Animated role text */}
        <motion.div
          className="mt-6 h-12 sm:h-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              className="font-display text-xl font-medium text-secondary sm:text-2xl lg:text-3xl"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5 }}
            >
              {personalInfo.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-text-secondary sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <MagneticButton
            href="#projects"
            variant="primary"
            size="lg"
            ariaLabel="View my work"
          >
            <ExternalLink size={18} />
            View My Work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            variant="secondary"
            size="lg"
            ariaLabel="Get in touch"
          >
            <Mail size={18} />
            Get in Touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-text-secondary"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.button>
      </motion.div>
    </section>
  );
}
