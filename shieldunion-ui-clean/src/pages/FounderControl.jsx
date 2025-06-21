import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import LanguageSelector from '../components/LanguageSelector';
import SmartChat from '../components/SmartChat';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const FounderControl = () => {
  const [accessCode, setAccessCode] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');
  const [platformStats, setPlatformStats] = useState(null);
  const [language, setLanguage] = useState('English');

  const handleAccess = async () => {
    try {
      const res = await axios.post(`${API}/api/founder/auth`, { code: accessCode });
      if (res.data.authorized) {
        setAuthorized(true);
        setError('');
        fetchStats();
      } else {
        setError('❌ Invalid founder code.');
      }
    } catch (err) {
      console.error(err);
      setError('⚠️ Access denied.');
    }
  };

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${API}/api/founder/stats`);
      setPlatformStats(res.data);
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <SmartChat />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
          <div className="flex justify-between mb-2">
            <h2 className="text-3xl font-bold">🧬 Founder Control Panel</h2>
            <LanguageSelector />
          </div>

          {!authorized ? (
            <>
              <p className="text-center text-gray-600 mb-4">Enter founder code to unlock controls.</p>
              <div className="flex justify-center gap-3">
                <input
                  type="password"
                  placeholder="Enter founder code"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="px-4 py-2 border rounded w-64"
                />
                <button
                  onClick={handleAccess}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                  Unlock
                </button>
              </div>
              {error && <p className="text-center text-red-600 mt-4">{error}</p>}
            </>
          ) : (
            <>
              <p className="mb-4 text-center text-gray-700">✅ Access granted. Viewing live system metrics:</p>

              {platformStats ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-100 p-4 rounded shadow">
                    <h3 className="font-semibold">🛡️ Total Members</h3>
                    <p className="text-2xl">{platformStats.members}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded shadow">
                    <h3 className="font-semibold">📂 Cases Submitted</h3>
                    <p className="text-2xl">{platformStats.cases}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded shadow">
                    <h3 className="font-semibold">🗳️ Active Proposals</h3>
                    <p className="text-2xl">{platformStats.proposals}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded shadow">
                    <h3 className="font-semibold">💰 Treasury Balance</h3>
                    <p className="text-2xl">Ξ {platformStats.treasury}</p>
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-500">🔄 Loading stats...</p>
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
