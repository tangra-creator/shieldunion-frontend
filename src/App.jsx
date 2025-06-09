// src/SubmitCase.jsx
import React from 'react';
import ProposalForm from './components/ProposalForm';

function SubmitCase() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 Submit Case</h2>
      <p>This is where users will submit their case for DAO review.</p>

      {/* Example form (non-functional placeholder for now) */}
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Case Title:</label>
          <input type="text" placeholder="Enter case title" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Description:</label>
          <textarea placeholder="Describe the case..." style={{ width: '100%' }}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitCase;
