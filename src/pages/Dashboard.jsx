import React from "react";

const Dashboard = () => {
  const mockEarnings = 426; // later: dynamic from smart contract or backend
  const pendingCases = 2;   // later: fetched from DAO review queue
  const newMembers = 14;    // later: fetched from member registry

  return (
    <div>
      <h2>👑 Founder Dashboard</h2>
      <p>Welcome back, Platform Creator.</p>

      <ul>
        <li>📥 New Members This Week: {newMembers}</li>
        <li>🚨 Tier 1 Cases Pending Review: {pendingCases}</li>
        <li>💰 Your Earnings (This Month): £{mockEarnings}</li>
      </ul>

      <p>This is your control panel. The platform operates automatically — you only receive alerts, votes, and your share of fees.</p>
    </div>
  );
};

export default Dashboard;
