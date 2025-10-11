import React, { useEffect, useRef, useState } from "react";

/* Original Styles */
const styles = `
.route-main {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.project-card.text-visible .route-main {
  opacity: 1;
  transform: translateY(0);
}
  
.title{
  padding-top: 0rem;
  font-size: 2rem;
  color: #f1f1f1;
  background-color: transparent;
}
.des{
  padding-top: 0rem;
  font-size: 0.8rem;
  margin-block-end: 0;
  margin-block-start: 0;
  text-align: center;
}
.name{
  margin-top: 1rem ;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid gray;
  color: rgb(31, 31, 31);
  padding: 3px 3px;
}
.desc-1{
  margin-top: 2rem;
  font-size: 0.8rem;
  background-color: transparent;
}
.desc-2{
  background-color: transparent;
}
.projects-container {
  position: relative;
  height: 200vh;
  width: 100%;
  overflow-y: none;
  overflow-x: none;
}
.project-card {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease, opacity 0.5s ease;
  text-align: center;
  padding: 0px;
  margin: 0;
  width: 100%;
  box-shadow: 0 2px 3px rgba(222, 216, 216, 0.1);
  z-index: 1;
  background-size: cover;
}
.project-card.show {
  opacity: 1;
  transform: translateY(0%);
}
.project-card.fade-out {
  opacity: 1;
  animation: fadeOut 0.5s ease-in-out forwards; 
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    filter: brightness(1);
    scale: (1);
  }
  100% {
    opacity: 1;
    filter: brightness(0.5);
    scale: .96;
  }
}
.project-card img {
  display: none;
}
.route-main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bg-1 {
  background-color: #efd6bf;
}
.bg-2 {
  background-color: #efd6bf;
}
.bg-3 {
  background-color: #efd6bf;
}
.bg-4 {
  background-color: #efd6bf;
}
.bg-5 {
  background-color: #efd6bf;
}

/* Footer Styles */
.card-footer {
 
  background-color: transparent;

height: 55vh;
width: 90vw;


flex-direction: column;
justify-content: start;
align-items: start;

  padding: 2rem 1rem;
  opacity: 1;
  transform: translateY(20px);
  transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
}

.project-card.text-visible .card-footer {
  opacity: 1;
  transform: translateY(0);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
margin-bottom: 2rem;
  
  gap: 1.5rem;
  color: #f1f1f1;
}

.footer-section {
  display: flex;
  flex-direction: column;
justify-content: start;
align-items:start;
  gap: 0.5rem;
margin-bottom: 2rem;
}

.footer-link {
  color: #f1f1f1;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer-contact {
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.95rem;
}

.footer-phone {
  color: #f1f1f1;
  text-decoration: none;
  font-weight: 500;
}

.footer-phone:hover {
  color: #ffffff;
}

@media only screen and (max-width: 768px) {
  .projects-container {
    height: 200vh;
    display: flex;
    flex-direction: column;
  }
  .project-card {
    height: 100vh;
    background-color: rgb(217, 163, 93);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
  }
  .project-card img {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  }
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .card-footer {
    padding: 1.5rem 1rem;
  }
}

@media only screen and (max-width: 390px) {
  .projects-container {
    height: 200vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .des{
    padding-top: 0rem;
    font-size: 0.8rem;
  }
  .project-card {
    height: 100vh;
    background-color: rgb(217, 163, 93);
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .project-card img {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  }
  .footer-link {
    font-size: 0.85rem;
  }
}
`;

const projects = [
  {
    id: 1,
    title: "Book a court",
    description: "",
    name: "EXPLORE BIG PLANTERS ↗",
    image: "party1.jpg",
    backgroundImageMobile: "one-mob.png",
    backgroundImagePc: "two-web.png",
    description1: "@STUDIO MASON",
    route: "/",
  },
  {
    id: 2,
    title: "",
    description: "",
    name: "EXPLORE DESK PLANTERS ↗",
    image: "party1.jpg",
    backgroundImageMobile: "bg.jpg",
    backgroundImagePc: "bgpc2.jpg",
    description1: "@STUDIO MASON",
    route: "/",
    hasFooter: true,
  },
];

const Project = () => {
  const projectRefs = useRef([]);
  const [isPc, setIsPc] = useState(window.innerWidth > 768);

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

          {project.hasFooter && (
            <footer className="card-footer">
              <div className="footer-content">
                <div className="footer-section">
                  <a href="#court-booking" className="footer-link">
                    Court Booking
                  </a>
                  <a href="#memberships" className="footer-link">
                    Memberships
                  </a>
                  <a href="#about" className="footer-link">
                    About Us
                  </a>

                  <p>
                    Contact Us:{" "}
                    <a href="tel:+919854382044" className="footer-phone">
                      +91 9854382044
                    </a>
                  </p>
                </div>

                <div className="footer-section">
                  <a href="mailto:info@example.com" className="footer-link">
                    Email
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/917829152222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="footer-section">
                  <a href="#terms" className="footer-link">
                    Terms and Conditions
                  </a>
                  <a href="#privacy" className="footer-link">
                    Privacy Policy
                  </a>
                  <a href="#refund" className="footer-link">
                    Refund and Cancellation Policy
                  </a>
                </div>
              </div>
            </footer>
          )}
        </div>
      ))}
    </div>
  );
};

export default Project;
