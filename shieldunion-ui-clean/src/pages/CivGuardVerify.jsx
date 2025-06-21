import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import SmartChat from "../components/SmartChat";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const CivGuardVerify = () => {
  const [apps, setApps] = useState([]);

  const fetchApps = async () => {
    try {
      const res = await axios.get(`${API}/api/civguard/applications`);
      setApps(res.data);
    } catch (err) {
      console.error("Failed to load applications", err);
    }
  };

  useEffect(() => {
    fetchApps();
  }, []);

  const handleVerify = async (id, status) => {
    try {
      await axios.post(`${API}/api/civguard/verify`, { id, status });
      alert(`CivGuard ${status === "verified" ? "approved" : status}`);
      fetchApps();
    } catch (err) {
      console.error("Verification error:", err);
      alert("❌ Verification failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 relative">
      <SmartChat />

      <main className="max-w-6xl mx-auto mt-8 p-4">
        <div className="flex justify-end mb-2">
          <LanguageSelector />
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">
          🕵️ CivGuard Applications (Review Panel)
        </h2>

        {apps.length === 0 ? (
          <p className="text-center text-gray-500">No pending applications.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app) => (
              <div
                key={app._id}
                className="border rounded p-4 shadow bg-white space-y-2"
              >
                <h3 className="text-xl font-semibold">{app.alias}</h3>
                <p>👤 Type: {app.type}</p>
                <p>👥 Group Size: {app.groupSize}</p>
                <p>🌍 Service Level: {app.serviceLevel}</p>
                <p>💷 Paid: £{app.paid}</p>
                <p>
                  📌 Status: <span className="font-semibold">{app.status}</span>
                </p>

                {app.document && (
                  <div>
                    <p>📎 Document:</p>
                    <a
                      href={`${API}${app.document}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Uploaded File
                    </a>
                  </div>
                )}

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleVerify(app._id, "verified")}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
                  >
                    ✅ Approve
                  </button>
                  <button
                    onClick={() => handleVerify(app._id, "rejected")}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                  >
                    ❌ Reject
                  </button>
                  <button
                    onClick={() => handleVerify(app._id, "flagged")}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
                  >
                    🚩 Flag
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CivGuardVerify;
