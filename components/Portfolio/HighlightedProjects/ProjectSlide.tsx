import React from "react";
import { Project } from "../../../data/projects";
import ProjectCard from "../ProjectCard";
import { SlideContainer } from "./ProjectSlide.styles";

interface ProjectSlideProps {
  project: Project;
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project }) => {
  return (
    <SlideContainer>
      <ProjectCard project={project} />
    </SlideContainer>
  );
};

export default ProjectSlide;
