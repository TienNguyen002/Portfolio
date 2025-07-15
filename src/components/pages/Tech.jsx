import { delay, motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { styles } from "../../styles";
import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const TechnologyCard = ({ index, name, icon }) => (
  <Tilt className="w-[200px] sm:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
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

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>This is all my skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className="w-full h-full">
        {/* For small screens: Swiper slider */}
        <div className="block md:hidden mt-10 justify-center">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={tech.name}>
                <TechnologyCard
                  index={index}
                  name={tech.name}
                  icon={tech.icon}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* For medium+ screens: Grid */}
        <div className="hidden sm:flex mt-10 flex-wrap gap-10 justify-center">
          {technologies.map((tech, index) => (
            <TechnologyCard key={tech.name} index={index} {...tech} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "work");
