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
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, subtitle, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    glareColor="#aaa6c3"
    className="w-full h-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="green-pink-gradient shadow-card w-full h-full rounded-[24px] p-[1px]"
    >
      <SpotlightCard
        spotlightColor="rgba(0, 206, 168, 0.18)"
        className="bg-tertiary flex min-h-[300px] h-full flex-col items-center justify-evenly rounded-[24px] px-6 py-8"
      >
        <img
          src={icon}
          alt={title}
          className="h-20 w-20 object-contain"
        />

        <div className="flex flex-col items-center text-center">
          <h3 className="text-center text-[21px] font-bold text-white leading-[28px]">
            {title}
          </h3>
          {subtitle && (
            <p className="text-secondary mt-2.5 text-xs font-semibold tracking-wide">
              {subtitle}
            </p>
          )}
        </div>
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
