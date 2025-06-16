import React, { useState } from 'react';
import CivGuardLayout from '../components/CivGuardLayout';
import axios from 'axios';

const CivGuardFlag = () => {
  const [caseId, setCaseId] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/flag-case`, {
        caseId,
        reason
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Flagging failed:", err);
    }
  };

  return (
    <CivGuardLayout>
      <h2 className="text-2xl font-bold mb-4 text-red-600">🚩 Flag CivGuard or Case</h2>
      {submitted ? (
        <p className="text-green-600">Your report has been submitted for DAO review.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Case or CivGuard ID"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Reason for flag/report"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
            Submit Flag
          </button>
        </form>
      )}
    </CivGuardLayout>
  );
};

export default CivGuardFlag;
