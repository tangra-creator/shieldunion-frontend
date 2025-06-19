import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MemberNavbar from './MemberNavbar';

const MemberLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <MemberNavbar />
      <div className="p-4 bg-white shadow-md">
        <Link
          to="/"
          className="text-blue-600 underline text-sm hover:text-blue-800"
        >
          ⬅️ Back to Home
        </Link>
      </div>
      <main className="p-6 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MemberLayout;
