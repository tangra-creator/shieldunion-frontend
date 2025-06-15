import React from "react";
import DAOVoting from "../components/DAOvoting";

const DAO = () => {
  return (
    <div style={{
      maxWidth: "700px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    }}>
      <h2>🗳️ DAO Voting Panel</h2>
      <p>Members can view proposals and cast votes below.</p>
      
      <DAOVoting />
    </div>
  );
};

export default DAO;
