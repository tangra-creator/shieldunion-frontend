import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const CivGuardDashboard = () => {
  const [assignedCases, setAssignedCases] = useState([]);
  const [guardId, setGuardId] = useState('');

  useEffect(() => {
    const storedGuardId = localStorage.getItem('civguardId') || 'civguard-001';
    setGuardId(storedGuardId);

    const fetchAssignedCases = async () => {
      try {
        const res = await axios.get(`${API}/api/cases/assigned/${storedGuardId}`);
        setAssignedCases(res.data);
      } catch (err) {
        console.error('Failed to load assigned cases:', err);
      }
    };

    fetchAssignedCases();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <main className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold mb-4 text-center">🛡️ CivGuard Dashboard</h2>
        <p className="mb-6 text-center text-gray-600">
          Guard ID: <strong>{guardId}</strong>
        </p>

        {assignedCases.length === 0 ? (
          <p className="text-center text-gray-500">No active assignments.</p>
        ) : (
          <ul className="space-y-4">
            {assignedCases.map((c) => (
              <li key={c.id} className="p-4 border bg-gray-50 rounded">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-gray-700">{c.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Assigned on: {new Date(c.assignedAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CivGuardDashboard;
