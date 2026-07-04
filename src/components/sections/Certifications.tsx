"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Network,
  MessageSquare,
  Lightbulb,
  Sparkles,
  Database,
  Award,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  network: Network,
  messageSquare: MessageSquare,
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  database: Database,
  cpu: Cpu,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional Training & Credentials"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.id}
                className="glass-card group flex flex-col justify-between p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-display text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-xs text-text-secondary">
                    {cert.issuer} • {cert.platform}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs text-text-muted">
                  <span>Credential Status: Active</span>
                  <span className="font-mono text-primary font-medium">{cert.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
