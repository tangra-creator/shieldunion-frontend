import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold text-center mb-6">🛠️ Founder Control Panel</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link to="/founder/proposals" className="bg-black text-white p-4 rounded text-center hover:bg-gray-800">
          🗳️ All DAO Proposals
        </Link>
        <Link to="/founder/treasury" className="bg-green-700 text-white p-4 rounded text-center hover:bg-green-800">
          🪙 Treasury Overview
        </Link>
        <Link to="/founder/tier1" className="bg-red-600 text-white p-4 rounded text-center hover:bg-red-700">
          ⚠️ Tier 1 Escalation
        </Link>
        <Link to="/founder/clones" className="bg-yellow-500 text-white p-4 rounded text-center hover:bg-yellow-600">
          🧬 Clone Detector
        </Link>
      </div>
    </div>
  );
};

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>{/* your routes */}</Routes>
      <Footer />
    </>
  );
}


export default AdminPanel;
