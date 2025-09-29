import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <p className="about-main-text">
        With Atlas, you can finally get tables at the hardest-to-book
        restaurants, find the perfect suite at the world's best hotels, sit
        front row at sold-out concerts and sporting events—and much more. All
        seamlessly brought to you inside a card and app that's as intuitive, as
        it is powerful.
      </p>

      <div className="about-button-main">
        <button className="about-button">Request Invite</button>
        <p className="about-waitlist">
          Atlas membership is invite-only. Join the waitlist and we'll contact
          you if it's a fit.
        </p>
      </div>
    </div>
  );
};

export default About;
