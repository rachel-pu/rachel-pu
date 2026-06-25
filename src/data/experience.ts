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
    title: "WiNG.it",
    company: "University of Florida",
    duration: "August 2024 - Present",
    description: "Scaling WiNG.it to a multi-feature career prep platform with Next.js and Firebase, deploying scalable infrastructure aiming to support 2,000+ users at UF. Integrating OpenAI API & Gemini to improve feedback and realism, using predictive models to analyze learning and suggest resources.",
    links: [
      { label: "GitHub", url: "https://github.com/rachel-pu/WiNGit" },
    ],
  },
  {
    title: "AI Undergraduate Researcher",
    company: "Florida Institute for National Security (FINS)",
    duration: "March 2024 - May 2025",
    description: "Conducted XAI graduate research and co-developing framework benchmarking 180+ explainable methods to enhance user clarity. Engineered a recommender system with Python, SciPy & HiPerGator, integrated with an XAI database for improved interpretability.",
    links: [
      { label: "GitHub", url: "https://github.com/rachel-pu" },
    ],
  },
];
