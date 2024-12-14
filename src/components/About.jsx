import React from "react";

function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffb6c1", // Baby pink background
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Gradient border colors
          padding: "3px", // Border thickness
          // borderRadius: "15px", // Smooth rounded corners
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        }}
      >
        <div
          style={{
            backgroundColor: "white", // Inner content background
            padding: "20px",
            // borderRadius: "12px", // Match border radius for consistency
            textAlign: "center",
            maxWidth: "600px",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Enhance your future with skills like mock interviews, live project
          experience, DSA preparation, group discussions, and much more. We
          also offer internships with stipends to provide real-world exposure.
          Join us today to build a brighter tomorrow!
        </div>
      </div>
    </div>
  );
}

export default About;
