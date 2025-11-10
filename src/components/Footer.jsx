import "../styles/footer.scss";

export const Footer = () => {
  return (
    <div>
      <footer className="card-footer">
        <div className="footer-content" style={{ width: "100vw" }}>
          <div className="footer-section">
            <a
              href="https://wa.me/919845382044?text=Hi%2C%20I%20would%20like%20to%20book%20a%20court"
              className="footer-link"
            >
              Court Booking
            </a>
            <a href="/membership" className="footer-link">
              Memberships
            </a>
            <a href="#" className="footer-link">
              About Us
            </a>

            <a href="/faq" className="footer-link">
              FAQ's
            </a>
          </div>

          <div className="footer-section">
            <a href="mailto:office.twenty44@gmail.com" className="footer-link">
              Email
            </a>
            <a
              href="https://www.instagram.com/twenty44.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/917829152222"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              WhatsApp
            </a>
          </div>

          <div className="footer-section">
            <a href="/policy" className="footer-link">
              Terms and Conditions
            </a>
            <a href="/policy" className="footer-link">
              Privacy Policy
            </a>
            <a href="/policy" className="footer-link">
              Refund and Cancellation Policy
            </a>
          </div>

          <div className="footer-section">
            <a href="#" className="footer-link">
              Copyright 2025 @Twenty44.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
