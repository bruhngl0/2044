import { useState } from "react";
import "../styles/msplan.scss";

const faqs1 = [
  {
    q: "44 CREDITS INCLUDED",
    a: "1 Credit can be used for Pickleball sessions,1.5 credits can be used for Padel sessions, Reedemable at any Twenty 44 centre across India.",
  },
  {
    q: "ACCESS TO MEMBER-ONLY EVENTS",
    a: "Enjoy exclusive invites to curated gatherings, mixers, and socials hosted across our clubs.",
  },
  {
    q: "RECOVERY AND WELLNESS ACCESS AT PARTNER HOTELS",
    a: "Gain preferred access to recovery zones, spas, and wellness facilities at our partner hotels.",
  },
  {
    q: "DINING SAVINGS AT PARTNER RESTARAUNTS & HOTELS",
    a: "Enjoy special member rates and priority access across our partner restaurants and cafés.",
  },
  {
    q: "PRIORITY BOOKING (2 WEEKS) & ACCESS TO CERTIFIED COACHES",
    a: "Book courts and training sessions up to two weeks in advance and connect with certified coaches.",
  },
  {
    q: "EARLY ACCESS TO APPAREL DROPS",
    a: "Be the first to access new Twenty 44 collections, collaborations, and limited releases.",
  },
  {
    q: "EXTRA CREDITS AT 10% OFF",
    a: "Purchase additional play credits at an exclusive 20% member discount.",
  },

  {
    q: "WELCOME BOX + MEMBERSHIP CARD + Invite Letter",
    a: "Recieve a bespoke welcome package and a personal invite letter marking your membership",
  },
];

export default function Fsplan() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className="faq-container-ms"
      aria-label="Frequently Asked Questions"
    >
      <ul className="faq-list-ms">
        {faqs1.map((item, idx) => {
          const isOpen = openIndex === idx;
          const contentId = `faq-content-ms-${idx}`;
          const buttonId = `faq-button-ms-${idx}`;

          return (
            <li key={idx} className={`faq-item-ms ${isOpen ? "open" : ""}`}>
              <div className="faq-row-ms">
                <h3 className="faq-question-ms">
                  <button
                    id={buttonId}
                    className="faq-toggle-ms"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggle(idx)}
                  >
                    <span className="faq-question-text-ms">{item.q}</span>
                    <span className="faq-plus-ms" aria-hidden="true">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                </h3>
              </div>

              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="faq-answer-ms"
                style={{ maxHeight: isOpen ? "500px" : "0px" }}
              >
                {item.a.split("\n").map((line, i) => (
                  <p key={i} style={{ color: "#2d4d31" }}>
                    {line}
                  </p>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
