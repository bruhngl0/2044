import React, { useEffect, useRef } from "react";
import "../styles/project.scss";

const projects = [
  {
    id: 1,
    title: "Book a court",
    description: "",
    name: "EXPLORE BIG PLANTERS ↗",
    image: "party1.jpg",
    backgroundImageMobile: "01-mobile.jpg",
    backgroundImagePc: "party1.jpg",
    description1: "@STUDIO MASON",
    route: "/",
  },
  {
    id: 2,
    title: "Community",
    description: "",
    name: "EXPLORE DESK PLANTERS ↗",
    image: "party1.jpg",
    backgroundImageMobile: "03-mobile.jpg",
    backgroundImagePc: "party1.jpg",
    description1: "@STUDIO MASON",
    route: "/",
  },
  {
    id: 3,
    title: "CTA",
    description: "",
    name: "EXPLORE BREEZE BLOCKS ↗",
    image: "party1.jpg",
    backgroundImageMobile: "02-mobile.jpg",
    backgroundImagePc: "party1.jpg",
    description1: "@STUDIO MASON",
    route: "/",
  },
];

const Project = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = projectRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          // Add text-visible class after 1.5 seconds
          setTimeout(() => {
            entry.target.classList.add("text-visible");
          }, 700);

          if (index > 0) {
            projectRefs.current[index - 1].classList.add("fade-out");
          }
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.remove("text-visible");

          if (index > 0) {
            projectRefs.current[index - 1].classList.remove("fade-out");
          }
        }
      });
    }, options);

    if (projectRefs.current) {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="projects-container" id="project">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className={`project-card bg-${project.id}`}
          style={{
            backgroundImage: `url(${project.backgroundImageMobile})`,
            backgroundSize: "cover",
          }}
        >
          <a href={project.route} className="route-main">
            <h2 className="title">{project.title}</h2>
            <div className="des">
              <p className="des">{project.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
