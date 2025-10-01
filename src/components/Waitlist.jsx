import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/waitlist.scss";
import { useNavigate } from "react-router-dom";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    birthdate: "",
    profession: "",
    membership: "",
    join2044: "",
    experience2044: "",
    lifestyle2044: "",
    topSize: "",
    bottomSize: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: digitsOnly,
      }));
    } else if (name === "heardFrom" && value !== "OTHER") {
      // Clear heardFromOther if heardFrom is not "OTHER"
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        heardFromOther: "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://stillcircle.adityashrm500.workers.dev/api/v1/third-house",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            hasPastRetreat: formData.hasPastRetreat === "YES",
            wantsFutureUpdates: formData.wantsFutureUpdates === "YES",
            joinMountainWalk: formData.joinMountainWalk === "YES",
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        navigate("/contact");
      } else {
        toast.error(data.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="user-details-container">
        <ToastContainer />
        <form onSubmit={handleSubmit} className="user-details-form">
          <div className="detail-logo-div">
            <img src="2044.svg" className="detail-logo" />
          </div>
          <div className="detail-text">
            <p className="detail1-text1">Join the Waitlist.</p>
            <p className="detail2-text2">
              Please tell us a bit about yourself so we can review your request
              to join the waitlist.
            </p>
          </div>
          <div className="form-group">
            <div>Name</div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <div>Email*</div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <div>Phone*</div>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number - eg (9419112345)"
              value={formData.phoneNumber}
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <div>Birthdate*</div>
            <input
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
              required
              placeholder="dd/mm/yy"
            />
          </div>
          <div className="form-group">
            <div>Profession</div>
            <input
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <div>Please list current memberships</div>
            <input
              id="membership"
              name="membership"
              value={formData.membership}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <div>Why do you want to join Twenty44?</div>
            <input
              id="join2044"
              name="join2044"
              value={formData.join2044}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <div>What do you expect from your experience at Twenty44?</div>
            <input
              id="experience2044"
              name="experience2044"
              value={formData.experience2044}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <div>
              {" "}
              How would you describe the lifestyle you’re looking to build with
              Twenty44?
            </div>
            <input
              id="lifestyle2044"
              name="lifestyle2044"
              value={formData.lifestyle2044}
              onChange={handleInputChange}
              required
            />
          </div>
          <div> Apparel Sizing:</div>
          <div className="form-group">
            <div>Top Size:</div>
            <select
              id="topSize"
              name="topSize"
              value={formData.topSize}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                select...
              </option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div className="form-group">
            <div>Bottom size:</div>
            <select
              id="bottomSize"
              name="bottomSize"
              value={formData.bottomSize}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                select...
              </option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div className="user-btn">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;
