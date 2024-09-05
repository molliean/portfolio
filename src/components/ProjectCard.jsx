import React from "react";

const projects = [
  {
    image: "https://i.imgur.com/mluP620.png",
    title: "CurateSphere",
    description:
      "Web app for art museum curators to create, organize, and manage exhibitions consisting of art works from the Harvard Art Museum API.",
    gitHubLink: "https://github.com/cassius2828/curate-sphere",
    deployedLink: "https://curate-sphere.netlify.app/",
    technologies: ["React", "Tailwind", "PostgreSQL", "Express"],
  },
  {
    image: "https://i.imgur.com/UfBZphS.png",
    title: "Onboard Buddy",
    description:
      "Web app designed for hiring managers to create and track onboarding checklists for new employees.",
    gitHubLink: "https://github.com/molliean/onboarding-app-frontend",
    deployedLink: "https://main--onboard-buddy.netlify.app/",
    technologies: ["React", "CSS Modules", "MongoDB", "Express"],
  },
  {
    image: "https://i.imgur.com/Fyt6dNw.png",
    title: "Hike Logger",
    description:
      "Web app for hiking enthusiasts to log detailed information about their hikes, organize trips, and keep track of their adventures.",
    gitHubLink: "https://github.com/molliean/hike-logger",
    deployedLink: "https://hike-logger-app-8c4c5c4a81ee.herokuapp.com/",
    technologies: ["Vanilla JS", "CSS", "MongoDB", "Express"],
  },
  {
    image: "https://i.imgur.com/oI0wKGc.jpeg",
    title: "Guide to Big Sur",
    description: "Detailed travel guide for activities in Big Sur, CA",
    gitHubLink: "",
    deployedLink: "",
    technologies: ["CSS", "HTML"],
  },
];

const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-4 ">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex text-sage p-4 transition-all duration-300 ease-in-out transform hover:bg-slate-900 hover:bg-opacity-50 hover:rounded-lg"
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-40 h-24"
          />
          <div className="pl-4">
            <h3 className="text-1xl">
              <a href={project.deployedLink} className="hover:text-aqua">
                {project.title}
              </a>
            </h3>
            <p className="font-extralight">{project.description}</p>
            {/* <p>
              <a href={project.gitHubLink} className="hover:text-aqua">
                {">> "}GitHub
              </a>
            </p> */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, techIndex)=>(
                <span key={techIndex} className="px-2 py-1 font-extralight text-xs text-aqua bg-[#1a3043] rounded-full border-[#7E7C6C] border-[0.5px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
