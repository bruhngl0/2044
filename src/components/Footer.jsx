import "../styles/footer.scss";

export const Footer = () => {
  return (
    <div>
      <footer className="card-footer">
        <div className="footer-content" style={{ width: "100vw" }}>
          <div className="footer-section">
            <a href="#court-booking" className="footer-link">
              Court Booking
            </a>
            <a href="#memberships" className="footer-link">
              Memberships
            </a>
            <a href="#about" className="footer-link">
              About Us
            </a>
          </div>

          <div className="footer-section">
            <a href="mailto:info@example.com" className="footer-link">
              Email
            </a>
            <a
              href="https://instagram.com"
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
            <a href="#terms" className="footer-link">
              Terms and Conditions
            </a>
            <a href="#privacy" className="footer-link">
              Privacy Policy
            </a>
            <a href="#refund" className="footer-link">
              Refund and Cancellation Policy
            </a>
          </div>

          <div className="footer-section">
            <p>Copyright 2025 @Twenty44.in</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
