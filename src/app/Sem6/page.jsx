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
    backgroundColor: "#ffffff", // Set background color to white
  },
  section: {
    width: "100%",
    maxWidth: "600px", // Adjusted for additional space
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
    fontSize: "24px", // Adjust this value to increase or decrease font size
    color: "#000000", // Black color
    fontFamily: "'Arial', sans-serif", // Change to your desired font family
    fontWeight: "bold", // Adjust font weight if needed
    paddingBottom: "20px", // Add padding to the bottom (adjust as needed)
  },
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
    const s1 = parseInt(scores.s1) || 0;
    const s2 = parseInt(scores.s2) || 0;
    const s3 = parseInt(scores.s3) || 0;
    const s4 = parseInt(scores.s4) || 0;
    const s5 = parseInt(scores.s5) || 0;
    const s6 = parseInt(scores.s6) || 0;
    const s7 = parseInt(scores.s7) || 0;
    const s8 = parseInt(scores.s8) || 0;

    const r = parseFloat(
      (s1 * 3 + s2 * 4 + s3 * 3 + s4 * 3 + s5 * 3 + s6 * 1 + s7 * 2 + s8 * 1) /
      (3 + 4 + 3 + 3 + 3 + 1 + 2 + 1) // Sum of all credits
    );

    setResult(r.toFixed(2)); // Set the calculated SGPA
  };

  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h2 style={styles.h2}>Sem 6</h2> {/* Updated the h2 tag */}

        {/* Subject 1 */}
        <div style={styles.gap}>
          <input
            type="number"
            id="s1"
            style={styles.input}
            placeholder="21XX61 - 3 Credits"
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
            placeholder="21XX62 - 4 Credits"
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
            placeholder="21XX63 - 3 Credits"
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
            placeholder="21XX64x - 3 Credits"
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
            placeholder="21XX65x - 3 Credits"
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
            placeholder="21XXL66 - 1 Credit"
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
            placeholder="21XXMP67 - 2 Credits"
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
            placeholder="21XX68x - 1 Credit"
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

export default SEM1;
