import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MemberNavbar from './MemberNavbar';
import Footer from '../components/Footer'; // Correct path

const MemberLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div>
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

      <Footer />
    </div>
  );
};

export default MemberLayout;
