"use client";

import { motion } from "framer-motion";
import { BarChart3, Brain, Layers, Sparkles, Target, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { researchInterests } from "@/data/achievements";

const iconMap: Record<string, LucideIcon> = {
  barChart3: BarChart3,
  brain: Brain,
  layers: Layers,
  sparkles: Sparkles,
  target: Target,
};

export default function Research() {
  return (
    <section id="research" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Research Interests"
          subtitle="Exploring the Frontiers of AI & Optimization"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((interest, index) => {
            const Icon = iconMap[interest.icon] || Sparkles;
            return (
              <motion.div
                key={interest.title}
                className="glass-card group p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="font-display text-xl font-bold text-text-primary transition-colors group-hover:text-primary">
                  {interest.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {interest.description}
                </p>

                {/* Decorative background gradient line */}
                <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
