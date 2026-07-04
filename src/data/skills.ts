import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Machine Learning & AI",
    description: "Core ML/AI frameworks and concepts",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 75 },
      { name: "Data Analysis", level: 90 },
      { name: "Scikit-learn", level: 85 },
      { name: "Computer Vision", level: 70 },
      { name: "NLP", level: 65 },
    ],
  },
  {
    category: "Programming Languages",
    description: "Languages I write production code in",
    skills: [
      { name: "Python", level: 92 },
      { name: "Java", level: 75 },
      { name: "C", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Libraries & Tools",
    description: "Data science and development ecosystem",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 90 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 80 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Git", level: 75 },
    ],
  },
  {
    category: "Core Concepts",
    description: "Foundational knowledge areas",
    skills: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Statistics", level: 85 },
      { name: "Mathematics", level: 85 },
      { name: "Optimization Methods", level: 80 },
      { name: "Database Programming", level: 78 },
    ],
  },
];
