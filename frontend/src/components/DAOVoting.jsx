import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DAOVoting = () => {
  const [proposals, setProposals] = useState([]);
  const [votes, setVotes] = useState({});

  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const res = await axios.get(`${API}/api/proposals`);
        setProposals(res.data);
      } catch (err) {
        console.error("Failed to fetch proposals:", err);
      }
    };

    fetchProposals();
  }, []);

  const handleVote = (id, voteType) => {
    if (votes[id]) return;
    setVotes((prev) => ({ ...prev, [id]: true }));
    // Optional: POST vote to backend later
  };

  return (
    <div>
      <h2>🗳️ DAO Proposals</h2>
      {Array.isArray(proposals) && proposals.length > 0 ? (
        proposals.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <button onClick={() => handleVote(p.id, "yes")} disabled={votes[p.id]}>
              ✅ Yes ({p.votesYes})
            </button>
            <button onClick={() => handleVote(p.id, "no")} disabled={votes[p.id]}>
              ❌ No ({p.votesNo})
            </button>
          </div>
        ))
      ) : (
        <p>No proposals available.</p>
      )}
    </div>
  );
};

export default DAOVoting;
