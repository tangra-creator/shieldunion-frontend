import React, { useState } from "react";

const SubmitCase = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [evidence, setEvidence] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Case submitted:\nTitle: ${title}\nDetails: ${details}`);
    // Later: Send to DAO + trigger alert system
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    }}>
      <h2>🚨 Submit Urgent Protection Case</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Case Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <br />
        <label>
          Case Details:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={5}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          ></textarea>
        </label>
        <br />
        <label>
          Upload Evidence (optional):
          <input
            type="file"
            onChange={(e) => setEvidence(e.target.files[0])}
            style={{ marginBottom: "10px" }}
          />
        </label>
        <br />
        <button type="submit">Submit Case</button>
      </form>
    </div>
  );
};

export default SubmitCase;
