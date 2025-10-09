import { useState } from "react";
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
              <img src="2044.svg" />
            </div>
          </button>
        )}

        {/* Expanded State - Full menu */}
        {isExpanded && (
          <div className="expanded-content">
            <div className="menu-header">
              <div className="header-logo">
                <img src="2044.svg" />
              </div>
            </div>

            <div className="menu-options">
              <button
                onClick={() => {
                  alert("Opening court booking...");
                  setIsExpanded(false);
                }}
                className="menu-option"
              >
                <div className="option-icon booking-icon">
                  <Calendar size={20} />
                </div>
                <div className="option-text">
                  <div className="option-title">Book a court</div>
                  <div className="option-subtitle">Break a sweat</div>
                </div>
              </button>

              <button
                onClick={() => {
                  alert("Opening membership form...");
                  setIsExpanded(false);
                }}
                className="menu-option"
              >
                <div className="option-icon member-icon">
                  <User size={20} />
                </div>
                <div className="option-text">
                  <div className="option-title">Request an invite</div>
                  <div className="option-subtitle">Join our community</div>
                </div>
              </button>
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
