import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MemberLayout from '../components/MemberLayout';

const MemberDashboard = () => {
  const [cases, setCases] = useState([]);
  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await axios.get(`${API}/api/my-cases`);
        setCases(res.data);
      } catch (err) {
        console.error('Error fetching cases:', err);
      }
    };

    fetchCases();
  }, []);

  return (
    <MemberLayout>
      <h2 className="text-2xl font-semibold mb-4">📂 Your Submitted Cases</h2>
      {cases.length > 0 ? (
        cases.map((c) => (
          <div key={c.id} className="border rounded p-4 mb-4 bg-white shadow">
            <h3 className="font-bold">{c.title}</h3>
            <p className="text-gray-700">{c.description}</p>
            <p className="text-sm text-gray-500 mt-2">Status: {c.status}</p>
          </div>
        ))
      ) : (
        <p>No cases submitted yet.</p>
      )}
    </MemberLayout>
  );
};

export default MemberDashboard;
