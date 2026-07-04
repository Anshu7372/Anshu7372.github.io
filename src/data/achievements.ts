import { Achievement, ResearchInterest } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "hackerrank-python",
    title: "5-Star Badge in Python Programming",
    description:
      "Achieved the highest rating (5 stars) in Python programming on HackerRank, demonstrating advanced problem-solving and coding proficiency.",
    icon: "star",
  },
  {
    id: "gate-2025",
    title: "GATE 2025 (Computer Science)",
    description:
      "Top 91% Performance Nationwide. Successfully qualified GATE 2025 in Computer Science & Information Technology, achieving a 91 percentile while demonstrating strong analytical thinking, problem-solving ability, and a solid foundation in core Computer Science subjects.",
    icon: "award",
  },
];

export const researchInterests: ResearchInterest[] = [
  {
    title: "Scientific Data Analysis",
    description:
      "Applying computational methods to extract meaningful insights from complex scientific datasets across various domains.",
    icon: "barChart3",
  },
  {
    title: "Machine Learning",
    description:
      "Developing and optimizing ML algorithms for predictive modelling, classification, and pattern recognition tasks.",
    icon: "brain",
  },
  {
    title: "Deep Learning",
    description:
      "Exploring neural network architectures for solving complex problems in computer vision, NLP, and beyond.",
    icon: "layers",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Researching intelligent systems that can learn, reason, and make decisions from data-driven approaches.",
    icon: "sparkles",
  },
  {
    title: "Optimization Methods",
    description:
      "Studying mathematical optimization techniques for improving ML model performance and solving engineering problems.",
    icon: "target",
  },
];
