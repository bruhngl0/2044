import { useState } from "react";
import "../styles/faq.scss";

const faqs1 = [
  {
    q: "CAN NON MEMBERS BOOK COURTS?",
    a: "Yes. Non members can book sessions through the website, which connects you to our team on WhatsApp to confirm your slot and purchase day credits.",
  },
  {
    q: "WHAT ARE DAY CREDITS?",
    a: "Day credits let you play without a membership. They can be purchased via WhatsApp and used for both Pickleball and Padel sessions.",
  },
  {
    q: "CAN I ADD RECOVERY OR WELLNESS EXPERIENCES TO MY BOOKING?",
    a: "Yes. While booking, you can add wellness and recovery experiences available at our partner hotels, including access to spas, saunas, steam rooms, and other relaxation facilities at preferred member rates.",
  },
  {
    q: "WHAT ARE THE DIFFERENT MEMBERSHIP OPTIONS?",
    a: "The Twenty Membership (6 months) and The Forty Four Membership (12 months). Both include credits, benefits, and community privileges.",
  },
  {
    q: "HOW DO CREDITS WORK?",
    a: "1 Credit = 1 Pickleball session\n1.5 Credits = 1 Padel session\nCredits can be used at any Twenty44 Centre across India.",
  },
  {
    q: "CAN I BUY ADDITIONAL CREDITS?",
    a: "Yes. Members can purchase extra credits anytime at exclusive discounted rates.",
  },
  {
    q: "CAN I UPGRADE MY MEMBERSHIP?",
    a: "Yes. You can upgrade anytime by paying the difference. Credits and benefits carry forward.",
  },
  {
    q: "DO UNUSED CREDITS ROLL OVER?",
    a: "Credits remain valid through your membership term and can be renewed upon extension.",
  },
  {
    q: "CAN I BRING A GUEST?",
    a: "Yes. Guest access is available for a small fee. Certain events and socials remain member only.",
  },
  {
    q: "CAN I ACCESS OTHER TWENTY44 LOCATIONS?",
    a: "Yes. Your membership provides access to all current and upcoming Twenty44 Centres across India.",
  },
  {
    q: "IS MY MEMBERSHIP REFUNDABLE OR TRANSFERABLE?",
    a: "Memberships are non transferable and non refundable. Temporary holds may be available in select cases.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="faq-container" aria-label="Frequently Asked Questions">
      <h2 className="faq-title">FAQ’S</h2>

      <ul className="faq-list">
        {faqs1.map((item, idx) => {
          const isOpen = openIndex === idx;
          const contentId = `faq-content-${idx}`;
          const buttonId = `faq-button-${idx}`;

          return (
            <li key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
              <div className="faq-row">
                <h3 className="faq-question">
                  <button
                    id={buttonId}
                    className="faq-toggle"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggle(idx)}
                  >
                    <span className="faq-question-text">{item.q}</span>
                    <span className="faq-plus" aria-hidden="true">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                </h3>
              </div>

              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="faq-answer"
                style={{ maxHeight: isOpen ? "500px" : "0px" }}
              >
                {item.a.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
