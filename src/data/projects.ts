import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection using Machine Learning",
    description:
      "An end-to-end machine learning pipeline for breast cancer detection using scientific datasets with advanced feature engineering and model evaluation.",
    longDescription:
      "Built a comprehensive machine learning system for breast cancer detection that performs data preprocessing and feature engineering on scientific datasets. The project implements model training with performance evaluation, designs scientific data analysis workflows using Python, and creates detailed visualizations for result interpretation and analysis.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    highlights: [
      "Performed data preprocessing and feature engineering on scientific datasets",
      "Implemented model training and performance evaluation",
      "Designed scientific data analysis workflows using Python",
      "Created visualizations for result interpretation and analysis",
    ],
    github: "https://github.com/Anshu7372",
    image: "/images/projects/breast-cancer.webp",
    category: "Machine Learning",
  },
  {
    id: "billing-software",
    title: "Billing Software System",
    description:
      "A comprehensive billing management application built with Java using object-oriented programming principles with modular software design.",
    longDescription:
      "Developed a full-featured billing management application using Java with object-oriented programming concepts. The system handles data management, transaction processing, and implements modular software design patterns. Features a custom-designed user interface built with core Java principles.",
    techStack: ["Java", "OOP", "SQL", "Swing"],
    highlights: [
      "Developed billing management application using Java with OOP concepts",
      "Implemented data handling, transaction processing, and modular software design",
      "Designed user interface and logic using core Java principles",
    ],
    github: "https://github.com/Anshu7372",
    image: "/images/projects/billing-system.webp",
    category: "Software Engineering",
  },
];
