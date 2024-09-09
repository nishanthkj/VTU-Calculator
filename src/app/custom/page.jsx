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
    width: "100%", // Full width of the viewport
  },
  section: {
    width: "90%", // Adjust width to be a percentage of the container
    maxWidth: "800px", // Maximum width for larger screens
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
  },
  gap: {
    marginBottom: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    textAlign: "center",
    width: "calc(100% - 22px)", // Full width minus padding and borders
    color: "#000", // Black color for input text
  },
  smallInput: {
    width: "80px", // Adjust width for smaller credit input
    fontSize: "14px", // Smaller font size for credits
    marginRight: "10px", // Space between credits and other inputs
    color: "#000", // Black color for input text
  },
  marksInput: {
    width: "80px", // Adjust width for smaller marks input
    fontSize: "14px", // Smaller font size for marks
    marginRight: "10px", // Space between marks and other inputs
    color: "#000", // Black color for input text
  },
  subjectNameInput: {
    width: "calc(100% - 22px)", // Full width minus padding and borders
    fontSize: "18px", // Medium font size for subject name
    marginRight: "10px",
    color: "#000", // Black color for input text
  },
  subjectContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  subjectHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5px",
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
  addButton: {
    margin: "20px 0", // Added margin to the top and bottom
  },
  removeButton: {
    color: "#ff0000",
    cursor: "pointer",
    padding: "5px 10px",
    fontSize: "14px",
    border: "1px solid #ff0000",
    borderRadius: "4px",
    backgroundColor: "#ffffff",
    marginLeft: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  tableHeader: {
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
  },
  tableCell: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center",
    color: "#333", // Dark grey color for table text
  },
  calculationDetails: {
    marginTop: "20px",
    textAlign: "left",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
  },
  calculationText: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "10px",
  },
};

function CustomSGPACalculator() {
  const [subjects, setSubjects] = useState([
    { name: "", credits: "", marks: "" },
  ]);
  const [result, setResult] = useState("");
  const [totalMarks, setTotalMarks] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);
  const [buttonHovered, setButtonHovered] = useState(false);

  // Handle input changes
  const handleChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = { ...updatedSubjects[index], [field]: value };
    setSubjects(updatedSubjects);
  };

  // Add a new subject input at the top
  const addSubject = () => {
    setSubjects([{ name: "", credits: "", marks: "" }, ...subjects]);
  };

  // Remove a subject input
  const removeSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  // Function to calculate SGPA
  const calculateSGPA = () => {
    let totalMarks = 0;
    let totalCredits = 0;

    subjects.forEach((subject) => {
      const marks = parseInt(subject.marks) || 0;
      const credits = parseInt(subject.credits) || 0;
      totalMarks += marks * credits;
      totalCredits += credits;
    });

    const sgpa = totalCredits > 0 ? (totalMarks / totalCredits).toFixed(2) : 0;
    setResult(sgpa);
    setTotalMarks(totalMarks);
    setTotalCredits(totalCredits);
  };

  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h2 style={styles.h2}>Custom SGPA Calculator</h2>

        {subjects.map((subject, index) => (
          <div key={index} style={styles.subjectContainer}>
            <input
              type="text"
              style={{ ...styles.input, ...styles.subjectNameInput }}
              placeholder="Subject Name"
              value={subject.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
            />
            <input
              type="number"
              style={{ ...styles.input, ...styles.smallInput }}
              placeholder="Credits"
              value={subject.credits}
              onChange={(e) => handleChange(index, 'credits', e.target.value)}
              min="0"
            />
            <input
              type="number"
              style={{ ...styles.input, ...styles.marksInput }}
              placeholder="Marks"
              value={subject.marks}
              onChange={(e) => handleChange(index, 'marks', e.target.value)}
              min="0"
              max="100"
            />
            {subjects.length > 1 && (
              <div
                style={styles.removeButton}
                onClick={() => removeSubject(index)}
              >
                Remove
              </div>
            )}
          </div>
        ))}

        {/* Add Subject Button */}
        <button
          style={{ ...styles.button, ...styles.addButton }}
          onClick={addSubject}
        >
          Add Subject
        </button>

        {/* Calculate SGPA Button */}
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

        {/* Display Subjects Table */}
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableCell}>Subject Name</th>
              <th style={styles.tableCell}>Credits</th>
              <th style={styles.tableCell}>Marks</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{subject.name}</td>
                <td style={styles.tableCell}>{subject.credits}</td>
                <td style={styles.tableCell}>{subject.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Display Calculation Details */}
        <div style={styles.calculationDetails}>
          <div style={styles.calculationText}>
            <strong>Total Marks: </strong>{totalMarks}
          </div>
          <div style={styles.calculationText}>
            <strong>Total Credits: </strong>{totalCredits}
          </div>
          <div style={styles.calculationText}>
            <strong>SGPA: </strong>{result}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomSGPACalculator;
