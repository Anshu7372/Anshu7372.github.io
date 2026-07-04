"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { personalInfo, socialLinks } from "@/data/personal";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  mail: <Mail size={18} />,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-background-light/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="font-display text-2xl font-bold">
              <span className="gradient-text">{personalInfo.firstName}</span>
              <span className="text-text-primary"> {personalInfo.lastName}</span>
            </span>
            <p className="mt-2 text-sm text-text-muted">
              AI Researcher & Machine Learning Engineer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-text-secondary transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </motion.a>
            ))}
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-sm text-text-secondary transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/10"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            Back to top
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Copyright */}
        <motion.p
          className="text-center text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} {personalInfo.name}. Built with{" "}
          <Heart size={14} className="inline text-primary" fill="currentColor" /> and passion for AI.
        </motion.p>
      </div>
    </footer>
  );
}
