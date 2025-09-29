import React from "react";
import "../styles/hero.scss";
const HeroSection = () => {
  return (
    <section className="hero">
      <video className="hero__video" autoPlay loop muted playsInline>
        <source src="HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero__overlay">
        <div className="hero__content">
          <h1>Twenty44</h1>
          <p>More than a game. A way of living.</p>
          <button className="hero__cta">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
