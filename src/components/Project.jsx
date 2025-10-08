import React, { useEffect, useRef, useState } from "react";
import "../styles/project.scss";

const projects = [
  {
    id: 1,
    title: "Book a court",
    description: "",
    name: "EXPLORE BIG PLANTERS ↗",
    image: "party1.jpg",
    backgroundImageMobile: "one-mob.png",
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
    backgroundImageMobile: "two-mob.png",
    backgroundImagePc: "two-web.png",
    description1: "@STUDIO MASON",
    route: "/",
  },
  {
    id: 3,
    title: "CTA",
    description: "",
    name: "EXPLORE BREEZE BLOCKS ↗",
    image: "three-mob.png",
    backgroundImageMobile: "three-mob.png",
    backgroundImagePc: "three-web.png",
    description1: "@STUDIO MASON",
    route: "/",
  },
];

const Project = () => {
  const projectRefs = useRef([]);
  const [isPc, setIsPc] = useState(window.innerWidth > 768);

  // Handle responsive image switching
  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection animation
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

          setTimeout(() => {
            entry.target.classList.add("text-visible");
          }, 700);

          if (index > 0) {
            projectRefs.current[index - 1].classList.add("fade-out");
          }
        } else {
          entry.target.classList.remove("show", "text-visible");

          if (index > 0) {
            projectRefs.current[index - 1].classList.remove("fade-out");
          }
        }
      });
    }, options);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
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
            backgroundImage: `url(${
              isPc ? project.backgroundImagePc : project.backgroundImageMobile
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
