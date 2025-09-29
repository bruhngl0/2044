import React, { useEffect, useRef } from "react";
import "../styles/stackingCards.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackingCards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top top+=40`,
          scrub: true,
          markers: true,
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: 1 - (cards.length - index) * 0.025,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        markers: true,
        id: "pin",
        end: "max",
        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <div className="wrapper">
      <h1>Stacking Cards</h1>
      <div className="container">
        <div className="cards">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="card"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ top: `${40 + index * 5}px` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="container2"></div>
    </div>
  );
};

export default StackingCards;
