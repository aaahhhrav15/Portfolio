"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="./assets/Crypto-app.png"
          title="Cryptoverse - Crypto App"
          description="A crypto app that allows you to view all the cryptocurrencies and their details along with interactive charts."
        />
        <ProjectCard
          src="./assets/dicegame.png"
          title="Dice Game"
          description="A simple dice game which generates random dice numbers and calculates the points."
        />
        <ProjectCard
          src="./assets/SpaceWebsite.png"
          title="My Portfolio"
          description="An interactive portfolio made using Next JS, Tailwind CSS, Framer Motion and Three JS."
        />
      </div>
    </div>
  );
};

export default Projects;