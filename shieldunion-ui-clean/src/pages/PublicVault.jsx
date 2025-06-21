import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import SmartChat from "../components/SmartChat"; // Optional
const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const PublicVault = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("English");

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
        <div className="max-w-5xl mx-auto p-6 mt-4 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-6 text-center">📰 Public Classified Vault</h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : records.length === 0 ? (
            <p className="text-center text-gray-500">No public records available.</p>
          ) : (
            <ul className="space-y-4">
              {records.map((item, index) => (
                <li key={index} className="border rounded bg-gray-50 p-4 shadow">
                  <p className="font-semibold">🆔 {item.caseId || "No ID"}</p>
                  <p className="text-gray-800 mt-1">📄 {item.summary || "No summary provided."}</p>
                  <p className="text-sm text-gray-500 mt-1">📅 {new Date(item.approvedAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      {/* Optional SmartChat (can be removed if not suitable for public) */}
      {/* <div className="px-6 my-6">
        <SmartChat caseId="PUBLIC-VAULT" sender="visitor" />
      </div> */}

      <Footer />
    </div>
  );
};

export default PublicVault;
