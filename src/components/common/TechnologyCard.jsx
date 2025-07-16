import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { fadeIn } from "../../utils/motion";

const TechnologyCard = ({ index, name, icon }) => {
  return (
    <Tilt className="w-[200px] sm:w-[250px]">
      <motion.div
        key={index}
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] cursor-pointer"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#232329] rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col group"
        >
          <img
            src={icon}
            alt={name}
            className="w-16 h-16 object-contain filter grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition duration-300"
          />
          <div className="absolute -top-10 bg-white text-black text-[12px] px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            {name}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default TechnologyCard;
