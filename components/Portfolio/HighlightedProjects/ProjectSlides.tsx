import React from "react";
import { projects } from "../../../data/projects";
import ProjectCard from "../ProjectCard";

import ProjectSlide from "./ProjectSlide";

const ProjectSlides: React.FC = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectSlide key={project.title} project={project} />
      ))}
    </>
  );
};

export default ProjectSlides;
