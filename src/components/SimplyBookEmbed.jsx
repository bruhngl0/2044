import React from "react";

// The Booking URL provided in your original request (or a similar one from your Zoho Bookings account)
const ZOHO_BOOKINGS_URL =
  "https://twenty44.zohobookings.in/portal-embed#/357663000000039076";

const SimplyBookEmbed = () => {
  return (
    <div
      className="zoho-bookings-container"
      style={{
        width: "100vw",
        // Set a definite height for the booking portal to be fully visible
        height: "800px",
        overflow: "auto",
      }}
    >
      {/* Zoho Bookings is typically embedded via a direct iframe.
        It handles all the rendering and payment steps internally.
      */}
      <iframe
        width="100%"
        height="100%" // Use 100% height to fill the parent container's 800px
        src={ZOHO_BOOKINGS_URL}
        frameBorder="0"
        allowFullScreen={true}
        title="Zoho Bookings Portal"
        style={{ border: "none" }} // Optional: removes the default iframe border
      ></iframe>
    </div>
  );
};

export default SimplyBookEmbed;
