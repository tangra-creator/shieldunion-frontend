import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import LanguageSelector from '../components/LanguageSelector';
import SmartChat from '../components/SmartChat';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const FounderControl = () => {
  const [platformStats, setPlatformStats] = useState(null);
  const [accessCode, setAccessCode] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');

  const handleAccess = async () => {
    try {
      const res = await axios.post(`${API}/api/founder/auth`, { code: accessCode });
      if (res.data && res.data.authorized) {
        setAuthorized(true);
        setError('');
        fetchPlatformStats();
      } else {
        setError('Unauthorized founder code.');
      }
    } catch (err) {
      console.error(err);
      setError('Access denied.');
    }
  };

  const fetchPlatformStats = async () => {
    try {
      const res = await axios.get(`${API}/api/founder/stats`);
      setPlatformStats(res.data);
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 relative">
      <SmartChat />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
          <div className="flex justify-end mb-2">
            <LanguageSelector />
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center">🧬 Founder Control Panel</h2>

          {!authorized ? (
            <>
              <p className="text-center text-gray-600 mb-4">
                Restricted access. Founder code required.
              </p>
              <div className="flex justify-center gap-4">
                <input
                  type="password"
                  placeholder="Founder code"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="px-4 py-2 border rounded w-64"
                />
                <button
                  onClick={handleAccess}
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Enter
                </button>
              </div>
              {error && <p className="mt-4 text-center text-red-600">{error}</p>}
            </>
          ) : (
            <>
              <p className="mb-4 text-center text-gray-700">Platform overview:</p>
              {platformStats ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-100 p-4 rounded shadow-sm">
                    <h3 className="font-semibold text-lg">🛡️ Members</h3>
                    <p className="text-2xl">{platformStats.members}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded shadow-sm">
                    <h3 className="font-semibold text-lg">📂 Cases Submitted</h3>
                    <p className="text-2xl">{platformStats.cases}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded shadow-sm">
                    <h3 className="font-semibold text-lg">🗳️ Active Proposals</h3>
                    <p className="text-2xl">{platformStats.proposals}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded shadow-sm">
                    <h3 className="font-semibold text-lg">💰 Treasury Balance</h3>
                    <p className="text-2xl">Ξ {platformStats.treasury} ETH</p>
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-500">Loading stats...</p>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FounderControl;
