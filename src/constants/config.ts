type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: { span: string; placeholder: string };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Divyesh Challa",
    fullName: "Divyesh Challa",
    email: "divyeshchallavgr@gmail.com",
  },
  hero: {
    name: "Divyesh Challa",
    p: [
      "I build high-concurrency Go & Python backends, modern",
      "Next.js web applications, and applied AI systems.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content:
        "I am a Computing Science student at the University of Alberta specializing in high-concurrency backends, modern full-stack web applications, and applied AI systems. My work spans building Trackr (a high-concurrency career accelerator with Go, Next.js 15, and pgvector), SmartCart (an algorithmic multi-store grocery optimizer solving combinatorial basket economics and fuel routing), and Amazon Review Synthesizer (an AI Chrome MV3 extension extracting deep review sentiment). Skilled in Go, Python, TypeScript, and vector databases, I build resilient software that solves real-world challenges with algorithmic precision.",
    },
    experience: {
      p: "What I have done so far",
      h2: "Experience & Education.",
    },
    feedbacks: {
      p: "What collaborators say",
      h2: "Recommendations.",
    },
    works: {
      p: "My Work",
      h2: "Projects.",
      content:
        "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
    },
  },
};
