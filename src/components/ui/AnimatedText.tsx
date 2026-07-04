"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  type?: "word" | "character";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  staggerChildren = 0.03,
  type = "word",
}: AnimatedTextProps) {
  const items = type === "word" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ marginRight: type === "word" ? "0.3em" : undefined }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}
