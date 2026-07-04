"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          subtitle="Core Expertise & Technical Proficiencies"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.category}
              className="glass-card p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="font-display text-xl font-bold text-text-primary">
                {category.category}
              </h3>
              <p className="mt-1 text-xs text-text-muted mb-6">
                {category.description}
              </p>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-text-secondary">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-primary">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 w-full rounded-full bg-white/[0.04] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
