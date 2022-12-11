import React from "react";
import nahidul from "../../asset/nahidul.jpg";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div id="home" className="hero lg:mt-20">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <img
            src={nahidul}
            className="w-52 rounded-full shadow-2xl lg:ml-32"
            alt=""
          />
          <div>
            <h1 className="font-semibold">Hi, This is</h1>
            <h3 className="text-xl text-primary">Md. Nahidul Hasan</h3>
            <h4 className="py-2 text-5xl font-bold">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
                options={{
                  strings: [
                    "React Developer",
                    "JavaScript Developer",
                    "Front End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <p className="mb-3 font-semibold">
              I am a Front End/Full-Stack(MERN) web developer with 6 months{" "}
              <br /> of learning/working experience. I love to work with <br />{" "}
              logic and build it by programming.
            </p>
            <button className="btn btn-primary">
              <a
                target={`_blank`}
                href="https://drive.google.com/file/d/1lQNC_QNCKTdAr4Bq5XyKl9nf0xQCqlKZ/view?usp=sharing"
              >
                See Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
