import React from "react";
import Image from "next/image";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900 p-4 flex flex-col items-center transition-transform hover:scale-105">
      <div className="w-full h-48 relative mb-4">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 justify-center mb-3">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
        >
          Live Demo
        </a>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 dark:text-blue-300 underline hover:text-blue-800"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
