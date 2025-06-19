import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const CivGuardReview = () => {
  const [cases, setCases] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchFlaggedCases = async () => {
      try {
        const res = await axios.get(`${API}/api/civguard/flagged`);
        setCases(res.data || []);
      } catch (err) {
        console.error('Failed to fetch flagged cases:', err);
      }
    };

    fetchFlaggedCases();
  }, []);

  const handleDecision = async (id, action) => {
    try {
      await axios.post(`${API}/api/civguard/decision`, { id, action });
      setCases((prev) => prev.filter((c) => (c.id || c._id) !== id));
      setMessage(`✅ Case ${id} marked as '${action}'`);
    } catch (err) {
      console.error('Decision failed:', err);
      setMessage('❌ Could not process decision.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">🚨 CivGuard Flag Review</h2>

      {message && <p className="text-center text-blue-600 mb-4">{message}</p>}

      {cases.length === 0 ? (
        <p className="text-center text-gray-500">No flagged cases pending review.</p>
      ) : (
        cases.map((item) => {
          const caseId = item.id || item._id;
          const isUrgent = item.severity === 'high' || item.urgency === 'critical';

          return (
            <div
              key={caseId}
              className={`mb-6 border rounded p-4 shadow-sm ${
                isUrgent ? 'bg-red-50 border-red-400' : 'bg-gray-50'
              }`}
            >
              <h3 className="text-lg font-semibold">🆔 Case ID: {item.caseId || caseId}</h3>

              <p className="text-sm text-gray-700 mb-1">📛 Name: {item.name || 'Unknown'}</p>
              <p className="text-sm text-gray-700 mb-1">📂 Type: {item.type}</p>
              <p className="text-sm text-gray-700 mb-2">👥 Group Size: {item.groupSize}</p>

              <p className="text-sm text-gray-700 mb-2">📝 Reason: {item.reason}</p>
              {item.severity && (
                <p className="text-sm text-gray-600">⚠️ Severity: {item.severity}</p>
              )}
              {item.createdAt && (
                <p className="text-sm text-gray-400 italic">
                  ⏱️ Submitted: {new Date(item.createdAt).toLocaleString()}
                </p>
              )}

              {item.fileUrl && (
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-blue-600 underline"
                >
                  📎 View Uploaded Document
                </a>
              )}

              <div className="flex gap-4 mt-4">
                <button
                  title="Mark case as resolved and safe"
                  onClick={() => handleDecision(caseId, 'resolved')}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  ✅ Resolve
                </button>
                <button
                  title="Send case to full DAO voting for urgent action"
                  onClick={() => handleDecision(caseId, 'escalated')}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  🚨 Escalate
                </button>
                <button
                  title="Ignore this case (will be archived)"
                  onClick={() => handleDecision(caseId, 'ignored')}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  ❌ Ignore
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CivGuardReview;
