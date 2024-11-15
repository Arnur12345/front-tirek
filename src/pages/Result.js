import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    return <p>No results available. Please complete the questionnaire first.</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Analysis Result</h1>
      <p style={styles.text}><strong>Mental State:</strong> {result.mental_state}</p>
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    maxWidth: "600px",
    margin: "30px auto",
    padding: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
  },
  heading: {
    textAlign: "center",
    color: "#1a73e8",
    fontSize: "2rem",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "20px",
  },
};

export default Result;
