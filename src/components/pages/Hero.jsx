import { styles } from "../../styles";
import { FiDownload } from "react-icons/fi";
import Socials from "../common/Socials";
import Photo from "../common/Photo";

const Hero = () => {
  return (
    <div
      className={`relative inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none pb-35">
          <span className="text-xl">Website Developer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br />{" "}
            <span className="text-accent">Nguyen Hoang Nhat Tien</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I excel at crafting elegent digital experiences and I am proficient
            in various programming languages and technologies
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <button className="border uppercase gap-2 cursor-pointer rounded-full flex items-center justify-between border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500 px-5 py-2.5">
              <span>Download CV </span>
              <FiDownload className="text-xl" />
            </button>
            <div className="mb-8 xl:mb-0 ">
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
