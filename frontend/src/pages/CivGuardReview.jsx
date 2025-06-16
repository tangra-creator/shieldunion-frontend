import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CivGuardLayout from '../components/CivGuardLayout';

const CivGuardReview = () => {
  const [cases, setCases] = useState([]);
  const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await axios.get(`${API}/api/review-cases`);
        setCases(res.data);
      } catch (err) {
        console.error('Failed to load cases for review:', err);
      }
    };

    fetchCases();
  }, []);

  return (
    <CivGuardLayout>
      <h2 className="text-2xl font-bold mb-4">🔍 Review Cases</h2>
      {cases.length > 0 ? (
        cases.map((c) => (
          <div key={c.id} className="border p-4 mb-3 rounded bg-white shadow">
            <h4 className="font-semibold">{c.title}</h4>
            <p>{c.description}</p>
            <p className="text-sm text-gray-500">Status: {c.status}</p>
          </div>
        ))
      ) : (
        <p>No review cases found.</p>
      )}
    </CivGuardLayout>
  );
};

export default CivGuardReview;
