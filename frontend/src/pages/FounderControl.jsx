// src/pages/FounderControl.jsx

import React, { useState } from 'react';

const FounderControl = () => {
  const [percentage, setPercentage] = useState(25);
  const [message, setMessage] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();

    if (percentage < 25 || percentage > 51) {
      setMessage('❌ Founder earnings must be between 25% and 51%.');
      return;
    }

    // Later: Send update to secure backend or DAO
    setMessage(`✅ Updated founder earnings to ${percentage}%.`);
  };

  return (
    <div>
      <h2>👑 Founder Control Panel</h2>
      <p>This panel is restricted to the ShieldUnion founder only (Tangra).</p>

      <form onSubmit={handleUpdate}>
        <label>
          Adjust Founder Earnings (%):
          <input
            type="number"
            value={percentage}
            min="25"
            max="51"
            onChange={(e) => setPercentage(parseInt(e.target.value))}
            required
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>

      {message && <p>{message}</p>}

      <hr />
      <p>💰 Treasury Balance (read-only):</p>
      <p>Example: £104,000 (locked by DAO)</p>
    </div>
  );
};

export default FounderControl;
