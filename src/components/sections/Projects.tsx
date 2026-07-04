"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/BrandIcons";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Featured Engineering & ML Endeavors"
        />

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Image Preview Container */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                  {/* Aspect ratio container */}
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image.replace(".webp", ".png")}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                  </div>
                </div>
              </div>

              {/* Text / Info Container */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-xs font-medium text-secondary">
                  {project.category}
                </div>

                <h3 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                  {project.title}
                </h3>

                <p className="text-base text-text-secondary leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Problem, Solution, Results Highlights */}
                <div className="space-y-3">
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-text-muted">
                    Key Highlights & Impact
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 text-xs text-text-secondary font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-text-primary transition-all hover:bg-white/[0.06] hover:border-primary/50"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-light hover:shadow-glow"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
