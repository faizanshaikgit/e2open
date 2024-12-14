import React, { useState } from "react";
import java from "./Assests/java.jpg";
import springboot from "./Assests/springboot.png";
import fullstack from "./Assests/fullsatck.png";

function Home() {
  // State for toggling the FAQ answers
  const [faqState, setFaqState] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
  });

  const toggleFaq = (faq) => {
    setFaqState((prevState) => ({
      ...prevState,
      [faq]: !prevState[faq], // Toggle the specific FAQ
    }));
  };

  return (
    <div
      style={{
        backgroundColor: "#ffb6c1", // Baby pink background
        minHeight: "100vh", // Ensures it spans the full viewport height
        paddingTop: "80px", // Adjust padding to position below the header
        display: "flex",
        flexDirection: "column", // Stack the content vertically
        justifyContent: "flex-start",
        alignItems: "center", // Center content horizontally
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "3rem", // Big text for emphasis
          fontWeight: "bold",
          fontFamily: "'Arial', sans-serif",
          color: "white", // White text for contrast
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", // Subtle shadow for readability
          marginBottom: "40px", // Add a gap below the text
        }}
      >
        "Empowering Youth, Shaping Tomorrow"
        <p
          style={{
            fontSize: "20px",
            marginTop: "20px",
            color: "black",
          }}
        >
          "Our aim is to provide free, high-quality training for students, equipping them with valuable skills & Certifications to empower their future."
        </p>
      </div>

      {/* Card Section */}
      <div
        style={{
          display: "flex",
          gridTemplateColumns: "repeat(3, 1fr)", // Create 3 equal columns
          gap: "30px", // Gap between the cards
          width: "80%", // Container width
          justifyContent: "center",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <img
            src={java} // Java image
            alt="Java"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <h3 style={{ padding: "10px", fontSize: "1.2rem", color: "#333" }}>
            Java
          </h3>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <img
            src={springboot} // Spring Boot image
            alt="Spring Boot"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <h3 style={{ padding: "10px", fontSize: "1.2rem", color: "#333" }}>
            Spring Boot
          </h3>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <img
            src={fullstack} // Full Stack image
            alt="Full Stack"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <h3 style={{ padding: "10px", fontSize: "1.2rem", color: "#333" }}>
            Full Stack
          </h3>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        style={{
          width: "80%",
          marginTop: "50px",
          marginBottom: "50px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
          Frequently Asked Questions
        </h2>

        {/* FAQ Question 1 */}
        <div
          onClick={() => toggleFaq("faq1")}
          style={{
            cursor: "pointer",
            padding: "10px",
            borderBottom: "1px solid #ddd",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          + Will the classes be held online or offline?
        </div>
        {faqState.faq1 && (
          <div
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              color: "#555",
            }}
          >
            Classes will be conducted exclusively online, ensuring flexibility and convenience for all learners
          </div>
        )}

        {/* FAQ Question 2 */}
        <div
          onClick={() => toggleFaq("faq2")}
          style={{
            cursor: "pointer",
            padding: "10px",
            borderBottom: "1px solid #ddd",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          +Is there a fee for the training
        </div>
        {faqState.faq2 && (
          <div
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              color: "#555",
            }}
          >
            No, the training is completely free, ensuring equal opportunities for all aspiring learners.
          </div>
        )}

        {/* FAQ Question 3 */}
        <div
          onClick={() => toggleFaq("faq3")}
          style={{
            cursor: "pointer",
            padding: "10px",
            borderBottom: "1px solid #ddd",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          + Will it affect our college timings
        </div>
        {faqState.faq3 && (
          <div
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              color: "#555",
            }}
          >
            No, the classes are scheduled on weekends, allowing you to manage both your studies and training effectively
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
