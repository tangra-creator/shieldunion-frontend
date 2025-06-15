// src/pages/MemberPortal.jsx

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MemberPortal = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🧭 Member Portal</h2>
      <nav className="mb-4 space-x-4 border-b pb-2">
        <Link to="/member/dashboard">Dashboard</Link>
        <Link to="/member/mycases">My Cases</Link>
        <Link to="/member/myprotection">My Protection</Link>
        <Link to="/member/profile">Profile</Link>
        </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MemberPortal;
