import React, { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const CivGuardFlag = () => {
  const [caseId, setCaseId] = useState('');
  const [reason, setReason] = useState('');
  const [severity, setSeverity] = useState('medium');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/api/civguard/flag`, {
        caseId,
        reason,
        severity,
      });
      setMessage('✅ Case flagged successfully for DAO review.');
      setCaseId('');
      setReason('');
      setSeverity('medium');
    } catch (err) {
      console.error('Flagging failed:', err);
      setMessage('❌ Could not flag the case. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-700">🚨 Flag a High-Risk Case</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Case ID</label>
          <input
            type="text"
            placeholder="Enter Case ID"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Reason for Flagging</label>
          <textarea
            placeholder="e.g. Threat level, corruption, danger to life"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Severity</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Flag Case
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-center font-medium ${message.includes('❌') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>{/* your routes */}</Routes>
      <Footer />
    </>
  );
}


export default CivGuardFlag;
