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
    <div>
      <h2>🚨 Submit Urgent Protection Case</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Case Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
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
          ></textarea>
        </label>
        <br />
        <label>
          Upload Evidence (optional):
          <input
            type="file"
            onChange={(e) => setEvidence(e.target.files[0])}
          />
        </label>
        <br />
        <button type="submit">Submit Case</button>
      </form>
    </div>
  );
};

export default SubmitCase;
