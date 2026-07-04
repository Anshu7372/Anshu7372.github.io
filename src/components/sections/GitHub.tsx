"use client";

import { motion } from "framer-motion";
import { Star, GitFork, Users, BookOpen } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/personal";

export default function GitHub() {
  return (
    <section id="github" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Open Source"
          subtitle="GitHub Contributions & Activity"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* GitHub Stats Dashboard */}
          <motion.div
            className="glass-card overflow-hidden p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-white">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    @{personalInfo.githubUsername}
                  </h3>
                  <p className="text-xs text-text-muted">GitHub Developer Profile</p>
                </div>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-light hover:shadow-glow self-start md:self-auto"
              >
                Follow on GitHub
              </a>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: "Repositories", value: "6+", icon: BookOpen },
                { label: "Followers", value: "2+", icon: Users },
                { label: "Stars", value: "10+", icon: Star },
                { label: "Forks", value: "3+", icon: GitFork },
              ].map((metric, idx) => (
                <div
                  key={metric.label}
                  className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-4 text-center"
                >
                  <metric.icon size={20} className="mx-auto mb-2 text-secondary" />
                  <div className="font-display text-2xl font-bold text-text-primary">
                    {metric.value}
                  </div>
                  <div className="text-xs text-text-muted mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activity Graph Preview */}
          <motion.div
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="font-display text-base font-bold text-text-primary mb-4">
              GitHub Contribution Heatmap
            </h4>

            {/* Fake calendar heat grid to simulate a highly responsive graph */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-[3px] min-w-[640px]">
                {Array.from({ length: 48 }).map((_, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, rowIdx) => {
                      // Generate a random intensity class for visual richness
                      const val = (colIdx * 7 + rowIdx) % 11;
                      let bg = "bg-white/[0.04]";
                      if (val === 2 || val === 5) bg = "bg-primary/20";
                      else if (val === 3 || val === 7) bg = "bg-primary/50";
                      else if (val === 6) bg = "bg-primary";
                      else if (val === 8) bg = "bg-secondary";

                      return (
                        <div
                          key={rowIdx}
                          className={`h-[10px] w-[10px] rounded-[2px] ${bg} transition-colors hover:scale-125 cursor-pointer`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-text-muted mt-4">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <div className="h-[10px] w-[10px] rounded-[2px] bg-white/[0.04]" />
                <div className="h-[10px] w-[10px] rounded-[2px] bg-primary/20" />
                <div className="h-[10px] w-[10px] rounded-[2px] bg-primary/50" />
                <div className="h-[10px] w-[10px] rounded-[2px] bg-primary" />
                <div className="h-[10px] w-[10px] rounded-[2px] bg-secondary" />
              </div>
              <span>More</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
