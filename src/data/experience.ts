export interface ExperienceLink {
  label: string;
  url: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  links: ExperienceLink[];
}

export const experiences: Experience[] = [
  {
    title: "HireGator",
    company: "University of Florida",
    duration: "August 2024 - Present",
    description: "AI-powered platform for students to practice interviews and networking with personalized feedback.",
    links: [
      { label: "Website", url: "https://hiregator.org" },
    ],
  },
  {
    title: "XAI Research Framework",
    company: "Florida Institute for National Security (FINS)",
    duration: "Mar 2024 - May 2025",
    description: "Benchmarked 180+ explainability methods and built a recommender system with Python and HiPerGator.",
    links: [],
  },
];
