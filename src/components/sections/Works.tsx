import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full">
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareColor="#aaa6c3"
        className="w-full h-full"
      >
        <div className="bg-tertiary w-full h-full rounded-[24px] p-8 flex flex-col justify-between shadow-card border border-white/5 hover:border-violet-500/30 transition-all">
          <div>
            <div className="relative h-[280px] sm:h-[340px] w-full overflow-hidden rounded-[20px] bg-black/40">
              <img
                src={image}
                alt={name}
                className="h-full w-full rounded-[20px] object-cover object-top"
              />
              <div className="absolute inset-0 m-4 flex justify-end gap-2.5 pointer-events-none">
                {liveLink && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(liveLink, "_blank");
                    }}
                    className="pointer-events-auto group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/90 shadow-xl border border-white/20 hover:border-emerald-400 hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all"
                    title="View Live Demo"
                  >
                    <svg
                      className="h-5 w-5 fill-none stroke-white stroke-[2.2] text-white group-hover:scale-105 transition-transform"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </button>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(sourceCodeLink, "_blank");
                  }}
                  className="pointer-events-auto group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/90 shadow-xl border border-white/20 hover:border-violet-400 hover:bg-[#915EFF] hover:scale-110 active:scale-95 transition-all"
                  title="View GitHub Repository"
                >
                  <svg
                    className="h-6 w-6 fill-white text-white group-hover:scale-105 transition-transform"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[26px] font-bold text-white tracking-tight">{name}</h3>
                {liveLink && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(liveLink, "_blank");
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Demo
                  </button>
                )}
              </div>
              <p className="text-secondary mt-3 text-[15px] sm:text-[16px] leading-[26px]">{description}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[15px] font-medium ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-4 max-w-4xl text-[19px] sm:text-[20px] leading-[36px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
