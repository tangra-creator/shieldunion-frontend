// src/components/MemberLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MemberLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🛡️ Shieldunion Member Area</h1>
        <nav className="space-x-4">
          <Link to="/member/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
          <Link to="/member/dao" className="text-blue-600 hover:underline">DAO Voting</Link>
          <Link to="/member/submitcase" className="text-blue-600 hover:underline">Submit Case</Link>
          <Link to="/member/infotrade" className="text-blue-600 hover:underline">InfoTrade</Link>
          <Link to="/" className="text-red-500 hover:underline">Logout</Link>
        </nav>
      </header>

      <main className="p-4">{children}</main>
    </div>
  );
};

export default MemberLayout;
