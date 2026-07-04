"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Loading from "@/app/loading";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Research from "@/components/sections/Research";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import GitHub from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";

export default function Home() {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  return (
    <>
      {/* Intro loading animation */}
      <Loading />

      {/* Hero Landing */}
      <Hero />

      {/* Main content sections */}
      <div className="relative z-10 space-y-16 md:space-y-24">
        {/* About Info */}
        <About />

        {/* Education Timeline */}
        <Education />

        {/* Research Interests */}
        <Research />

        {/* Bento/Detail Projects Grid */}
        <Projects />

        {/* Technical Competencies */}
        <Skills />

        {/* Certifications Card list */}
        <Certifications />

        {/* Achievements list */}
        <Achievements />

        {/* GitHub Statistics & Graph */}
        <GitHub />

        {/* Premium Contact form */}
        <Contact />
      </div>
    </>
  );
}
