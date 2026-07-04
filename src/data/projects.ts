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
  {
    id: "notebook-editor-java",
    title: "Notebook Editor in Java",
    description:
      "A desktop notebook editor built in Java for writing, editing, saving, and managing text notes with a simple user interface.",
    longDescription:
      "Developed a Java-based notebook editor that supports creating, editing, saving, and opening text documents through a clean desktop interface. The project focuses on file handling, event-driven programming, and modular Java design for a practical productivity tool.",
    techStack: ["Java", "Swing", "AWT", "File Handling", "OOP"],
    highlights: [
      "Built a desktop text editor using Java Swing and AWT",
      "Implemented create, open, edit, save, and clear document workflows",
      "Used event-driven programming for menu actions and editor controls",
      "Applied object-oriented design for maintainable application logic",
    ],
    github: "https://github.com/Anshu7372",
    image: "/images/projects/notebook-editor.svg",
    category: "Java Application",
  },
  {
    id: "blood-donation-management-system",
    title: "Blood Donation Management System",
    description:
      "A management system for organizing donor records, blood group availability, requests, and donation-related operations.",
    longDescription:
      "Created a Blood Donation Management System to streamline donor registration, blood group tracking, recipient requests, and administrative record management. The project emphasizes structured data handling, searchable records, and practical workflows for healthcare support systems.",
    techStack: ["Java", "SQL", "DBMS", "OOP", "CRUD"],
    highlights: [
      "Designed donor, recipient, and blood inventory management workflows",
      "Implemented CRUD operations for reliable record handling",
      "Added searchable blood group and donor availability features",
      "Structured the system for practical administrative use",
    ],
    github: "https://github.com/Anshu7372",
    image: "/images/projects/blood-donation.svg",
    category: "Management System",
  },
];
