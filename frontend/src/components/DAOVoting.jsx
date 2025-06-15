import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DAOVoting = () => {
  const [proposals, setProposals] = useState([]);
  const [votes, setVotes] = useState({});

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/proposals');
        setProposals(res.data);
      } catch (err) {
        console.error('Error fetching proposals:', err);
      }
    };

    fetchProposals();
  }, []);

  const handleVote = (proposalId, voteType) => {
    if (votes[proposalId]) return; // Already voted
    setProposals((prev) =>
      prev.map((p) =>
        p.id === proposalId
          ? {
              ...p,
              votesYes: voteType === 'yes' ? p.votesYes + 1 : p.votesYes,
              votesNo: voteType === 'no' ? p.votesNo + 1 : p.votesNo,
            }
          : p
      )
    );
    setVotes({ ...votes, [proposalId]: voteType });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🗳️ DAO Voting</h2>
      {proposals.map((proposal) => (
        <div
          key={proposal.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <h3>{proposal.title}</h3>
          <p>{proposal.description}</p>
          <p>📅 Deadline: {proposal.deadline}</p>
          <p>
            ✅ Yes: {proposal.votesYes} | ❌ No: {proposal.votesNo}
          </p>
          {!votes[proposal.id] ? (
            <>
              <button onClick={() => handleVote(proposal.id, 'yes')}>Vote Yes ✅</button>
              <button
                onClick={() => handleVote(proposal.id, 'no')}
                style={{ marginLeft: '10px' }}
              >
                Vote No ❌
              </button>
            </>
          ) : (
            <p>You voted: {votes[proposal.id].toUpperCase()}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DAOVoting;
