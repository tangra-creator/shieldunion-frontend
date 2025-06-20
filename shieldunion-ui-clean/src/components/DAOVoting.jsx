import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from '../components/Footer';

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const DAOVoting = () => {
  const [proposals, setProposals] = useState([]);
  const [voted, setVoted] = useState({});

  useEffect(() => {
    fetchProposals();
  }, []);

  const fetchProposals = async () => {
    try {
      const res = await axios.get(`${API}/api/proposals`);
      setProposals(res.data);
    } catch (err) {
      console.error("Failed to fetch proposals:", err);
    }
  };

  const handleVote = async (id, type) => {
    if (voted[id]) return alert("Already voted!");

    try {
      await axios.post(`${API}/api/proposals/vote`, { id, vote: type });
      setVoted({ ...voted, [id]: true });
      fetchProposals(); // refresh votes
    } catch (err) {
      console.error("Vote failed:", err);
      alert("❌ Voting failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <main className="flex-grow max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">🗳️ DAO Voting</h2>

        {proposals.length === 0 ? (
          <p className="text-center text-gray-600">No proposals available.</p>
        ) : (
          proposals.map((p) => (
            <div
              key={p._id}
              className="mb-6 p-4 border rounded-xl bg-gray-50 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{p.description}</p>

              {p.aiSummary && (
                <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-900 px-4 py-2 mb-3 rounded">
                  <strong>🧠 AI Summary:</strong>
                  <p className="text-sm">{p.aiSummary}</p>
                </div>
              )}

              <p className="text-sm">🕒 Duration: {p.duration} day(s)</p>
              <p className="text-sm">⚠️ Urgency: {p.urgency}</p>

              {p.file ? (
                <p className="text-sm">
                  📎{" "}
                  <a
                    href={`${API}${p.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Evidence
                  </a>
                </p>
              ) : (
                <p className="text-sm text-gray-500">📎 No evidence uploaded</p>
              )}

              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => handleVote(p._id, "yes")}
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                >
                  ✅ Vote Yes ({p.votesYes || 0})
                </button>
                <button
                  onClick={() => handleVote(p._id, "no")}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  ❌ Vote No ({p.votesNo || 0})
                </button>
              </div>
            </div>
          ))
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DAOVoting;
