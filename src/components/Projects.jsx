import React from "react";
import ProjectCard from "./ProjectCard";



const Projects = () => {
  return (
    <div className="flex flex-col justify-start h-auto bg-dark-green">
        <h1 className="text-3xl text-sage text-left mb-8">Projects</h1>
        <div className="flex flex-col items-center gap-10 w-11/12">
          <ProjectCard />
        </div>
    </div>
  );
};

export default Projects;
