import React, { useEffect, useState } from "react";
import axios from "axios";
import CivGuardNavbar from "../components/CivGuardNavbar";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import SmartChat from "../components/SmartChat";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const CivGuardFlagReview = () => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const res = await axios.get(`${API}/api/civguard/flags`);
        setFlags(res.data);
      } catch (err) {
        console.error("Error loading flags:", err);
      }
    };

    fetchFlags();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 relative">
      <CivGuardNavbar />
      <SmartChat />

      <main className="p-6 max-w-5xl mx-auto">
        <div className="flex justify-end mb-2">
          <LanguageSelector />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-red-700">
          🛡️ CivGuard Flag Review Panel
        </h2>

        {flags.length === 0 ? (
          <p className="text-gray-600">No flags submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {flags.map((flag, index) => (
              <li key={index} className="border p-4 rounded bg-white shadow">
                <p><strong>Case ID:</strong> {flag.caseId}</p>
                <p><strong>Reason:</strong> {flag.reason}</p>
                <p><strong>Severity:</strong> {flag.severity || "N/A"}</p>
                <p><strong>Flagged At:</strong> {new Date(flag.flaggedAt).toLocaleString()}</p>
                <div className="mt-3 space-x-2">
                  <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">✅ Approve</button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">❌ Reject</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CivGuardFlagReview;
