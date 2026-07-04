import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { personalInfo } from "@/data/personal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | AI Researcher & Machine Learning Engineer`,
  description: personalInfo.summary,
  keywords: [
    "Sadashiv Kumar",
    "AI Researcher",
    "Machine Learning Engineer",
    "Deep Learning",
    "Operations Research",
    "NIT Durgapur",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased bg-background text-text-primary">
        {/* Custom cursor follower */}
        <CustomCursor />

        {/* Top viewport scroll progress */}
        <ScrollProgress />

        {/* Global background noise texture */}
        <div className="noise-overlay" />

        {/* Global navigation header */}
        <Navbar />

        {/* Main application wrapper */}
        <main className="relative min-h-screen">{children}</main>

        {/* Global navigation footer */}
        <Footer />
      </body>
    </html>
  );
}
