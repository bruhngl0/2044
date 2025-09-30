import "../styles/membership.scss";

const Membership = () => {
  return (
    <div className="membership-main">
      <div className="membership-img">
        <img src="hero.png" />
      </div>
      <div className="membership-content">
        <p className="membership-content-1">Twenty44 Membership</p>
        <p className="membership-content-2">
          Circle is our singular membership tier designed for players who want
          more from their club. Non-members can book courts through our upcoming
          iOS and Android app, but members unlock priority access and a host of
          exclusive benefits designed to enhance your club experience.
        </p>
      </div>

      <div className="membership-content-btn">
        <button> Join The Waitlist</button>
      </div>

      <div className="membership-plan">
        <div className="membership-plan-1">
          <p>The Origin Membership</p>
          <p>
            Where it all begins. The Origin membership is your entry point into
            our world, designed for those who want to belong, connect, and
            experience the essence of what we stand for. It’s the foundation
            that unlocks access, privileges, and curated moments that set you
            apart.
          </p>

          <ul>
            <li>₹30,000 + GST | 20 Credits</li>
            <li> Welcome Box + Membership Card</li>
            <li> Members-only events & socials</li>
            <li> Recovery & Wellness access at partner hotels</li>
            <li> Dining savings at BBC</li>
            <li> Priority booking (2 weeks) + access to certified coaches</li>
            <li> Early access to apparel drops</li>
            <li> Extra credits at 10% off</li>
          </ul>
        </div>

        <div className="membership-plan-2">
          <p>The Apex</p>
          <p>
            The summit of belonging. The Apex membership is crafted for those
            who want it all. Exclusive access, elevated perks, and priority at
            every touchpoint, it’s the tier where every detail is fine-tuned for
            you. This is not just membership, it’s arriving at the top.
          </p>

          <ul>
            <li>₹50,000 + GST | 20 Credits</li>
            <li> Exclusive Welcome Package + Invite Letter</li>
            <li> Flagship socials & events across centres</li>
            <li>Recovery & Wellness access at partner hotels</li>
            <li> Dining savings at BBC</li>
            <li> Priority access to elite coaches + advanced programs</li>
            <li> First access to apparel & collaborations</li>
            <li> Recognition in The Circle community</li>
            <li> Extra credits at 20% off</li>
          </ul>
        </div>

        <div className="membership-cta">
          <button>Join the waitlist</button>
          <button>Book a court</button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
