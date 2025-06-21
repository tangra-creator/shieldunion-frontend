import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MemberNavbar = () => {
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

  // Highlight active link
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Left: Brand / User */}
        <div className="flex items-center gap-2 text-red-600 font-bold text-base mb-2 md:mb-0">
          🛡️ ShieldUnion Member
          {alias && (
            <span className="text-sm text-gray-600 font-normal">({alias})</span>
          )}
        </div>

        {/* Right: Navigation */}
        <div className="flex flex-wrap gap-4 text-sm sm:text-base text-blue-700 font-medium">
          <Link
            to="/dashboard"
            className={`hover:underline ${isActive('/dashboard') && 'underline font-bold text-black'}`}
          >
            Dashboard
          </Link>
          <Link
            to="/my-cases"
            className={`hover:underline ${isActive('/my-cases') && 'underline font-bold text-black'}`}
          >
            My Cases
          </Link>
          <Link
            to="/my-protection"
            className={`hover:underline ${isActive('/my-protection') && 'underline font-bold text-black'}`}
          >
            My Protection
          </Link>
          <Link
            to="/classified-vault"
            className={`hover:underline ${isActive('/classified-vault') && 'underline font-bold text-black'}`}
          >
            Vault
          </Link>
          <Link
            to="/member-profile"
            className={`hover:underline ${isActive('/member-profile') && 'underline font-bold text-black'}`}
          >
            Profile
          </Link>
          <Link
            to="/info-trade"
            className={`hover:underline ${isActive('/info-trade') && 'underline font-bold text-black'}`}
          >
            InfoTrade
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

export default MemberNavbar;
