import React from 'react';
import { Outlet } from 'react-router-dom';
import MemberNavbar from './MemberNavbar';

const MemberLayout = () => {
  return (
    <div>
      <MemberNavbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MemberLayout;
