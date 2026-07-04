export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  highlights: string[];
  github?: string;
  liveDemo?: string;
  image: string;
  category: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
  gradeType: string;
  description: string;
  logo?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  date: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ResearchInterest {
  title: string;
  description: string;
  icon: string;
}
