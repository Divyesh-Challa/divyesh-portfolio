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
        "I'm a Computing Science student at the University of Alberta who genuinely loves the craft of building software. Whether I'm architecting resilient backend systems, polishing the subtle interactions that make a user interface feel effortless, or exploring practical AI tools, I treat engineering as a balance of solid fundamentals and thoughtful design. I care deeply about what happens under the hood—writing code that is clean, performant, and built to last—rather than just stitching together quick solutions. For me, the most rewarding part of development is taking an open-ended, complex problem and turning it into software that is sturdy behind the scenes and intuitive for real people. Outside of the code itself, I place a high value on curiosity, open collaboration, and working alongside teams that take genuine pride in their work, and I'm always eager to tackle challenging problems that create a meaningful impact.",
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
