import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { styles } from "../../styles";
import { SectionWrapper } from "./../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import ProjectCard from "../common/ProjectCard";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>This are all my projects so far</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1, // Mobile
            },
            640: {
              slidesPerView: 2, // Small tablets
            },
            1024: {
              slidesPerView: 3, // Desktops
            },
          }}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title}>
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
