"use client";

import { motion } from "framer-motion";
import { Star, Award, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";

const iconMap: Record<string, LucideIcon> = {
  star: Star,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Achievements" subtitle="Awards & Milestones" />

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Award;
            return (
              <motion.div
                key={achievement.id}
                className="glass-card flex gap-6 p-6 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 border border-secondary/20 text-secondary">
                  <Icon size={24} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-text-primary">
                    {achievement.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
