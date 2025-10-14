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
          <p className="membership-content-1">TWENTY 44 MEMBERSHIPS</p>
          <p className="membership-content-2">
            The Twenty 44 Membership is your gateway into a world where sport,
            lifestyle, and community come together with intention. Designed for
            those who seek more than access, it offers a sense of belonging to
            something rare and elevated. As a member, you don’t just play, you
            experience curated moments, priority access, and exclusive
            privileges that reflect the spirit of Twenty 44.
          </p>
        </div>

        <div className="mem-img">
          <img src="pop1.jpg" />
        </div>

        <div className="membership-plan">
          <div className="membership-plan-1">
            <p className="mp1-heading">THE TWENTY MEMBERSHIP</p>
            <p className="mp1-des1">
              Where it all begins. The Twenty membership is your entry point
              into our world, designed for those who want to belong, connect,
              and experience the essence of what we stand for. It’s the
              foundation that unlocks access, privileges, and curated moments
              that set you apart.
            </p>
            <div className="mid"></div>
            <p className="mp1-des">
              <h1 style={{ fontSize: "16px" }}> 20 Credits Included</h1>{" "}
              <ul>
                <li>1 Credit can be used for Pickleball sessions</li>
                <li>1.5 Credits can be used for Padel sessions</li>
                <li>Redeemable at any Twenty44 Centre across India</li>
              </ul>
            </p>

            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Access to Member-Only Events & Socials
              </p>
              <p className="mp1-point1-des">
                Enjoy exclusive invites to curated gatherings, mixers, and
                socials hosted across our clubs.
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Recovery & Wellness Access at Partner Hotels
              </p>
              <p className="mp1-point1-des">
                Gain preferred access to recovery zones, spas, and wellness
                facilities at our partner hotels.
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Dining Savings at Partner Restaurants & Cafés
              </p>
              <p className="mp1-point1-des">
                {" "}
                Enjoy special member rates and priority access across our
                partner restaurants and cafés.
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Priority Booking (2 Weeks) & Access to Certified Coaches
              </p>
              <p className="mp1-point1-des">
                Book courts and training sessions up to two weeks in advance and
                connect with certified coaches.
              </p>
            </div>

            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Early Access to Apparel Drops
              </p>
              <p className="mp1-point1-des">
                Be the first to access new Twenty44 collections, collaborations,
                and limited releases.
              </p>
            </div>

            <div className="mp1-point1">
              <p className="mp1-point1-heading">Extra Credits at 10% Off</p>
              <p className="mp1-point1-des">
                Purchase additional play credits at an exclusive 10% member
                discount.
              </p>
            </div>

            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Welcome Box + Membership Card
              </p>
              <p className="mp1-point1-des">
                Receive a personalized membership card and a curated welcome box
                to begin your journey.
              </p>
            </div>

            <div className="membership-cta">
              <Link to="/waitlist2">
                <button className="membership-cta-btn">APPLY NOW</button>
              </Link>
            </div>
          </div>

          <div className="membership-plan-1">
            <p className="mp1-heading">THE FORTY FOUR MEMBERSHIP</p>
            <p className="mp1-des1">
              The summit of belonging. The Fourty Four Membership is crafted for
              those who want it all. Exclusive access, elevated perks, and
              priority at every touchpoint, it’s the tier where every detail is
              fine-tuned for you. This is not just membership, it’s arriving at
              the top.
            </p>
            <div className="mid"></div>
            <p className="mp1-des">
              <h1 style={{ fontSize: "16px" }}> 44 Credits Included</h1>{" "}
              <ul>
                <li>1 Credit can be used for Pickleball sessions</li>
                <li>1.5 Credits can be used for Padel sessions</li>
                <li>Redeemable at any Twenty44 Centre across India</li>
              </ul>
            </p>

            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Access to Member-Only Events & Socials
              </p>
              <p className="mp1-point1-des">
                Enjoy exclusive invites to curated gatherings, mixers, and
                socials hosted across our clubs.
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Recovery & Wellness Access at Partner Hotels
              </p>
              <p className="mp1-point1-des">
                Gain preferred access to recovery zones, spas, and wellness
                facilities at our partner hotels.
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Dining Savings at Partner Restaurants & Cafés
              </p>
              <p className="mp1-point1-des">
                {" "}
                Enjoy special member rates and priority access across our
                partner restaurants and cafés.
              </p>
            </div>
            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Priority Booking (2 Weeks) & Access to Certified Coaches
              </p>
              <p className="mp1-point1-des">
                Book courts and training sessions up to two weeks in advance and
                connect with certified coaches.
              </p>
            </div>

            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Early Access to Apparel Drops
              </p>
              <p className="mp1-point1-des">
                Be the first to access new Twenty44 collections, collaborations,
                and limited releases.
              </p>
            </div>

            <div className="mp1-point1">
              <p className="mp1-point1-heading">Extra Credits at 20% Off</p>
              <p className="mp1-point1-des">
                Purchase additional play credits at an exclusive 20% member
                discount.
              </p>
            </div>

            <div className="mp1-point1">
              <p className="mp1-point1-heading">
                Exclusive Welcome Package + Invite Letter
              </p>
              <p className="mp1-point1-des">
                Receive a bespoke welcome package and a personal invite letter
                marking your membership.
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
