import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 md:gap-14 max-w-6xl mx-auto py-10">
      {technologies.map((technology) => (
        <div
          className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 cursor-grab active:cursor-grabbing"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
