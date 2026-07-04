"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, MapPin, Phone } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/personal";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Contact" subtitle="Let&apos;s Build Something Extraordinary" />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Info Details card */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-text-primary">
                Reach Out Directly
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                I am interested in scientific research collaborations, ML engineering opportunities, and graduate school discussions. Feel free to send a message.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 border border-secondary/20 text-secondary">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Phone</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-medium text-text-secondary hover:text-secondary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Location</div>
                  <span className="text-sm font-medium text-text-secondary">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Connect buttons */}
            <div className="space-y-3">
              <h4 className="font-display text-sm font-bold text-text-primary uppercase tracking-wider">
                Follow My Profiles
              </h4>
              <div className="flex gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-text-secondary transition-all hover:text-primary hover:border-primary/50 hover:bg-primary/10"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-text-secondary transition-all hover:text-primary hover:border-primary/50 hover:bg-primary/10"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass-card p-6 md:p-8">
              {submitted ? (
                <motion.div
                  className="text-center py-12 space-y-4"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-text-secondary max-w-sm mx-auto">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-text-secondary">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-text-secondary">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-text-secondary">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Your message goes here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-medium text-white transition-all hover:bg-primary-light hover:shadow-glow disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
