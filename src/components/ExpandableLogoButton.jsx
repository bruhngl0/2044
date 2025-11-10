import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Calendar, X } from "lucide-react";
import "../styles/logobtn.scss";

export default function ExpandableLogoButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Main Expandable Button */}
      <div
        className={`expandable-container ${isExpanded ? "expanded" : "collapsed"}`}
      >
        {/* Collapsed State - Just the circular button */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="logo-button-collapsed"
          >
            <div className="logo-circle">
              <img src="gang.png" style={{ width: "80px", marginTop: "7px" }} />
            </div>
          </button>
        )}

        {/* Expanded State - Full menu */}
        {isExpanded && (
          <div className="expanded-content">
            <div className="menu-header">
              <div className="header-logo">
                <img src="2044.svg" />{" "}
              </div>
            </div>

            <div className="menu-options">
              <a
                href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi%2C%20I%20would%20like%20to%20book%20a%20court"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsExpanded(false)}
                className="menu-option"
                style={{ textDecoration: "none" }}
              >
                <div className="option-text">
                  <div className="option-title">BOOK A COURT</div>
                </div>
              </a>

              <Link
                to="/membership"
                onClick={() => setIsExpanded(false)}
                className="menu-option"
                style={{ textDecoration: "none" }}
              >
                <div className="option-text">
                  <div className="option-title">DISCOVER MEMBERSHIP</div>
                </div>
              </Link>
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="close-button"
            >
              <X size={24} />
            </button>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isExpanded && (
        <div className="overlay" onClick={() => setIsExpanded(false)} />
      )}
    </>
  );
}
