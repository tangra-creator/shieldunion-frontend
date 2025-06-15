import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DAOVoting = () => {
  const [proposals, setProposals] = useState([]);
  const [votes, setVotes] = useState({});

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const res = await axios.get(`${API}/api/proposals`);
        setProposals(res.data);
      } catch (err) {
        console.error("Failed to fetch proposals:", err);
      }
    };

    fetchProposals();
  }, []);

  const handleVote = async (proposalId, type) => {
    if (votes[proposalId]) return;

    try {
      setVotes((prev) => ({ ...prev, [proposalId]: type }));

      // Optional: send vote to backend
      // await axios.post(`${API}/api/vote`, { proposalId, type });

      setProposals((prev) =>
        prev.map((p) =>
          p.id === proposalId
            ? {
                ...p,
                votesYes: type === "yes" ? p.votesYes + 1 : p.votesYes,
                votesNo: type === "no" ? p.votesNo + 1 : p.votesNo,
              }
            : p
        )
      );
    } catch (err) {
      console.error("Vote error:", err);
    }
  };

  return (
    <div>
      <h2>🗳 DAO Proposals</h2>
      {proposals.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h4>{p.title}</h4>
          <p>{p.description}</p>
          <button onClick={() => handleVote(p.id, "yes")} disabled={votes[p.id]}>
            ✅ Yes ({p.votesYes})
          </button>
          <button onClick={() => handleVote(p.id, "no")} disabled={votes[p.id]}>
            ❌ No ({p.votesNo})
          </button>
        </div>
      ))}
    </div>
  );
};

export default DAOVoting;
