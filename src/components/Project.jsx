import React, { useEffect, useRef } from "react";
import "../styles/project.scss";

const projects = [
  {
    id: 1,
    title: "Book a court",
    description:
      "FRP and GRC planters merge enduring style with rugged durability. FRP offers sleek, lightweight design, while GRC delivers sturdy, eco-conscious elegance. Both effortlessly elevate indoor or outdoor spaces.",
    name: "EXPLORE BIG PLANTERS ↗",
    image: "party1.jpg",
    backgroundImageMobile: "party1.jpg",
    backgroundImagePc: "party1.jpg",
    description1: "@STUDIO MASON",
    route: "/",
  },
  {
    id: 2,
    title: "final cta",
    description:
      "Transform your workspace with minimalist Concrete Desk Planters that blend function and modern style. Handcrafted from premium concrete, their sleek industrial design elevates any desk or shelf with understated sophistication.",
    name: "EXPLORE DESK PLANTERS ↗",
    image: "party1.jpg",
    backgroundImageMobile: "party2.jpg",
    backgroundImagePc: "party1.jpg",
    description1: "@STUDIO MASON",
    route: "/",
  },
  {
    id: 3,
    title: "WHAT SCENE",
    description:
      "Breeze Blocks are timeless and versatile, blending functionality with stunning design. Crafted from durable concrete, their iconic geometric patterns enhance airflow and natural light while adding a bold architectural statement to any interior or exterior space.",
    name: "EXPLORE BREEZE BLOCKS ↗",
    image: "party1.jpg",
    backgroundImageMobile: "party3.webp",
    backgroundImagePc: "party1.jpg",
    description1: "@STUDIO MASON",
    route: "/",
  },
  {
    id: 4,
    title: "NO IDEA",
    description:
      "Polished terrazzo table tops feature customizable colors, chip sizes, and thicknesses (20mm-40mm). Durable, low-maintenance, and reinforced with fiberglass mesh, they resist water, moss, and stains. Available in 1.5' to 8' diameters with customizable MS, SS, or wood bases.",
    name: "EXPLORE FURNITURE ↗",
    backgroundImageMobile: "party1.jpg",
    backgroundImagePc: "party1.jpg",
    image: "party1.jpg",
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
