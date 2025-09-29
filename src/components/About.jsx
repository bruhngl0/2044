import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <p className="about-main-text">
        From the lines of a court, we’ve built something larger than sport.
        Twenty44 is a members-only world where movement meets community, where
        every visit feels curated, and where belonging is designed into every
        detail.
      </p>

      <div className="about-button-main">
        <button className="about-button">Discover Membership</button>
        <p className="about-waitlist">
          Atlas membership is invite-only. Join the waitlist and we'll contact
          you if it's a fit.
        </p>
      </div>
    </div>
  );
};

export default About;
