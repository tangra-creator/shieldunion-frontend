import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const PublicDashboard = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await axios.get(`${API}/api/cases/public`);
        setCases(res.data);
      } catch (err) {
        console.error('Error fetching cases:', err);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-6 text-center">📊 Public Dashboard</h2>
          {cases.length === 0 ? (
            <p className="text-center text-gray-600">No public cases available.</p>
          ) : (
            <ul className="space-y-4">
              {cases.map((c) => (
                <li key={c.id} className="p-4 border rounded bg-gray-50">
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="text-sm text-gray-700">{c.summary || c.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Submitted: {new Date(c.createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PublicDashboard;
