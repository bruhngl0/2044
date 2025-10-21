import HeroSection from "./Hero";
import About from "./About";
import Project from "./Project";
import ExpandableLogoButton from "./ExpandableLogoButton";
import Faqs from "./Faqs";
import { Footer } from "./Footer";
import SimplyBookEmbed from "./SimplyBookEmbed";

const Landing = () => {
  return (
    <div>
      <ExpandableLogoButton />
      <HeroSection />
      <About />

      <div style={{ width: "100vw", position: "relative" }}>
        <a href="/book" style={{ display: "block", position: "relative" }}>
          <p
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
              fontSize: "16px",
              fontWeight: "600",
              color: "white", // optional, if your image is dark
            }}
          >
            BOOK A COURT
          </p>
          <img
            src="pop2.jpg"
            alt="Book a court"
            style={{
              width: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </a>
      </div>

      <Faqs />

      <Footer />
    </div>
  );
};

export default Landing;
