// StackedImages.jsx
import React from "react";
import "../styles/stacked.scss";

const images = [
  {
    url: "/party1.jpg",
    text: "Welcome to the first slide",
  },
  {
    url: "/party2.jpg",
    text: "This is the second amazing image",
  },
  {
    url: "/party3.webp",
    text: "Last one with more scroll reveal",
  },
];

const StackedImages = () => {
  return (
    <div className="stacked-wrapper">
      {images.map((img, i) => (
        <section className="stacked-section" key={i}>
          <div
            className="background"
            style={{
              backgroundImage: `url(${img.url})`,
              zIndex: images.length - i,
            }}
          >
            <div className="overlay-text">
              <h1>{img.text}</h1>
              <p>Scroll to see the next one</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default StackedImages;
