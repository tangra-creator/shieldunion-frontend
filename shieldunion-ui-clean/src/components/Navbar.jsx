import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
      <div className="text-2xl font-bold mb-2 sm:mb-0 flex items-center gap-4">
        <Link to="/">🛡️ ShieldUnion</Link>
        <LanguageSelector />
      </div>

      <div className="flex flex-wrap gap-4 text-sm sm:text-base justify-center">
        <Link to="/">Home</Link>
        <Link to="/register/member">Join as Member</Link>
        <Link to="/register/civguard">Apply as CivGuard</Link>
        <Link to="/submit-case">Submit</Link>
        <Link to="/dao">DAO</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/info-trade">InfoTrade</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/public-vault">Public Vault</Link>
        <Link to="/vault">Classified Vault</Link>
      </div>
    </nav>
  );
};

export default Navbar;
