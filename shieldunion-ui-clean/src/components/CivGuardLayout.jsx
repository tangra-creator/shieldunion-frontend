import React from 'react';
import CivGuardNavbar from './CivGuardNavbar';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const CivGuardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* 🧭 Top Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">🛡️ CivGuard Panel</h2>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 underline text-sm"
        >
          ← Back to ShieldUnion Home
        </Link>
      </header>

      {/* 🛠️ CivGuard Navigation */}
      <CivGuardNavbar />

      {/* 📄 Dynamic Page Content */}
      <main className="flex-grow p-6">
        <Outlet />
      </main>

      {/* 🧾 Footer */}
      <Footer
        links={[
          { name: "Privacy Policy", to: "/privacy" },
          { name: "Terms of Use", to: "/terms" },
          { name: "About", to: "/about" }
        ]}
        note="ShieldUnion CivGuard Panel is secured and monitored. All actions are logged and governed by the DAO."
      />
    </div>
  );
};

export default CivGuardLayout;
