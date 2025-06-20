import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const DAO = () => {
  const [proposals, setProposals] = useState([]);
  const [votes, setVotes] = useState({});

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
    if (votes[proposalId]) return; // Prevent double voting

    try {
      await axios.post(`${API}/api/vote`, { proposalId, voteType });
      setVotes((prev) => ({ ...prev, [proposalId]: voteType }));
      alert(`Vote '${voteType}' submitted.`);
    } catch (err) {
      console.error('Error submitting vote:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">🗳️ DAO Voting</h2>

      {proposals.length === 0 ? (
        <p className="text-center text-gray-600">No proposals available.</p>
      ) : (
        proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="border p-4 rounded mb-4 bg-gray-50 shadow-sm"
          >
            <h3 className="font-semibold text-lg mb-2">{proposal.title}</h3>
            <p className="text-sm mb-3">{proposal.description}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleVote(proposal.id, 'yes')}
                disabled={votes[proposal.id]}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                Vote Yes
              </button>
              <button
                onClick={() => handleVote(proposal.id, 'no')}
                disabled={votes[proposal.id]}
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
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

export default DAO;
