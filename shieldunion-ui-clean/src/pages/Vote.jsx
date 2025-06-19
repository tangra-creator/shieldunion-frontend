import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Vote = () => {
  const [proposals, setProposals] = useState([]);
  const [voted, setVoted] = useState({});

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
      alert('Vote failed. Try again later.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">🗳️ Member Voting</h2>

      {proposals.length === 0 ? (
        <p className="text-center text-gray-500">No active proposals.</p>
      ) : (
        proposals.map((proposal) => (
          <div key={proposal.id} className="mb-6 border p-4 rounded bg-gray-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{proposal.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{proposal.description}</p>

            <div className="flex gap-4">
              <button
                onClick={() => handleVote(proposal.id, 'yes')}
                disabled={!!voted[proposal.id]}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Vote Yes
              </button>
              <button
                onClick={() => handleVote(proposal.id, 'no')}
                disabled={!!voted[proposal.id]}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Vote No
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Vote;
