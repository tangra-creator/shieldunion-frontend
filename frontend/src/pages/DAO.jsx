// src/pages/DAO.jsx
import React from 'react';
import MemberLayout from '../components/MemberLayout';
import DAOVoting from '../components/DAOVoting';

const DAO = () => {
  return (
    <MemberLayout>
      <h2 className="text-2xl font-semibold mb-4">🗳️ DAO Voting</h2>
      <DAOVoting />
    </MemberLayout>
  );
};

export default DAO;
