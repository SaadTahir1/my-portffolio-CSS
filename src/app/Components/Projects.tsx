"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectNavbar from "./ProjectNavbar";
import { projects as projectsData } from "../../../data";
import { Category } from "../../../type";
import styles from "../styles/prject.module.css"; // Import custom CSS

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className={styles.projectsContainer}>
      <ProjectNavbar
        handleFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className={styles.gridContainer}>
        {projects.map((project) => (
          <div className={styles.gridItem} key={project.name}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
