"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation, personalInfo } from "@/data/personal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navigation.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.a
            href="#home"
            className="font-display text-xl font-bold tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">{personalInfo.firstName}</span>
            <span className="text-text-primary">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.1]"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Resume Button */}
          <motion.a
            href="/resume/sadashiv-kumar-resume.pdf"
            download
            className="hidden rounded-full bg-primary/10 border border-primary/30 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:border-primary/50 md:inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 rounded-lg p-2 text-text-primary md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex h-full flex-col items-center justify-center gap-6">
              {navigation.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="font-display text-2xl font-medium text-text-secondary transition-colors hover:text-text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
