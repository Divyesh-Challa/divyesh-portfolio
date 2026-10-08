import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { SpotlightCard } from "../ui";

interface IServiceCard {
  index: number;
  title: string;
  subtitle?: string;
  tags?: string[];
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({
  index,
  title,
  subtitle,
  tags,
  icon,
}) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    glareColor="#aaa6c3"
    className="w-full h-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="green-pink-gradient shadow-card w-full h-full rounded-[24px] p-[1px]"
    >
      <SpotlightCard
        spotlightColor="rgba(0, 206, 168, 0.22)"
        className="bg-tertiary flex min-h-[310px] h-full flex-col items-center justify-between rounded-[24px] px-6 py-8"
      >
        <img
          src={icon}
          alt={title}
          className="h-20 w-20 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
        />

        <div className="flex flex-col items-center text-center my-2">
          <h3 className="text-center text-[20px] font-bold text-white leading-[26px]">
            {title}
          </h3>
          {subtitle && (
            <p className="text-secondary mt-2 text-xs font-semibold tracking-wide">
              {subtitle}
            </p>
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-black-100/70 border border-white/10 rounded-full px-2.5 py-0.5 text-[11px] font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </SpotlightCard>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-4xl text-[19px] sm:text-[20px] leading-[36px]"
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-full">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
