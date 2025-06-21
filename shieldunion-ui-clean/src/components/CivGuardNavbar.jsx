import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const CivGuardNavbar = () => {
  const [alias, setAlias] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem('alias');
    if (stored) setAlias(stored);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('alias');
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Left: Label + Alias */}
        <div className="flex items-center gap-2 text-green-700 font-bold text-base mb-2 md:mb-0">
          🛡️ CivGuard Panel
          {alias && (
            <span className="text-sm text-gray-600 font-normal">({alias})</span>
          )}
        </div>

        {/* Right: Navigation */}
        <div className="flex flex-wrap gap-4 text-sm sm:text-base text-blue-700 font-medium">
          <Link
            to="/civguard-apply"
            className={`hover:underline ${isActive('/civguard-apply') && 'underline font-bold text-black'}`}
          >
            Apply
          </Link>
          <Link
            to="/civguard-flag"
            className={`hover:underline ${isActive('/civguard-flag') && 'underline font-bold text-black'}`}
          >
            Flag Case
          </Link>
          <Link
            to="/civguard-review"
            className={`hover:underline ${isActive('/civguard-review') && 'underline font-bold text-black'}`}
          >
            Review
          </Link>
          <Link
            to="/civguard-verify"
            className={`hover:underline ${isActive('/civguard-verify') && 'underline font-bold text-black'}`}
          >
            Verify Applicants
          </Link>
          <Link
            to="/civguard/flag-review"
            className={`hover:underline ${isActive('/civguard/flag-review') && 'underline font-bold text-black'}`}
          >
            Flag Review
          </Link>
          <Link
            to="/dao"
            className={`hover:underline ${isActive('/dao') && 'underline font-bold text-black'}`}
          >
            DAO
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:underline ml-2"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CivGuardNavbar;
