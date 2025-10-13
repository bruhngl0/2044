import React, { useEffect, useState } from "react";
import "../styles/hero.scss";

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState("atoo.mp4");

  useEffect(() => {
    const updateVideo = () => {
      // Use the mobile-first video by default
      if (window.innerWidth > 768) {
        setVideoSrc("newvidoo.mp4"); // Desktop video
      } else {
        setVideoSrc("atoo.mp4"); // Mobile video
      }
    };

    updateVideo();
    window.addEventListener("resize", updateVideo);
    return () => window.removeEventListener("resize", updateVideo);
  }, []);

  return (
    <section className="hero">
      <video
        key={videoSrc} // Helps React reliably update the video element
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        poster="fallback.jpg"
      >
        {/* The source now correctly updates when the key changes */}
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="below-hero">
        <p>More than a game. A way of living.</p>
      </div>
      <div className="hero__overlay">
        <div className="hero__content">
          <h1></h1>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
