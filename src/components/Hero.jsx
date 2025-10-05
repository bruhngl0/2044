import React from "react";
import "../styles/hero.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <picture className="hero__image">
        {/* Mobile image */}
        <source srcSet="mobileCover.jpg" media="(max-width: 768px)" />
        {/* Desktop image */}
        <img src="webCover.jpg" alt="Hero" />
      </picture>

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
