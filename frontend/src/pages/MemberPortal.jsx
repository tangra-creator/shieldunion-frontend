import React from 'react';
import { Outlet } from 'react-router-dom';
import MemberNavbar from '../components/MemberNavbar';

const MemberPortal = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🛡️ Member Portal</h2>
      <MemberNavbar />
      <Outlet />
    </div>
  );
};

export default MemberPortal;
