"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { MapPin, GraduationCap, Briefcase, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/personal";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Projects Completed", value: 4, icon: Briefcase, suffix: "+" },
  { label: "Certifications", value: 7, icon: Award, suffix: "+" },
  { label: "Research Areas", value: 5, icon: GraduationCap, suffix: "" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative aurora-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Driven by Curiosity, Powered by Research" />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Profile Visual */}
          <motion.div
            className="flex items-center justify-center lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 blur-2xl" />
              
              {/* Photo container */}
              <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-white/[0.08] sm:h-80 sm:w-80">
                <Image
                  src="/images/profile/sadashiv-kumar.jpg"
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-primary/30 bg-primary/5" />
                <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full border border-secondary/30 bg-secondary/5" />
              </div>

              {/* Location badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-full border border-white/[0.1] bg-background/80 backdrop-blur-xl px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <MapPin size={14} className="text-primary" />
                <span className="text-sm text-text-secondary">{personalInfo.location}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-text-secondary">
              {personalInfo.summary}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <stat.icon size={20} className="mx-auto mb-2 text-primary" />
                  <div className="font-display text-2xl font-bold text-text-primary">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Soft skills */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="mb-3 font-display text-sm font-medium uppercase tracking-wider text-text-muted">
                Core Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Analytical Thinking",
                  "Research-Oriented",
                  "Problem Solving",
                  "Technical Communication",
                  "Collaborative",
                  "Quick Learner",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
