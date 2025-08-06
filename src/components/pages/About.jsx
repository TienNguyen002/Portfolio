import { motion } from "framer-motion";

import { styles } from "../../styles";
import { softSkills } from "../../constants";
import { fadeIn, slideIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import Photo from "../common/Photo";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
      <div className="flex flex-col xl:flex-row xl:items-start text-white px-6 py-12 gap-10">
        {/* Left Side - Image & Contact */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="relative w-full xl:w-1/2 flex flex-col justify-center items-center"
        >
          <div className="relative">
            <Photo />
            {/* Birthday Tag */}
            <div className="absolute top-2 right-2 border border-accent bg-accent text-primary px-4 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
              18<sup>th</sup> December 2002
            </div>
          </div>
          {/* Profile image */}

          {/* Language Box */}
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-full green-pink-gradient max-w-xl mt-5 p-[1px] rounded-[20px] shadow-card hidden lg:block"
          >
            <div className=" bg-[#050816] rounded-[20px] py-5 px-6">
              <h3 className="text-accent font-extrabold text-xl mb-4">
                Language
              </h3>
              <div className="grid grid-cols-2 gap-4 text-white">
                <div>
                  <p className="text-lg font-semibold">English</p>
                  <p className="text-gray-400 text-sm mt-1">TOEIC - 770</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Vietnamese</p>
                  <p className="text-gray-400 text-sm mt-1">Native</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - About Text & Education */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full xl:w-1/2"
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My name is</p>
            <h1 className={styles.sectionInfoHeadText}>
              NGUYEN HOANG NHAT TIEN
            </h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-gray-300 leading-relaxed max-w-xl"
          >
            Motivated Software Engineer with a strong foundation in{" "}
            <b className="text-accent">React</b>,{" "}
            <b className="text-accent">.NET</b> and{" "}
            <b className="text-accent">RESTful APIs</b>. Passionate about clean
            code, UI/UX, and collaborating in Agile teams to deliver impactful
            products.
            <ul className="list-disc pl-5 mt-5">
              <h3 className="text-accent font-extrabold text-xl mb-4">
                In the short term,
              </h3>
              <li>
                Join a modern engineering team to deepen knowledge in React,
                TypeScript, and RESTful APIs.
              </li>
              <li>
                Apply Clean Architecture and DevOps practices in real-world
                systems..
              </li>
            </ul>
            <ul className="list-disc pl-5 mt-5">
              <h3 className="text-accent font-extrabold text-xl mb-4">
                In the long term,
              </h3>
              <li>
                Grow into a senior full-stack engineer with expertise in
                building scalable, high-performance web applications.
              </li>
              <li>Mentor junior developers and lead impactful projects.</li>
            </ul>
          </motion.p>

          {/* Education Box */}
          <motion.div
            variants={fadeIn("left", "spring", 0.5, 0.75)}
            className="w-full green-pink-gradient max-w-xl mt-5 p-[1px] rounded-[20px] shadow-card "
          >
            <div className=" bg-[#050816] rounded-[20px] py-5 px-6">
              <h3 className="text-accent text-xl font-bold mb-2">Education</h3>
              <div className="flex justify-between">
                <p className="text-white font-medium mb-1">Da Lat University</p>
                <p className="text-secondary font-semibold text-lg mb-1">
                  2020 - 2024
                </p>
              </div>
              <ul className="text-gray-300 list-disc ml-5">
                <li>Major in Information Technology</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.75, 0.75)}
            className="w-full green-pink-gradient max-w-xl mt-5 p-[1px] rounded-[20px] shadow-card "
          >
            <div className=" bg-[#050816] rounded-[20px] py-5 px-6">
              <h3 className="text-accent text-xl font-bold mb-2">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-3 mt-4 max-w-md">
                {softSkills.map((softSkill, index) => (
                  <span
                    key={index}
                    className="border border-accent text-white text-sm font-medium px-4 py-2 rounded-full text-center"
                  >
                    {softSkill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "spring", 1, 0.75)}
            className="w-full green-pink-gradient max-w-xl mt-5 p-[1px] rounded-[20px] shadow-card xl:hidden"
          >
            <div className=" bg-[#050816] rounded-[20px] py-5 px-6">
              <h3 className="text-accent font-extrabold text-xl mb-4">
                Language
              </h3>
              <div className="grid grid-cols-2 gap-4 text-white">
                <div>
                  <p className="text-lg font-semibold">English</p>
                  <p className="text-gray-400 text-sm mt-1">TOEIC - 770</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Vietnamese</p>
                  <p className="text-gray-400 text-sm mt-1">Native</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
