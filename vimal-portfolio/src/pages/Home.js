import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Home = () => {
  const projectSection = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center px-4 py-2 ">
        <span className="homename text-5xl md:text-6xl">Hi I'm</span>
        <span className="homename text-5xl md:text-6xl text-indigo-600">
          {" "}
          Vimal
        </span>
      </div>
      <span className="text-md  md:text-xl mb-4">
        Software Development Engineer
      </span>
      <p className="paragraph text-center text-base md:text-lg">
        I have extensive expertise in building scalable web applications to
        solve real-world problems.
      </p>
      <button
        className="border-2 border-indigo-700 text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100 mt-5"
        onClick={projectSection}
      >
        See What I've Build <KeyboardDoubleArrowRightIcon />
      </button>
      <button className="bg-indigo-700 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 mt-5">
        Download CV
      </button>

      <div className="flex mx-auto gap-5 mt-5 mb-5">
        <a
          href="https://github.com/Vimalkannan31"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="hover:text-indigo-700 " />
        </a>
        <a
          href="https://www.linkedin.com/in/vimal-k-61411523a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="hover:text-indigo-700 " />
        </a>
      
      </div>
      <a href="mailto:thevimalkannan@gmail.com" className="mt-1">
        <p className="hover:text-pink-500 transition-colors">
          thevimalkannan@gmail.com
        </p>
      </a>
      
    </div>
  );
};

export default Home;
