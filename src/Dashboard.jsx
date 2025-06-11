import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await fetch("https://shieldunion-backend.onrender.com/api/proposals");
        const data = await response.json();
        setProposals(data);
      } catch (error) {
        console.error("Error fetching proposals:", error);
      }
    };

    fetchProposals();
  }, []);

  return (
    <div>
      <h2>DAO Dashboard</h2>
      {proposals.length === 0 ? (
        <p>No proposals found yet.</p>
      ) : (
        <ul>
          {proposals.map((proposal) => (
            <li key={proposal.id}>
              <h3>{proposal.title}</h3>
              <p>{proposal.description}</p>
              <p>Status: {proposal.status}</p>
              <p>Votes: {proposal.votes}</p>
              <p>Submitted: {new Date(proposal.submittedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
