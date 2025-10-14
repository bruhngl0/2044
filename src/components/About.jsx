import React from "react";
import "../styles/about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <h1 style={{ fontSize: "24px" }}>TWENTY44</h1>
      <p className="about-main-text">
        From the lines of a court, we’ve built something larger than sport.
        Twenty44 is a members-only world where movement meets community, where
        every visit feels curated, and where belonging is designed into every
        detail.
      </p>

      <div className="about-button-main">
        <Link to="/membership">
          <button className="about-button">Discover Membership</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
