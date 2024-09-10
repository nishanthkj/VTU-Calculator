"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

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
    width: "100%",
  },
  section: {
    width: "90%",
    maxWidth: "800px",
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
  },
  gap: {
    marginBottom: "15px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: "10px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: "10px",
    flexWrap: "wrap",
  },
  input: {
    padding: "5px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    textAlign: "center",
    color: "#000",
    flex: "1 1 auto",
    minWidth: "60px",
  },
  smallInput: {
    flex: "1 1 20%",
  },
  marksInput: {
    flex: "1 1 20%",
  },
  subjectNameInput: {
    flex: "2 1 40%",
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
    width: "100%",
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
    fontSize: "24px",
    color: "#000000",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "bold",
    paddingBottom: "20px",
  },
  addButton: {
    margin: "20px 0",
  },
  removeButton: {
    color: "#ff0000",
    cursor: "pointer",
    fontSize: "20px",
    marginLeft: "10px",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    color: "#333",
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
  formulaSection: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    textAlign: "left",
  },
  formulaText: {
    fontSize: "16px",
    color: "#333",
  },
};

// Media Queries for responsiveness
const mediaQueries = {
  "@media (max-width: 768px)": {
    inputGroup: {
      flexDirection: "column",
      gap: "5px",
    },
    smallInput: {
      flex: "1 1 100%",
    },
    marksInput: {
      flex: "1 1 100%",
    },
    subjectNameInput: {
      flex: "1 1 100%",
    },
    removeButton: {
      width: "24px",
      height: "24px",
    },
  },
};

// Function to convert percentage to grade points
const getGradePoint = (percentage) => {
  if (percentage >= 90) return 10;
  if (percentage >= 80) return 9;
  if (percentage >= 70) return 8;
  if (percentage >= 60) return 7;
  if (percentage >= 55) return 6;
  if (percentage >= 50) return 5;
  if (percentage >= 40) return 4;
  return 0;
};

// Function to get grade based on percentage
const getGrade = (percentage) => {
  if (percentage >= 90) return "O";
  if (percentage >= 80) return "A+";
  if (percentage >= 70) return "A";
  if (percentage >= 60) return "B+";
  if (percentage >= 55) return "B";
  if (percentage >= 50) return "C";
  if (percentage >= 40) return "P";
  return "F";
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
    calculateSGPA(); // Recalculate SGPA on any input change
  };

  // Add a new subject input at the top
  const addSubject = () => {
    setSubjects([{ name: "", credits: "", marks: "" }, ...subjects]);
  };

  // Remove a subject input
  const removeSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
    calculateSGPA(); // Recalculate SGPA on subject removal
  };

  // Function to calculate SGPA
  const calculateSGPA = () => {
    let weightedSum = 0;
    let totalCredits = 0;

    subjects.forEach((subject) => {
      const credits = parseFloat(subject.credits) || 0;
      const marks = parseFloat(subject.marks) || 0;
      const gradePoint = getGradePoint(marks);

      weightedSum += gradePoint * credits;
      totalCredits += credits;
    });

    const sgpa = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : 0;
    setResult(sgpa);
    setTotalMarks(weightedSum);
    setTotalCredits(totalCredits);
  };

  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h2 style={styles.h2}>Custom SGPA Calculator</h2>

        {/* Input fields for subjects */}
        {subjects.map((subject, index) => (
          <div key={index} style={styles.subjectContainer}>
            <div style={styles.inputGroup}>
              <input
                type="text"
                style={{ ...styles.input, ...styles.subjectNameInput }}
                placeholder="Subject Name"
                value={subject.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
              <input
                type="number"
                style={{ ...styles.input, ...styles.smallInput }}
                placeholder="Credits"
                value={subject.credits}
                onChange={(e) => handleChange(index, "credits", e.target.value)}
                min="0"
              />
              <input
                type="number"
                style={{ ...styles.input, ...styles.marksInput }}
                placeholder="Marks"
                value={subject.marks}
                onChange={(e) => handleChange(index, "marks", e.target.value)}
                min="0"
                max="100"
              />
              {subjects.length > 1 && (
                <MdDelete
                  style={styles.removeButton}
                  onClick={() => removeSubject(index)}
                />
              )}
            </div>
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
              <th style={styles.tableCell}>Grade Points</th>
              <th style={styles.tableCell}>Grade</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{subject.name}</td>
                <td style={styles.tableCell}>{subject.credits}</td>
                <td style={styles.tableCell}>{subject.marks}</td>
                <td style={styles.tableCell}>{getGradePoint(subject.marks)}</td>
                <td style={styles.tableCell}>{getGrade(subject.marks)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Display Calculation Details */}
        <div style={styles.calculationDetails}>
          <div style={styles.calculationText}>
            <strong>Total Marks: </strong>
            {totalMarks}
          </div>
          <div style={styles.calculationText}>
            <strong>Total Credits: </strong>
            {totalCredits}
          </div>
          <div style={styles.calculationText}>
            <strong>SGPA: </strong>
            {result}
          </div>
        </div>

        {/* Display Formula Section */}
        <div style={styles.formulaSection}>
          <div style={styles.formulaText}>
            <strong>SGPA Formula:</strong>
          </div>
          <div style={styles.formulaText}>
            SGPA = (Sum of (Grade Points × Credits)) / (Total Credits)
          </div>
          <div style={styles.formulaText}>Where:</div>
          <div style={styles.formulaText}>
            - Grade Points are calculated based on marks obtained.
          </div>
          <div style={styles.formulaText}>
            - Credits are the credit hours of the subject.
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomSGPACalculator;
