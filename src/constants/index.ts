import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  threejs,
  python,
  smartcart,
  amazon_synthesizer,
  trackr,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Python & FastAPI Backends",
    icon: backend,
  },
  {
    title: "React & TypeScript Interfaces",
    icon: web,
  },
  {
    title: "Chrome Extensions (MV3)",
    icon: mobile,
  },
  {
    title: "Algorithmic Cost Optimization",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences: TExperience[] = [];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Trackr",
    description:
      "End-to-end career platform & pipeline accelerator for university tech recruiting. Features real-time Canadian tech co-op job ingestion, an interactive Kanban board with optimistic updates, ATS-tailored Jake's Resume Studio with LaTeX export, AI cover letter generator, and voice-integrated STAR interview simulator.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
      {
        name: "postgresql-pgvector",
        color: "pink-text-gradient",
      },
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
    ],
    image: trackr,
    sourceCodeLink: "https://github.com/Divyesh-Challa/Trackr",
    liveLink: "https://trackr-portal.vercel.app",
  },
  {
    name: "SmartCart",
    description:
      "Algorithmic grocery intelligence and combinatorial multi-store basket optimizer engineered for Canadian supermarket price disparity. Calculates real-world Edmonton fuel economics ($1.42/L · 9.5 L/100km) across 3 distinct purchasing plans and features an interactive weekly digital flyer station.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "combinatorics",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: smartcart,
    sourceCodeLink: "https://github.com/Divyesh-Challa/SmartCart",
    liveLink: "https://smartcart-9djq.onrender.com",
  },
  {
    name: "Amazon Review Synthesizer",
    description:
      "AI-powered Chrome extension (Manifest V3) and FastAPI microservice that transforms cluttered, sponsored customer reviews into objective product intelligence in under 2.5 seconds with an objective Reliability Score (0–10), Pros & Cons matrix, and verified defect callouts.",
    tags: [
      {
        name: "chrome-extension",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "llm-nlp",
        color: "pink-text-gradient",
      },
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
    ],
    image: amazon_synthesizer,
    sourceCodeLink: "https://github.com/Divyesh-Challa/amazon-review-synthesizer",
  },
];

export { services, technologies, experiences, testimonials, projects };
