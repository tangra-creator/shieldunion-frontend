import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CivGuardLayout from '../components/CivGuardLayout';

const CivGuardDashboard = () => {
  const [assigned, setAssigned] = useState([]);
  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchAssigned = async () => {
      try {
        const res = await axios.get(`${API}/api/civguard-cases`);
        setAssigned(res.data);
      } catch (err) {
        console.error('Failed to load CivGuard cases:', err);
      }
    };

    fetchAssigned();
  }, []);

  return (
    <CivGuardLayout>
      <h2 className="text-2xl font-bold mb-4">🛡️ CivGuard Dashboard</h2>
      <p className="text-gray-700 mb-4">Manage your assigned protection cases below.</p>
      {assigned.length > 0 ? (
        assigned.map((item) => (
          <div key={item.id} className="border p-4 rounded mb-3 bg-white shadow">
            <h3 className="font-semibold">{item.title}</h3>
            <p>{item.description}</p>
            <p className="text-sm mt-2 text-gray-500">Status: {item.status}</p>
          </div>
        ))
      ) : (
        <p>No assigned cases yet.</p>
      )}
    </CivGuardLayout>
  );
};

export default CivGuardDashboard;
