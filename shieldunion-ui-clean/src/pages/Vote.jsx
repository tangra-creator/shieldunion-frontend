import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Vote = () => {
  const [proposals, setProposals] = useState([]);
  const [voted, setVoted] = useState({});
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const res = await axios.get(`${API}/api/proposals`);
        setProposals(res.data);
      } catch (err) {
        console.error('Error fetching proposals:', err);
      }
    };

    fetchProposals();
  }, []);

  const handleVote = async (proposalId, voteType) => {
    if (voted[proposalId]) return;

    try {
      await axios.post(`${API}/api/vote`, { proposalId, voteType });
      setVoted((prev) => ({ ...prev, [proposalId]: voteType }));
      alert(`Your '${voteType}' vote has been recorded.`);
    } catch (err) {
      console.error('Error submitting vote:', err);
      alert('❌ Vote failed. Try again later.');
    }
  };

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
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-6 text-center">🗳️ Member Voting</h2>

          {proposals.length === 0 ? (
            <p className="text-center text-gray-500">No active proposals.</p>
          ) : (
            proposals.map((proposal) => (
              <div
                key={proposal._id}
                className="mb-6 border p-4 rounded bg-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">{proposal.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{proposal.description}</p>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleVote(proposal._id, 'yes')}
                    disabled={!!voted[proposal._id]}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    👍 Vote Yes
                  </button>
                  <button
                    onClick={() => handleVote(proposal._id, 'no')}
                    disabled={!!voted[proposal._id]}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    👎 Vote No
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vote;
