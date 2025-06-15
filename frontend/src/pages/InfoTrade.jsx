// src/pages/InfoTrade.jsx

import React, { useState } from 'react';

const InfoTrade = () => {
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: Submit to backend or encrypted IPFS
    alert(`Information submitted for review. Price: £${price}`);
    setSubmitted(true);
    setInfo('');
    setPrice('');
  };

  return (
    <div>
      <h2>🕵️ InfoTrade Market</h2>
      <p>Submit classified info securely. DAO will validate and approve protected trades.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Information (brief):
            <textarea
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              required
              placeholder="Describe the intel briefly (no names)"
            />
          </label>
          <br />
          <label>
            Desired price (£):
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min="1"
            />
          </label>
          <br />
          <button type="submit">Submit Info</button>
        </form>
      ) : (
        <p>✅ Info submitted successfully. Pending DAO review.</p>
      )}
    </div>
  );
};

export default InfoTrade;
