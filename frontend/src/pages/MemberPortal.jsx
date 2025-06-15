// src/pages/MemberPortal.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MemberPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 bg-white border-b shadow-md">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="mr-2">🛡️</span> Member Portal
        </h2>
        <nav className="mt-3 flex space-x-4 text-blue-600">
          <Link to="/member/dashboard">📊 Dashboard</Link>
          <Link to="/member/mycases">📁 My Cases</Link>
          <Link to="/member/myprotection">🛡️ My Protection</Link>
          <Link to="/member/profile">👤 Profile</Link>
        </nav>
      </div>

      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MemberPortal;
