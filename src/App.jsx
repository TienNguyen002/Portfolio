import { useState, useRef, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { FaArrowUp } from "react-icons/fa";

import {
  About,
  Contact,
  Service,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";

import "./index.css";

const App = () => {
  const buttonRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShow(true);
        if (buttonRef.current) {
          buttonRef.current.style.bottom = "0";
        }
      } else {
        setShow(false);
      }

      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        if (buttonRef.current) {
          buttonRef.current.style.bottom = "17%";
        }
        // buttonRef.current.style.bottom = "8%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Service />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        {show ? (
          <button
            ref={buttonRef}
            onClick={goToTop}
            className="fixed bottom-[30px] right-[20px] px-[15px] py-[15px] text-accent rounded-full border border-accent hover:bg-accent hover:text-primary cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center"
          >
            <FaArrowUp />
          </button>
        ) : null}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
