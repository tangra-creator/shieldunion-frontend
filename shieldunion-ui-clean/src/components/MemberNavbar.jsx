import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MemberNavbar = () => {
  const [alias, setAlias] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('alias');
    if (stored) setAlias(stored);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('alias');
    navigate('/'); // Or use: window.location.reload();
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Member Info */}
        <div className="flex items-center gap-2 text-red-600 font-bold mb-2 md:mb-0">
          🛡️ ShieldUnion Member
          {alias && (
            <span className="text-sm text-gray-600 font-normal">({alias})</span>
          )}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 text-sm sm:text-base text-blue-600">
          <Link to="/member-portal" className="hover:underline">My Portal</Link>
          <Link to="/my-cases" className="hover:underline">My Cases</Link>
          <Link to="/my-protection" className="hover:underline">My Protection</Link>
          <Link to="/member-profile" className="hover:underline">My Profile</Link>
          <Link to="/dao" className="hover:underline">DAO</Link>
          <Link to="/info-trade" className="hover:underline">InfoTrade</Link>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MemberNavbar;
