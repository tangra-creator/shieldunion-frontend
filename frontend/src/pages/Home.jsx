import React from 'react';
import { Link } from 'react-router-dom';



    <div className="p-8 max-w-4xl mx-auto text-center">
      <div className="mb-6">
        <img src="/vite.svg" alt="ShieldUnion Logo" className="w-16 mx-auto mb-2" />
        <h1 className="text-4xl font-bold">Welcome to ShieldUnion</h1>
        <p className="mt-2 text-gray-600">The backend is live and your protection is active.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-left mt-10">
        {/* Public Pages */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Public Information</h2>
          <ul className="list-disc list-inside">
            <li><Link className="text-blue-600 hover:underline" to="/about">About</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/terms">Terms of Use</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Member Services */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Member Services</h2>
          <ul className="list-disc list-inside">
            <li><Link className="text-blue-600 hover:underline" to="/register">Register</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/submit">Submit Case</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/dashboard">Dashboard</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/vault">Vault</Link></li>
          </ul>
        </div>

        {/* DAO + CivGuard Tools */}
        <div>
          <h2 className="text-xl font-semibold mb-2">CivGuard & DAO</h2>
          <ul className="list-disc list-inside">
            <li><Link className="text-blue-600 hover:underline" to="/civguard">CivGuard Apply</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/proposal">Proposal Form</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/daocontrol">DAO Control Panel</Link></li>
          </ul>
        </div>

        {/* Member Tools */}
        <div>
          <h2 className="text-xl font-semibold mb-2">My Account</h2>
          <ul className="list-disc list-inside">
            <li><Link className="text-blue-600 hover:underline" to="/profile">Profile</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/mycases">My Cases</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/myprotection">My Protection</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/infotrade">InfoTrade</Link></li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-sm text-gray-500">ShieldUnion backend server is running.</p>
    </div>
  );
}

import { Link } from 'react-router-dom';


  const Home = () => {
  return (
    <div className="p-6">
      <img
        src="/shield-logo.svg"
        alt="ShieldUnion Logo"
        style={{ width: '60px', marginBottom: '1rem' }}
      />
      <h1 className="text-3xl font-bold mb-4">Welcome to ShieldUnion!</h1>
      <p className="mb-2">The backend is live and your protection is active.</p>

      <div className="space-y-1 mb-6">
        <Link to="/register" className="text-blue-600 underline block">Register</Link>
        <Link to="/submit" className="text-blue-600 underline block">Submit Case</Link>
        <Link to="/dashboard" className="text-blue-600 underline block">Dashboard</Link>
        <Link to="/proposal" className="text-blue-600 underline block">Proposal</Link>
        <Link to="/vault" className="text-blue-600 underline block">Vault</Link>
        <Link to="/civguard" className="text-blue-600 underline block">CivGuard Apply</Link>
        <Link to="/admin" className="text-blue-600 underline block">Admin</Link>
        <Link to="/daocontrol" className="text-blue-600 underline block">DAO Control</Link>
        <Link to="/infotrade" className="text-blue-600 underline block">InfoTrade</Link>
        <Link to="/memberprofile" className="text-blue-600 underline block">Profile</Link>
        <Link to="/mycases" className="text-blue-600 underline block">MyCases</Link>
        <Link to="/myprotection" className="text-blue-600 underline block">MyProtection</Link>
      </div>

      <p className="font-semibold mt-6">ShieldUnion Frontend</p>
      <p className="text-sm text-gray-500">Shieldunion backend server is running.</p>
    </div>
  );
};

export default Home;

