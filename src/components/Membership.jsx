import "../styles/membership.scss";
import { Link } from "react-router-dom";
import ExpandableLogoButton from "./ExpandableLogoButton";
import { Footer } from "./Footer";
import Msplan from "./Msplan";
import Fsplan from "./Fsplan";
const Membership = () => {
  return (
    <div>
      <ExpandableLogoButton />
      <div className="membership-main">
        <div className="membership-content">
          <p className="membership-content-1">TWENTY 44 MEMBERSHIPS</p>
          <p className="membership-content-2">
            The Twenty44 Membership is your entry into a space where sport,
            lifestyle, and community come together with purpose. Designed for
            those who value more than access, it offers belonging, curated
            experiences, and exclusive privileges that embody the spirit of
            Twenty44.
          </p>
        </div>

        <div className="mem-img">
          <img src="pop1.jpg" />
        </div>

        <div className="membership-plan">
          <div className="membership-plan-1">
            <p className="mp1-heading">
              THE TWENTY <br /> MEMBERSHIP (6 MONTHS)
            </p>
            <p className="mp1-des1">
              Where it all begins. The Twenty membership is your entry point
              into our world, designed for those who want to belong, connect,
              and experience the essence of what we stand for. It’s the
              foundation that unlocks access, privileges, and curated moments
              that set you apart.
            </p>
            <div className="mid"></div>
            <Msplan />
            <div className="membership-cta">
              <Link to="/waitlist2">
                <button className="membership-cta-btn">APPLY NOW</button>
              </Link>
            </div>
          </div>

          <div className="membership-plan-1">
            <p className="mp1-heading">
              THE FORTY FOUR
              <br /> MEMBERSHIP (12 MONTHS)
            </p>
            <p className="mp1-des1">
              The summit of belonging. The Fourty Four Membership is crafted for
              those who want it all. Exclusive access, elevated perks, and
              priority at every touchpoint, it’s the tier where every detail is
              fine-tuned for you. This is not just membership, it’s arriving at
              the top.
            </p>

            <div className="mid"></div>

            <Fsplan />

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
