import React from "react";
import { render } from "@testing-library/react";
import ProjectSlide from "./ProjectSlide";
import { Project } from "../../../data/projects";

const mockProject: Project = {
  title: "Test Project",
  description: "Test description",
  image: "/test.png",
  liveUrl: "https://test.com",
  repoUrl: "https://github.com/test",
  techStack: ["React", "TypeScript"],
};

describe("ProjectSlide", () => {
  it("renders the ProjectCard with project data", () => {
    const { getByText } = render(<ProjectSlide project={mockProject} />);
    expect(getByText("Test Project")).toBeInTheDocument();
    expect(getByText("Test description")).toBeInTheDocument();
    expect(getByText("React")).toBeInTheDocument();
    expect(getByText("TypeScript")).toBeInTheDocument();
  });
});
