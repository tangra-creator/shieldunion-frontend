import React from 'react';
import CivGuardNavbar from './CivGuardNavbar';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const CivGuardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div>
        {/* 🔙 Back to Main Home */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">🛡️ CivGuard Panel</h2>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            ← Back to ShieldUnion Home
          </Link>
        </div>

        {/* 🔽 CivGuard Navigation */}
        <CivGuardNavbar />

        {/* 📄 Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CivGuardLayout;
