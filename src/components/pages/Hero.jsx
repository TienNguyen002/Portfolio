import { styles } from "../../styles";
import { FiDownload } from "react-icons/fi";
import Socials from "../common/Socials";
import Photo from "../common/Photo";
import mobile from "../../assets/mobile.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Nguyen Hoang Nhat Tien"],
    loop: {},
  });

  return (
    <div
      className={`relative inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col xl:flex-row items-center text-white px-6 py-12 gap-10">
        <div className="text-center xl:text-left order-2 xl:order-none pb-35 xl:w-[560px]">
          <span className="text-xl">Website Developer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br />
            <span className="text-accent">{text}</span>
            <Cursor />
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I excel at creating scalable, maintainable, and user-friendly
            full-stack web solutions,responsive web applications using React on
            the frontend and .NET Core on the backend.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href={mobile} download>
              <button className="border uppercase gap-2 cursor-pointer rounded-full flex items-center justify-between border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500 px-5 py-2.5">
                <span>Download CV </span>
                <FiDownload className="text-xl" />
              </button>
            </a>
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
