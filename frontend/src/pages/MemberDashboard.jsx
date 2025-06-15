import React from "react";

const Dashboard = () => {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    }}>
      <h2>📊 CivGuard Dashboard</h2>
      <p>This will show submitted cases and protection activity.</p>
    </div>
  );
};

export default Dashboard;
