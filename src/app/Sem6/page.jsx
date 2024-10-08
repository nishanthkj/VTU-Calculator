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
    backgroundColor: "#ffffff",
  },
  section: {
    width: "100%",
    maxWidth: "600px",
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
    color: "black",
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
    paddingBottom: "20px",
  },
};

function SEM6() {
  const [scores, setScores] = useState({
    s1: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
  });

  const [result, setResult] = useState(""); // To store the calculated SGPA
  const [buttonHovered, setButtonHovered] = useState(false); // To handle button hover

  const credits = {
    s1: 3, // Example credits
    s2: 4,
    s3: 3,
    s4: 3,
    s5: 3,
    s6: 1,
    s7: 2,
    s8: 1,
  };

  // Function to convert percentage to grade points
  const getGradePoint = (percentage) => {
    if (percentage >= 90) return 10; // O grade
    if (percentage >= 80) return 9;  // A+ grade
    if (percentage >= 70) return 8;  // A grade
    if (percentage >= 60) return 7;  // B+ grade
    if (percentage >= 55) return 6;  // B grade
    if (percentage >= 50) return 5;  // C grade
    if (percentage >= 40) return 4;  // P grade
    return 0;  // F grade
  };

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
    const weightedSum = 
      getGradePoint(parseInt(scores.s1) || 0) * credits.s1 +
      getGradePoint(parseInt(scores.s2) || 0) * credits.s2 +
      getGradePoint(parseInt(scores.s3) || 0) * credits.s3 +
      getGradePoint(parseInt(scores.s4) || 0) * credits.s4 +
      getGradePoint(parseInt(scores.s5) || 0) * credits.s5 +
      getGradePoint(parseInt(scores.s6) || 0) * credits.s6 +
      getGradePoint(parseInt(scores.s7) || 0) * credits.s7 +
      getGradePoint(parseInt(scores.s8) || 0) * credits.s8;

    const totalCredits = Object.values(credits).reduce((acc, credit) => acc + credit, 0);
    const sgpa = weightedSum / totalCredits;

    setResult(sgpa.toFixed(2)); // Set the calculated SGPA
  };

  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h2 style={styles.h2}>Sem 6</h2>

        {/* Subject 1 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s1"
            style={styles.input}
            placeholder="21XX11 - 3 Credits"
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
            placeholder="21XX12 - 4 Credits"
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
            placeholder="21XX13 - 3 Credits"
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
            placeholder="21XX14 - 3 Credits"
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
            placeholder="21XX15 - 3 Credits"
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
            placeholder="21XX16 - 1 Credit"
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
            placeholder="21XX17 - 2 Credits"
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
            placeholder="21XX18 - 1 Credit"
            value={scores.s8}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        {/* Calculate Button */}
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

export default SEM6;
