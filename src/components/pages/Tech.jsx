import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { styles } from "../../styles";
import { categories, technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { cn } from "../../utils/utils";
import { useState } from "react";
import TechnologyCard from "../common/TechnologyCard";

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = technologies.filter(
    (technology) =>
      activeCategory === "all" || technology.category === activeCategory
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>This is all my skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2 rounded-full transition-colors duration-300 capitalize mt-10 cursor-pointer",
              activeCategory === category
                ? "bg-accent text-black"
                : "border border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
            )}
          >
            {category}
          </button>
        ))}
      </div>
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
            {filteredSkills.map((tech, index) => (
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
          {filteredSkills.map((tech, index) => (
            <TechnologyCard key={tech.name} index={index} {...tech} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
