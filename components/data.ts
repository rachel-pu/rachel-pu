export interface Project {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  logo: string;
  projectImage: string;
  url: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "AI Undergraduate Researcher",
    company: "Florida Institute for National Security (FINS)",
    duration: "March 2024 - May 2025",
    description: "Conducted XAI graduate research and co-developing framework benchmarking 180+ explainable methods to enhance user clarity. Engineered a recommender system with Python, SciPy & HiPerGator, integrated with an XAI database for improved interpretability.",
    technologies: ["Python", "SciPy", "HiPerGator", "XAI", "Machine Learning"],
    logo: "experience/logos/uf-white.png",
    projectImage: "experience/XAI-research.jpg",
    url: "#",
    color: "#34344A" 
  },
  {
    title: "Engineering Intern",
    company: "United Parcel Service (UPS)",
    duration: "June 2024 - August 2024",
    description: "Developed a Python postal segmentation application, reducing processing time for 400,000+ unique country code records. Engineered a user-friendly GUI with Tkinter & a backend using Pandas, increasing output efficiency by over 95%.",
    technologies: ["Python", "Tkinter", "Pandas", "GUI Development", "Data Processing"],
    logo: "experience/logos/ups-logo.svg",
    projectImage: "experience/ups-singapore.jpg",
    url: "#",
    color: "#6088a1ff"
  },
    {
    title: "SWE Undergraduate Researcher",
    company: "University of Florida",
    duration: "August 2024 - Present",
    description: "Scaling WiNG.it to a multi-feature career prep platform with Next.js and Firebase, deploying scalable infrastructure aiming to support 2,000+ users at UF. Integrating OpenAI API & Gemini to improve feedback and realism, using predictive models to analyze learning and suggest resources.",
    technologies: ["Next.js", "Firebase", "OpenAI API", "Gemini", "TypeScript"],
    logo: "experience/logos/uf-white.png",
    projectImage: "experience/wing-it-project.png",
    url: "#",
    color: "#4e668bff" 
  },
    {
    title: "Software Engineering Intern",
    company: "Datadog",
    duration: "May 2025 - August 2025",
    description: "Engineered a scalable overlay system in TypeScript and Go to visualize 50M+ vulnerability findings across 50K+ AWS EC2 instances. Optimized Cloudcraft's resource queries, reducing query time by 99% and storage by 98%. Enabled AWS Bedrock resource visualization in WebGL for enterprise cloud accounts.",
    technologies: ["TypeScript", "Go", "PostgreSQL"],
    logo: "experience/logos/datadog-white.png",
    projectImage: "experience/cloudcraft-vulnerabilities.avif",
    url: "https://docs.datadoghq.com/datadog_cloudcraft/overlays/#investigate-vulnerabilities",
    color: "#544692ff"
  },
]