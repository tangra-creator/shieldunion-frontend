import React, { useState } from "react";
import axios from "axios";
import SmartChat from "../components/SmartChat"; // ✅ Add this import

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const MyProtection = () => {
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequest = async () => {
    if (!reason.trim()) {
      setMessage("❗ Reason is required.");
      setStatus("error");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API}/api/protection/request`, { reason });
      setStatus("success");
      setMessage("🛡️ Protection request sent successfully.");
      setReason("");
    } catch (err) {
      console.error("Request failed:", err);
      setStatus("error");
      setMessage("❌ Failed to send request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-8">
      <h2 className="text-2xl font-bold mb-4">🛡️ My Protection</h2>

      <textarea
        placeholder="Why do you need protection?"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows={4}
      />

      <button
        onClick={handleRequest}
        disabled={loading}
        className={`w-full px-4 py-2 rounded text-white ${
          loading ? "bg-gray-500" : "bg-black hover:bg-gray-800"
        }`}
      >
        {loading ? "Submitting..." : "Request Protection"}
      </button>

      {status && (
        <div
          className={`mt-4 ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </div>
      )}

      {/* ✅ Insert Smart Chat Section Below */}
      <div className="mt-10">
        <SmartChat caseId="CASE-2091" sender="member" />
      </div>
    </div>
  );
};

import Footer from '../components/Footer'; // ✅ correct


function App() {
  return (
    <>
      <Routes>{/* your routes */}</Routes>
      <Footer />
    </>
  );
}

export default MyProtection;
