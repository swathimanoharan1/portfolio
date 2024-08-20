import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="" />
      <div>
        <p>
          <b>Description: </b> {project.description}
        </p>
        <p className="key">
          <b>Key Features: </b>
          {project.keyfeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </p>
        <p>
          <b>Skills:</b> {project.skills}
        </p>
      </div>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
