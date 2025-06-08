import React, { useState } from "react";

const CivGuardApply = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [license, setLicense] = useState("");
  const [experience, setExperience] = useState("");

  const handleApply = (e) => {
    e.preventDefault();
    alert(`CivGuard Application Submitted:\nName: ${name}\nProfession: ${profession}`);
    // Later: Send to backend for verification + onboarding
  };

  return (
    <div>
      <h2>🛡️ CivGuard Application</h2>
      <form onSubmit={handleApply}>
        <label>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Profession:
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          License / Certification (ID or URL):
          <input
            type="text"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Years of Experience:
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Apply to CivGuard</button>
      </form>
    </div>
  );
};

export default CivGuardApply;
