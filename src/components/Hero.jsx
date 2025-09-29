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
          <h1>Your key to the world.</h1>
          <p>Access coveted dining, hotels, and events.</p>
          <button className="hero__cta">Request Invite</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
