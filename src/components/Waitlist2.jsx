import React, { useState } from "react";
import "../styles/waitlist2.scss";
import { Footer } from "./Footer";
import ExpandableLogoButton from "./ExpandableLogoButton";

const Waitlist2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    birthdate: "",
    profession: "",
    company: "",
    linkedInUrl: "",
    location: "",
    member: "",
    values: "",
    referredBy: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="waitlist2-main">
      <ExpandableLogoButton />
      <div className="waitlist2">
        <div className="waitlist2__container">
          <div className="waitlist2__header">
            <h1 className="waitlist2__title">MEMBERSHIP APPLICATION</h1>
            <p className="waitlist2__subtitle">
              I hereby apply for a membership to Reserve. If accepted, I agree
              to be bound by the rules and regulations set forth to me by
              Reserve.
            </p>
            <p className="waitlist2__notice">
              All sections must be completed in order for this application to be
              accepted.
            </p>
          </div>

          <div className="waitlist2__form">
            <div className="waitlist2__section">
              <h2 className="waitlist2__section-title">PERSONAL INFORMATION</h2>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">First Name *</label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Address *</label>
                  <input
                    type="text"
                    name="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
              </div>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Email *</label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.email}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Phone *</label>
                  <input
                    type="text"
                    name="Address"
                    value={formData.phone}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
              </div>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Birthdate *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.birthdate}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
                <div className="waitlist2__field">
                  <label className="waitlist2__label">profession *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.profession}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="waitlist2__section">
              <div className="waitlist2__field waitlist2__field--full">
                <label className="waitlist2__label">Company *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.company}
                  onChange={handleChange}
                  className="waitlist2__input"
                  required
                />
              </div>

              <div className="waitlist2__field waitlist2__field--full">
                <label className="waitlist2__label">linkedIn *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.linkedInUrl}
                  onChange={handleChange}
                  className="waitlist2__input"
                  required
                />
              </div>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">
                    Why are you intrested in becoming a member *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.me}
                    onChange={handleChange}
                    className="waitlist2__input-big"
                    required
                  />
                </div>
              </div>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">
                    Why are you intrested in becoming a member *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.me}
                    onChange={handleChange}
                    className="waitlist2__input-big"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="waitlist2__section">
              <h2 className="waitlist2__section-title">EMERGENCY CONTACT</h2>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Contact Name *</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Contact Phone *</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="waitlist2__section">
              <h2 className="waitlist2__section-title">MEMBERSHIP DETAILS</h2>

              <div className="waitlist2__field waitlist2__field--full">
                <label className="waitlist2__label">
                  Preferred Membership Type *
                </label>
                <select
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  className="waitlist2__select"
                  required
                >
                  <option value="">Select a membership type</option>
                  <option value="individual">Individual Membership</option>
                  <option value="family">Family Membership</option>
                  <option value="corporate">Corporate Membership</option>
                </select>
              </div>

              <div className="waitlist2__field waitlist2__field--full">
                <label className="waitlist2__label">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleChange}
                  className="waitlist2__input"
                />
              </div>
            </div>

            <div className="waitlist2__agreement">
              <label className="waitlist2__checkbox-label">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  className="waitlist2__checkbox"
                  required
                />
                <span>
                  I agree to the terms and conditions and understand that all
                  information provided is accurate and complete. *
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="waitlist2__submit"
            >
              SUBMIT APPLICATION
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Waitlist2;
