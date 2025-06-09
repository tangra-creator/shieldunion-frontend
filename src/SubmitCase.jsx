import React from 'react';
import ProposalForm from './components/ProposalForm';

function SubmitCase() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 Submit Case</h2>
      <p>This is where users will submit their case for DAO review.</p>
      <ProposalForm />
    </div>
  );
}

export default SubmitCase;
