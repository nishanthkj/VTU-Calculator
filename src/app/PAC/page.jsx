"use client";
import React, { useState } from "react";

// CSS Styles as a JavaScript object
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#ffffff", // White background color
  },
  section: {
    width: "100%",
    maxWidth: "500px",
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
  },
  gap: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  resultDisplay: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#d4edda",
    color: "#155724",
    textAlign: "center",
  },
  h2: {
    fontSize: "24px",
    color: "#000000",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "bold",
    paddingBottom: "30px",
  }
};

function SEM1() {
  const [scores, setScores] = useState({
    s1: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: "",
  });

  const [result, setResult] = useState(""); // To store the calculated SGPA
  const [buttonHovered, setButtonHovered] = useState(false); // To handle button hover

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 100)) {
      setScores({
        ...scores,
        [id]: value,
      });
    }
  };

  // Function to calculate SGPA
  const calculateSGPA = () => {
    const credits = {
      s1: 3,
      s2: 3,
      s3: 3,
      s4: 3,
      s5: 3,
      s6: 1,
      s7: 1,
      s8: 2,
      s9: 1
    };

    const totalCredits = Object.values(credits).reduce((acc, credit) => acc + credit, 0);

    const weightedSum = 
      (parseInt(scores.s1) || 0) * credits.s1 +
      (parseInt(scores.s2) || 0) * credits.s2 +
      (parseInt(scores.s3) || 0) * credits.s3 +
      (parseInt(scores.s4) || 0) * credits.s4 +
      (parseInt(scores.s5) || 0) * credits.s5 +
      (parseInt(scores.s6) || 0) * credits.s6 +
      (parseInt(scores.s7) || 0) * credits.s7 +
      (parseInt(scores.s8) || 0) * credits.s8 +
      (parseInt(scores.s9) || 0) * credits.s9;

    const sgpa = weightedSum / totalCredits;
    setResult(sgpa.toFixed(2)); // Set the calculated SGPA
  };

  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h2 style={styles.h2}>Physics and Chemistry Cycle</h2>

        {/* Subject 1 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s1"
            style={styles.input}
            placeholder="21MAT11 / 21MAT21 (3 credits)"
            value={scores.s1}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* Subject 2 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s2"
            style={styles.input}
            placeholder="21PHY12 / 21CHE22 (3 credits)"
            value={scores.s2}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* Subject 3 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s3"
            style={styles.input}
            placeholder="21ELE13 / 21PSP23 (3 credits)"
            value={scores.s3}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* Subject 4 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s4"
            style={styles.input}
            placeholder="21CIV14 / 21ELN24 (3 credits)"
            value={scores.s4}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* Subject 5 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s5"
            style={styles.input}
            placeholder="21EGDL15 / 21EME25 (3 credits)"
            value={scores.s5}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* Subject 6 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s6"
            style={styles.input}
            placeholder="21PHYL16 / 21CHEL26 (1 credit)"
            value={scores.s6}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* Subject 7 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s7"
            style={styles.input}
            placeholder="21ELEL17 / 21CPL27 (1 credit)"
            value={scores.s7}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* Subject 8 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s8"
            style={styles.input}
            placeholder="21EGH18 / 21EGH28 (2 credits)"
            value={scores.s8}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* Subject 9 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s9"
            style={styles.input}
            placeholder="21IDT19 / 21SFH29 (1 credit)"
            value={scores.s9}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* Result Section */}
        <div style={styles.gap}>
          <button
            style={{
              ...styles.button,
              ...(buttonHovered ? styles.buttonHover : {}),
            }}
            onClick={calculateSGPA}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            Calculate SGPA
          </button>
        </div>

        {/* Display result */}
        {result && (
          <div style={styles.gap}>
            <input
              type="text"
              id="answer"
              value={result}
              readOnly
              style={styles.resultDisplay}
            />
          </div>
        )}
      </section>
    </div>
  );
}

export default SEM1;
