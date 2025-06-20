import React, { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const ClassifiedVault = () => {
  const [vaultItems, setVaultItems] = useState([]);
  const [accessCode, setAccessCode] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAccess = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/api/vault/access`, { code: accessCode });
      if (res.data?.items) {
        const sorted = [...res.data.items].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setVaultItems(sorted);
        setAuthorized(true);
        setError('');
      } else {
        throw new Error('Invalid response');
      }
    } catch (err) {
      console.error('Vault access error:', err);
      setError('Access denied. Invalid or expired code.');
      setAuthorized(false);
      setVaultItems([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4 text-center">🔒 Classified Vault</h2>

      {!authorized ? (
        <>
          <p className="text-center text-gray-600 mb-4">
            Enter your authorized access code to view classified DAO records.
          </p>
          <div className="flex gap-4 items-center justify-center">
            <input
              type="text"
              placeholder="Access code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              className="px-4 py-2 border rounded w-64"
            />
            <button
              onClick={handleAccess}
              disabled={loading}
              className={`px-4 py-2 text-white rounded ${
                loading ? 'bg-gray-500' : 'bg-black hover:bg-gray-800'
              }`}
            >
              {loading ? '🔓 Unlocking...' : 'Unlock'}
            </button>
          </div>
          {error && <p className="mt-4 text-center text-red-600">{error}</p>}
        </>
      ) : (
        <div className="mt-6 space-y-4">
          <p className="text-center text-sm text-gray-600 mb-2">
            🗂️ {vaultItems.length} classified records unlocked
          </p>
          {vaultItems.map((item, index) => (
            <div key={index} className="border p-4 rounded bg-gray-50 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">
                  {item.title || '📝 Untitled Record'}
                </h3>
                {item.urgency === 'critical' && (
                  <span className="text-red-500 text-xs bg-red-100 px-2 py-0.5 rounded">
                    🔥 Urgent
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 mt-2 mb-2">
                {item.content || 'No description provided.'}
              </p>
              <p className="text-xs text-gray-500 italic">
                Uploaded: {new Date(item.createdAt).toLocaleDateString()}
              </p>
              {item.fileUrl && (
                <a
                  href={item.fileUrl}
                  className="text-blue-600 text-sm underline mt-1 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📎 View Attached File
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import Footer from '../components/Footer'; // ✅ correct

function App() {
  return (
    <>
      <Routes>{/* your routes */}</Routes>
      <Footer />
    </>
  );
}


export default ClassifiedVault;
