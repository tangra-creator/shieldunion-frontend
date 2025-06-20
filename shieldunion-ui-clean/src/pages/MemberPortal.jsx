import React from 'react';
import { Link } from 'react-router-dom';

const MemberPortal = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">🛡️ Member Portal</h2>

      <p className="text-gray-700 mb-6 text-center">
        Welcome to your secure portal. From here, you can access protection services, review your cases,
        and stay updated with DAO decisions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/my-cases"
          className="block bg-black text-white p-4 rounded text-center hover:bg-gray-800"
        >
          📂 My Cases
        </Link>

        <Link
          to="/my-protection"
          className="block bg-black text-white p-4 rounded text-center hover:bg-gray-800"
        >
          🛡️ Protection Status
        </Link>

        <Link
          to="/dao"
          className="block bg-black text-white p-4 rounded text-center hover:bg-gray-800"
        >
          🗳️ DAO Voting
        </Link>

        <Link
          to="/info-trade"
          className="block bg-black text-white p-4 rounded text-center hover:bg-gray-800"
        >
          📤 Information Trade
        </Link>

        {/* ✅ New Chat Entry Shortcut */}
        <Link
          to="/my-protection"
          className="block bg-purple-700 text-white p-4 rounded text-center hover:bg-purple-800 transition"
        >
          🧠 Chat with CivGuard
        </Link>
      </div>
    </div>
  );
};

import Footer from '../components/Footer'; // ✅ correct


function App() {
  return (
    <>
      <Routes>{/* your routes */}</Routes>
      <Footer />
    </>
  );
}


export default MemberPortal;
