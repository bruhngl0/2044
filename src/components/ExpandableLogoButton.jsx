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
              <img src="gang.png" style={{ width: "80px", marginTop: "7px" }} />
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
                <div className="option-text">
                  <div className="option-title">BOOK A COURT</div>
                </div>
              </button>

              <button
                onClick={() => {
                  alert("Opening membership form...");
                  setIsExpanded(false);
                }}
                className="menu-option"
              >
                <div className="option-text">
                  <div className="option-title">DISCOVER MEMBERSHIP</div>
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
