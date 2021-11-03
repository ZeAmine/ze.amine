import React from "react";
import { projects } from "../../data";
import ListProject from "../ListProject/ListProject";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="section projects">
      <div className="projects__wrap container">
        <div className="section__title">
          <h1>Liste des projets.</h1>
        </div>
        {projects.map((project, index) => (
          <ListProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
