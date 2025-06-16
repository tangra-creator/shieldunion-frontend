// src/components/CivGuardLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CivGuardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600">
          🛡️ ShieldUnion CivGuard Panel
        </h1>
        <nav className="space-x-4 text-blue-600">
          <Link to="/civguard/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/civguard/review" className="hover:underline">Review Cases</Link>
          <Link to="/civguard/verify" className="hover:underline">Verify Evidence</Link>
          <Link to="/civguard/flag" className="hover:underline text-red-500">Flag CivGuard</Link>
          <Link to="/" className="text-gray-500 hover:underline">Logout</Link>
        </nav>
      </header>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
};

export default CivGuardLayout;
