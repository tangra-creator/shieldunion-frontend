import React from 'react';
import { Link } from 'react-router-dom';

const CivGuardNavbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm px-6 py-4 flex flex-wrap justify-between items-center">
      <div className="text-xl font-bold text-black">🛡️ CivGuard Panel</div>

      <div className="flex space-x-4 text-sm font-medium">
        <Link to="/civguard-apply" className="hover:underline text-gray-700">Apply</Link>
        <Link to="/civguard-flag" className="hover:underline text-gray-700">Flag Case</Link>
        <Link to="/civguard-review" className="hover:underline text-gray-700">Review</Link>
        <Link to="/civguard-verify" className="hover:underline text-gray-700">Verify Applicants</Link>
        <Link to="/dao" className="hover:underline text-gray-700">DAO</Link>
        <Link to="/civguard/flag-review" className="hover:underline text-gray-700">Flag Review</Link>
      </div>
    </nav>
  );
};

export default CivGuardNavbar;
