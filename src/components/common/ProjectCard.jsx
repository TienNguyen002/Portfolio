import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { fadeIn } from "../../utils/motion";

import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-0 right-0 flex flex-col items-end gap-3 m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-accent"
            >
              <FaGithub className="w-1/2 h-1/2 object-contain" />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-accent"
            >
              <FaCode />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-accent font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color} border p-3 border-${tag.color} rounded-[20px] capitalize cursor-default`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
