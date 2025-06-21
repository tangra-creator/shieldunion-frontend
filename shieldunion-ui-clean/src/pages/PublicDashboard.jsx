import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";
import SmartChat from "../components/SmartChat"; // Optional: can be removed if not needed here

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const PublicDashboard = () => {
  const [cases, setCases] = useState([]);
  const [language, setLanguage] = useState("English");

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
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* 🌐 Language Selector */}
      <div className="text-right pr-6 pt-4 text-sm text-gray-600">
        🌐 Language: 
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="ml-2 px-2 py-1 border rounded"
        >
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
          <option>العربية</option>
          <option>Türkçe</option>
          <option>Български</option>
        </select>
      </div>

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto mt-6 p-6 bg-white rounded shadow">
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

      {/* Optional: Public Chat */}
      {/* <div className="px-6 mb-10">
        <SmartChat caseId="PUBLIC-DASH" sender="visitor" />
      </div> */}

      <Footer />
    </div>
  );
};

export default PublicDashboard;
