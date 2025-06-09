import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const res = await axios.get('https://shieldunion-backend.onrender.com/api/proposals');
        setProposals(res.data);
      } catch (err) {
        console.error('Failed to fetch proposals:', err);
      }
    };

    fetchProposals();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📊 DAO Dashboard</h2>
      {proposals.length === 0 ? (
        <p>No proposals found yet.</p>
      ) : (
        <ul>
          {proposals.map((p) => (
            <li key={p.id} style={{ marginBottom: '15px' }}>
              <strong>{p.title}</strong> <br />
              📝 {p.description} <br />
              📅 Deadline: {p.deadline || 'Not set'} <br />
              ✅ Votes Yes: {p.votesYes} | ❌ Votes No: {p.votesNo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
