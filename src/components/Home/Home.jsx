import React from "react";
import nahidul from "../../asset/nahidul.jpg";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <div className="hero lg:mt-20">
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
          Front End Developer
          </h4>
          <p className="mb-3 font-semibold">I am a Front End/Full-Stack(MERN) web developer with 6 months <br /> of learning/working experience. I love to work with <br /> logic and build it by programming.</p>
          <button className="btn btn-primary"><a target={`_blank`} href="https://drive.google.com/file/d/1lQNC_QNCKTdAr4Bq5XyKl9nf0xQCqlKZ/view?usp=sharing">See Resume</a></button>
        </div>
      </div>
    </div>
    <About></About>
    <Contact></Contact>
    </>
  );
};

export default Home;
