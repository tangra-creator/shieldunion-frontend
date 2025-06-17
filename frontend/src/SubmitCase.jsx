import React, { useState } from "react";

const SubmitCase = () => {
  const [caseData, setCaseData] = useState({
    title: "",
    description: "",
    riskLevel: "standard", // can be "standard" or "life-risk"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCaseData({ ...caseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      const response = await fetch(`${API}/api/submit-case`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(caseData),
});


      if (response.ok) {
        setMessage("Case submitted successfully.");
        setCaseData({ title: "", description: "", riskLevel: "standard" });
      } else {
        const err = await response.json();
        setMessage(err.message || "Submission failed.");
      }
    } catch (error) {
      setMessage("Error connecting to server.");
    }
  };

  return (
    <div>
      <h2>Submit Case for Protection</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={caseData.title} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={caseData.description} onChange={handleChange} required />

        <label>Risk Level:</label>
        <select name="riskLevel" value={caseData.riskLevel} onChange={handleChange}>
          <option value="standard">Standard</option>
          <option value="life-risk">Life-Risk (Tier 1)</option>
        </select>

        <button type="submit">Submit Case</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default SubmitCase;
