import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import SmartChat from "../components/SmartChat"; // Optional: can be removed if not needed here

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
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* Optional SmartChat */}
      {/* <SmartChat caseId="PUBLIC-DASH" sender="visitor" /> */}

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow rounded">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">📊 Public Dashboard</h2>
            <LanguageSelector />
          </div>

          {cases.length === 0 ? (
            <p className="text-center text-gray-500">No public cases available.</p>
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

      <Footer
        links={[
          { name: "Privacy Policy", to: "/privacy" },
          { name: "Terms of Use", to: "/terms" },
          { name: "About", to: "/about" }
        ]}
        note="ShieldUnion is fully AI-governed. No human, including the founder, can view or modify your data."
      />
    </div>
  );
};

export default PublicDashboard;
