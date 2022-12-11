import React from "react";
import car from "../../asset/next-car.png";
import food from "../../asset/for-food.png";
import conquer from "../../asset/conquerDev.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      projectCategory : 'car',
      projectImg: car,
      projectName: "Next car for you",
      describe:
        "Used car buying and selling platforms Implements Dashboard/Admin/Payments.When a login seller he/she can add a product and see his products also the seller can Advertise.And Admin can delete any buyer and seller.",
      link: "https://next-car-for-you.web.app/",
      gitHub: "https://github.com/NahidulNoman/next-car-for-you-client",
      technology: [
        "Tailwind",
        "React",
        "MongoDB",
        "Firebase",
        "Node.js",
        "Express.js",
      ],
    },
    {
      id: 2,
      projectCategory : 'food',
      projectImg: food,
      projectName: "Swipe for food",
      describe:
        "A complete Food service and review site with a Google login feature.CRUD operation implements.People can also review any food and send their feedback.Users can also add their products and delete added products.",
      link: "https://swipe-for-food-ee0f4.web.app/",
      gitHub: "https://github.com/NahidulNoman/swipe-for-food-client",
      technology: [
        "React-Bootstrap",
        "React",
        "MongoDB",
        "Firebase",
        "Node.js",
        "Express.js",
      ],
    },
    {
      id: 3,
      projectCategory : 'conquer',
      projectImg: conquer,
      projectName: "ConQuer.Dev",
      describe:
        "This is a learning platform web application.Users can see course details and download course information in PDF format.When any user wants to get premium access user has to log in first.",
      link: "https://conquer-programming.web.app/",
      gitHub: "https://github.com/NahidulNoman/conquer-programming-client",
      technology: [
        "React-Bootstrap",
        "React",
        "JavaScript",
        "Firebase",
        "Node.js",
      ],
    },
  ];

  return (
    <div id="portfolio" className="mt-20 mx-auto">
      <h3 className="text-center text-3xl font-bold mb-4">My Projects</h3>
      <p className="text-center text-lg font-semibold mb-9">
        Here you will find some of the projects that I created for learning
        purpose!
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="card  bg-white text-black shadow-xl">
            <figure>
              <img
                src={project.projectImg}
                alt="Shoes"
                className="hover:scale-125 hover:duration-500"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.projectName}</h2>
              <p>
                {project.technology.map((tech, i) => (
                  <div key={i} className="badge badge-outline m-2">
                    {tech}
                  </div>
                ))}
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline bg-primary text-white hover:bg-sky-700 hover:scale-125">
                  <a href={`${project.link}`} target={`_blank`}>
                    Live Site
                  </a>
                </div>
                <div className="badge badge-outline bg-secondary text-white hover:bg-sky-700 hover:scale-125">
                  <a href={`${project.gitHub}`} target={`_blank`}>
                    GitHub
                  </a>
                </div>
                <div className="badge badge-outline bg-accent  hover:bg-sky-700 hover:scale-125 text-white">
                  <Link to={`/portfolio/${project.projectCategory}`}>Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-outline text-white mx-auto w-48 hover:bg-primary hover:scale-90 hover:text-white hover:duration-700 flex mt-10">
        More Projects
      </button>
    </div>
  );
};

export default Portfolio;
