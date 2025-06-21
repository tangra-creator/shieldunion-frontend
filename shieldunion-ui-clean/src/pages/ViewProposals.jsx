import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ViewProposals = () => {
  const [proposals, setProposals] = useState([]);
  const [language, setLanguage] = useState("English");

  const fetchProposals = async () => {
    try {
      const res = await axios.get(`${API}/api/proposals`);
      setProposals(res.data);
    } catch (err) {
      console.error("Failed to load proposals:", err);
    }
  };

  const handleVote = async (id, voteType) => {
    try {
      await axios.post(`${API}/api/proposals/vote`, { id, vote: voteType });
      fetchProposals();
    } catch (err) {
      console.error("Voting failed:", err);
      alert("❌ Failed to vote.");
    }
  };

  const handleResolve = async () => {
    try {
      await axios.post(`${API}/api/proposals/resolve`);
      alert("✅ Resolved expired proposals.");
      fetchProposals();
    } catch (err) {
      console.error("Resolve failed:", err);
      alert("❌ Failed to resolve expired proposals.");
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* 🌐 Language Selector */}
      <div className="text-right px-6 pt-4 text-sm text-gray-600">
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
          <option>Български</option>
          <option>Türkçe</option>
        </select>
      </div>

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto mt-6 p-6">
          <h2 className="text-3xl font-bold mb-6">📋 All DAO Proposals</h2>

          <button
            onClick={handleResolve}
            className="mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            🔄 Resolve Expired Proposals
          </button>

          {proposals.map((p) => (
            <div
              key={p._id}
              className="mb-6 p-4 border border-gray-300 rounded bg-white shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="mb-2 text-sm text-gray-700">{p.description}</p>

              <p className="text-sm">
                📅 <strong>Duration:</strong> {p.duration} day(s)
              </p>
              <p className="text-sm mb-2">
                ⚠️ <strong>Urgency:</strong> {p.urgency}
              </p>

              {p.file ? (
                <p className="text-sm mb-2">
                  📎 <strong>Attachment:</strong>{" "}
                  <a
                    href={`${API}/${p.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View File
                  </a>
                </p>
              ) : (
                <p className="text-sm mb-2 text-gray-500">
                  📎 No attachment uploaded.
                </p>
              )}

              {p.aiSummary && (
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-300 rounded">
                  <p className="text-sm text-yellow-800">
                    🧠 <strong>AI Summary:</strong> {p.aiSummary}
                  </p>
                </div>
              )}

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleVote(p._id, "yes")}
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                >
                  👍 Yes ({p.votesYes})
                </button>
                <button
                  onClick={() => handleVote(p._id, "no")}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  👎 No ({p.votesNo})
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ViewProposals;
