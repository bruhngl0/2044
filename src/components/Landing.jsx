import HeroSection from "./Hero";
import About from "./About";
import Project from "./Project";
import ExpandableLogoButton from "./ExpandableLogoButton";

const Landing = () => {
  return (
    <div>
      <ExpandableLogoButton />
      <HeroSection />
      <About />
      <Project />
    </div>
  );
};

export default Landing;
