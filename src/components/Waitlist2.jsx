import React, { useState } from "react";
import "../styles/waitlist2.scss";
import { Footer } from "./Footer";
import ExpandableLogoButton from "./ExpandableLogoButton";
import { Instagram } from "lucide-react";

const Waitlist2 = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Birthdate: "",
    Profession: "",
    Instagram: "",
    Ques1: "",
    Ques2: "",
    Ques3: "",
    Topsize: "",
    Bottomsize: "",
    Membership: "",
    ReferredBy: "",
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

    if (!formData.agreement) {
      alert("Please agree to the terms and conditions before submitting.");
      return;
    }

    console.log("Form submitted:", formData);
    alert(
      "Your application has been received. Our membership team will be in touch shortly",
    );
  };

  return (
    <div className="waitlist2-main">
      <ExpandableLogoButton />

      <div className="waitlist2__header">
        <h1 className="waitlist2__title">MEMBERSHIP WAITLIST APPLICATION</h1>
        <p className="waitlist2__subtitle">
          I hereby apply for a membership to Twenty 44. If accepted, I agree to
          be bound by the rules and regulations set forth to me by Twenty 44.
        </p>
      </div>

      <div className="waitlist2">
        <div className="waitlist2__container">
          <form className="waitlist2__form" onSubmit={handleSubmit}>
            <div className="waitlist2__section">
              <h2 className="waitlist2__section-title">PERSONAL INFORMATION</h2>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Full Name *</label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Email *</label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
              </div>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Phone *</label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="text"
                      value="+91"
                      disabled
                      style={{ width: "60px", backgroundColor: "#f5f5f5" }}
                      className="waitlist2__input"
                    />
                    <input
                      type="tel"
                      name="Phone"
                      value={formData.Phone}
                      onChange={handleChange}
                      className="waitlist2__input"
                      placeholder="9876543210"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      required
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Birthdate *</label>
                  <input
                    type="date"
                    name="Birthdate"
                    value={formData.Birthdate}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
              </div>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Profession *</label>
                  <input
                    type="text"
                    name="Profession"
                    value={formData.Profession}
                    onChange={handleChange}
                    className="waitlist2__input"
                    required
                  />
                </div>
                <div className="waitlist2__field">
                  <label className="waitlist2__label">LinkedIn URL</label>
                  <input
                    type="url"
                    name="Instagram"
                    value={formData.Instagram}
                    onChange={handleChange}
                    className="waitlist2__input"
                  />
                </div>
              </div>
            </div>

            <div className="waitlist2__section">
              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">
                    Why do you want to join Twenty 44? *
                  </label>
                  <textarea
                    name="Ques1"
                    value={formData.Ques1}
                    onChange={handleChange}
                    className="waitlist2__input-big"
                    rows="4"
                    style={{ outlineColor: "#2d4d31" }}
                    required
                  />
                </div>
              </div>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">
                    What do you expect from your experience at Twenty 44? *{" "}
                  </label>
                  <textarea
                    name="Ques2"
                    value={formData.Ques2}
                    onChange={handleChange}
                    className="waitlist2__input-big"
                    rows="4"
                    required
                    style={{ outlineColor: "#2d4d31" }}
                  />
                </div>
              </div>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">
                    How would you describe the lifestyle you're looking to build
                    with Twenty 44? *{" "}
                  </label>
                  <textarea
                    name="Ques3"
                    value={formData.Ques3}
                    onChange={handleChange}
                    className="waitlist2__input-big"
                    rows="4"
                    style={{ outlineColor: "#2d4d31" }}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="waitlist2__section">
              <h2 className="waitlist2__section-title">APPAREL SIZING</h2>

              <div className="waitlist2__row">
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Top Size *</label>
                  <select
                    name="Topsize"
                    value={formData.Topsize}
                    onChange={handleChange}
                    className="waitlist2__select"
                    required
                  >
                    <option value="">Select size</option>
                    <option value="XXL">XXL</option>
                    <option value="XL">XL</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                    <option value="XS">XS</option>
                  </select>
                </div>
                <div className="waitlist2__field">
                  <label className="waitlist2__label">Bottom Size *</label>
                  <select
                    name="Bottomsize"
                    value={formData.Bottomsize}
                    onChange={handleChange}
                    className="waitlist2__select"
                    required
                  >
                    <option value="">Select size</option>
                    <option value="XXL">XXL</option>
                    <option value="XL">XL</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                    <option value="XS">XS</option>
                  </select>
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
                  name="Membership"
                  value={formData.Membership}
                  onChange={handleChange}
                  className="waitlist2__select"
                  required
                >
                  <option value="">Select a membership type</option>
                  <option value="individual">The Twenty Membership</option>
                  <option value="family">The Forty Four Membership</option>
                </select>
              </div>

              <div className="waitlist2__field waitlist2__field--full">
                <label className="waitlist2__label">
                  How did you hear about us? *
                </label>
                <select
                  name="ReferredBy"
                  value={formData.ReferredBy}
                  onChange={handleChange}
                  className="waitlist2__select"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Ads">Ads</option>
                  <option value="Friends">Friends</option>
                </select>
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

            <button type="submit" className="waitlist2__submit">
              SUBMIT APPLICATION
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Waitlist2;
