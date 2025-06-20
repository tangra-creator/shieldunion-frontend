import React, { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const PublicVault = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublicVault = async () => {
      try {
        const res = await axios.get(`${API}/api/protection/public`);
        setRecords(res.data || []);
      } catch (err) {
        console.error("Failed to load public vault:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublicVault();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">📰 Public Classified Vault</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : records.length === 0 ? (
        <p className="text-center text-gray-500">No public records available.</p>
      ) : (
        <ul className="space-y-4">
          {records.map((item, index) => (
            <li key={index} className="border rounded bg-white p-4 shadow">
              <p className="font-semibold">🆔 {item.caseId || "No ID"}</p>
              <p className="text-gray-800 mt-1">📄 {item.summary || "No summary provided."}</p>
              <p className="text-sm text-gray-500 mt-1">📅 {new Date(item.approvedAt).toLocaleString()}</p>
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


export default PublicVault;
