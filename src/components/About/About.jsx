import React from "react";
import nahidul from '../../asset/nahidul.jpg';

const About = () => {
  return (
   <div className=" lg:mt-40">
     <div className="hero">
      <div className="hero-content flex-col-reverse lg:flex-row">
        <img
          src={nahidul}
          className="rounded-lg shadow-2xl lg:w-64"
          alt=""
        />
        <div className="lg:w-1/2 lg:ml-16 ">
          <h1 className="text-5xl font-bold">INFORMATION ABOUT ME</h1>
          <p className="py-6">
          Highly dedicated & creative MERN familiar, Front End Developer. Always passionate about new information & technologies. Building easy-to-use, user-friendly websites, and applications is truly a passion of mine. I am an expert in HTML, CSS, Bootstrap, Tailwind, JavaScripts, React, Firebase, ExpressJs, NodeJs, and MongoDB.In addition to my knowledge, I consider myself a quick learner, self-motivated, responsible, and disciplined person who can work under pressure and solve problems in critical situations with analytical knowledge and the latest technology.
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default About;
