import "../styles/membership.scss";
import { Link } from "react-router-dom";
import ExpandableLogoButton from "./ExpandableLogoButton";
import { Footer } from "./Footer";
import Logowhite from "./Logowhite";

const Membership = () => {
  return (
    <div>
      <ExpandableLogoButton />
      <div className="membership-main">
        <div className="membership-content">
          <p className="membership-content-1">TWENTY44 MEMBERSHIPS</p>
          <p className="membership-content-2">
            The Twenty44 Membership is your gateway into a world where sport,
            lifestyle, and community come together with intention. Designed for
            those who seek more than access, it offers a sense of belonging to
            something rare and elevated. As a member, you don’t just play, you
            experience curated moments, priority access, and exclusive
            privileges that reflect the spirit of Twenty44.
          </p>
        </div>

        <div className="mem-img">
          <picture>
            <source srcSet="" media="(max-width: 768px)" />
            <source srcSet="442-pc.jpg" media="(min-width: 769px)" />
            <img src="/images/desktop.jpg" alt="Memory" />
          </picture>
        </div>

        <div className="membership-plan">
          <div className="membership-plan-1">
            <p className="mp1-heading">THE ORIGIN MEMBERSHIP</p>
            <p className="mp1-des">
              Where it all begins. The Origin membership is your entry point
              into our world, designed for those who want to belong , connect,
              and experience the essence of what we stand for. It’s the
              foundation that unlocks access, privileges, and curated moments
              that set you apart.
            </p>
            <div className="mid"></div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">ACCESS TO MEMBER ONLY CLUBS</p>
              <p className="mp1-point1-des">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">ACCESS TO MEMBER ONLY CLUBS</p>
              <p className="mp1-point1-des">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">ACCESS TO MEMBER ONLY CLUBS</p>
              <p className="mp1-point1-des">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">ACCESS TO MEMBER ONLY CLUBS</p>
              <p className="mp1-point1-des">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>

            <div className="membership-cta">
              <Link to="/waitlist2">
                <button className="membership-cta-btn">APPLY NOW</button>
              </Link>
            </div>
          </div>

          <div className="membership-plan-1">
            <p className="mp1-heading">THE APEX MEMBERSHIP</p>
            <p className="mp1-des">
              Where it all begins. The Origin membership is your entry point
              into our world, designed for those who want to belong , connect,
              and experience the essence of what we stand for. It’s the
              foundation that unlocks access, privileges, and curated moments
              that set you apart.
            </p>
            <div className="mid"></div>

            <div className="mp1-point1">
              <p className="mp1-point1-heading">ACCESS TO MEMBER ONLY CLUBS</p>
              <p className="mp1-point1-des">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">ACCESS TO MEMBER ONLY CLUBS</p>
              <p className="mp1-point1-des">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">ACCESS TO MEMBER ONLY CLUBS</p>
              <p className="mp1-point1-des">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">ACCESS TO MEMBER ONLY CLUBS</p>
              <p className="mp1-point1-des">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a{" "}
              </p>
            </div>
            <div className="membership-cta">
              <Link to="/waitlist2">
                <button className="membership-cta-btn">APPLY NOW</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Membership;
