import React from 'react';
import { Link } from 'react-router-dom';

const CivGuardNavbar = () => {
  return (
    <nav className="bg-white border-b shadow px-6 py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="text-xl font-bold text-black mb-2 md:mb-0">
          🛡️ CivGuard Panel
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <Link to="/civguard-apply" className="hover:underline">Apply</Link>
          <Link to="/civguard-flag" className="hover:underline">Flag Case</Link>
          <Link to="/civguard-review" className="hover:underline">Review</Link>
          <Link to="/civguard-verify" className="hover:underline">Verify Applicants</Link>
          <Link to="/civguard/flag-review" className="hover:underline">Flag Review</Link>
          <Link to="/dao" className="hover:underline text-blue-600 font-semibold">DAO</Link>
        </div>
      </div>
    </nav>
  );
};

export default CivGuardNavbar;
