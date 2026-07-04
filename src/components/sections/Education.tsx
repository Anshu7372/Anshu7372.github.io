"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="Academic Journey" />

        <div className="relative">
          {/* Timeline line - centered on desktop, left on mobile */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  >
                    <GraduationCap size={18} className="text-primary" />
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="glass-card group p-6">
                    {/* Period badge */}
                    <div className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                      {edu.period}
                    </div>

                    <h3 className="font-display text-lg font-bold text-text-primary">
                      {edu.institution}
                    </h3>
                    <p className="mt-1 text-secondary font-medium">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-text-muted">{edu.field}</p>

                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {edu.description}
                    </p>

                    {/* Grade */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                        <span className="text-xs text-text-muted">{edu.gradeType}</span>
                        <span className="font-display text-lg font-bold gradient-text">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
