"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop with a mouse
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = () => {
      const hoverElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, [data-cursor='pointer']"
      );
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Delay to catch dynamically rendered elements
    const timer = setTimeout(handleElementHover, 1000);

    // Use MutationObserver to catch new elements
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", duration: 0, ease: "linear" }}
      >
        <div className="h-2 w-2 rounded-full bg-white" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998]"
        animate={{
          x: position.x - (isHovering ? 24 : 16),
          y: position.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.5 }}
      >
        <div
          className={`h-full w-full rounded-full border transition-all duration-300 ${
            isHovering
              ? "border-primary/60 bg-primary/10"
              : "border-white/20 bg-transparent"
          }`}
        />
      </motion.div>
    </>
  );
}
