import React, { useState } from "react";
import ProjectCard from "../cardcomponents/ProjectCard";
import supportticket from "../assets/supportticket.png";
import hari from '../assets/hari.jpg';
import vimal from '../assets/Vimal.png';
import tourism from '../assets/tourism website.png'
import AllProjects from "./Allprojects";

const Projects = () => {
  const [projectsOpen,setProjectsOpen] = useState(false);

    const handleProjectsOpen = () =>{
        setProjectsOpen(true);
    }


  return (
    <div className="mt-10" id="projects"> 
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="sectionhead text-4xl">What I Build?</span>
        <div className="border-t-4 border-indigo-700 my-4 w-16 mx-auto"></div>
        <p className="paragraph text-center text-base md:text-lg">
          Turning ideas into impactful applications with innovative tech solutions.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex justify-center">
        <div className="w-full px-4 md:w-3/4 lg:w-2/3">
          <ProjectCard
            image={supportticket}
            title={"Support Ticket System"}
            description={
              "This project provides users with a platform to raise their problems and queries through a support ticket system. Users can submit tickets detailing their issues, and the support team will respond within 24 hours. Submitted tickets can be tracked with essential details such as Ticket ID, Status, and Created Date, ensuring streamlined issue management and resolution."
            }
            technologies={["Reactjs","React-Bootstrap","Mui","React-hook-form","Flask","Python","PostgreSQL"]}
            developerImages={[vimal,hari]}
          />
           <ProjectCard
            image={tourism}
            title={"tourism website"}
            description={
              "Explore exciting adventure activities like bungee jumping, zip-lining, and canoeing. Discover amazing travel packages to destinations like Himachal, Darjeeling, Goa, and more. Find the perfect adventure for you!"
            }
            technologies={["Html","Css","Js","React-Bootstrap"]}
            developerImages={[vimal]}
          />
        </div>

      </div>
      <button
        class="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-indigo-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
        onClick={handleProjectsOpen}

      >
        Explore 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 19"
          class="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
        >
          <path
            class="fill-gray-800 group-hover:fill-gray-800"
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          ></path>
        </svg>
      </button>
      <AllProjects projectsOpen={projectsOpen} setProjectsOpen={setProjectsOpen}/>

    </div>
  );
};

export default Projects;
