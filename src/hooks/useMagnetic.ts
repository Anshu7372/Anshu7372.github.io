"use client";

import { useRef, useCallback } from "react";

export function useMagnetic(strength: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 0.1s ease-out";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave, handleMouseEnter };
}
