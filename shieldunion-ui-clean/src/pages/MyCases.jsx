import React, { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const MyCases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await axios.get(`${API}/api/cases`);
        setCases(res.data || []);
      } catch (error) {
        console.error("Failed to fetch cases:", error);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">📂 My Submitted Cases</h2>
      {cases.length === 0 ? (
        <p>No cases submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {cases.map((c, idx) => (
            <li key={idx} className="border p-4 rounded bg-gray-50">
              <p><span className="font-semibold">Title:</span> {c.title}</p>
              <p><span className="font-semibold">Description:</span> {c.description}</p>
              <p><span className="font-semibold">Status:</span> {c.status || "Pending"}</p>
              {c.createdAt && (
                <p className="text-sm text-gray-500">
                  Submitted: {new Date(c.createdAt).toLocaleString()}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

import React from "react";
import Footer from "../components/Footer";

const PageName = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        {/* your existing content here */}
      </main>

      <Footer />
    </div>
  );
};

export default MyCases;
