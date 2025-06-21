import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import LanguageSelector from '../components/LanguageSelector';
import SmartChat from '../components/SmartChat';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const ClassifiedVault = () => {
  const [vaultItems, setVaultItems] = useState([]);
  const [accessCode, setAccessCode] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // NEW: Search, filter, sort states
  const [searchQuery, setSearchQuery] = useState('');
  const [urgencyFilter, setUrgencyFilter] = useState('');
  const [sortNewest, setSortNewest] = useState(true);

  const handleAccess = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/api/vault/access`, { code: accessCode });
      if (res.data?.items) {
        const sorted = [...res.data.items].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
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

  // NEW: Computed filtered + sorted list
  const filteredItems = vaultItems
    .filter((item) =>
      (item.title + item.content).toLowerCase().includes(searchQuery)
    )
    .filter((item) => (urgencyFilter ? item.urgency === urgencyFilter : true))
    .sort((a, b) =>
      sortNewest
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 relative">
      <SmartChat />

      <main className="flex-grow">
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
          <div className="flex justify-end mb-2">
            <LanguageSelector />
          </div>

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
            <div className="mt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <input
                  type="text"
                  placeholder="🔎 Search classified records"
                  className="px-3 py-2 border rounded w-full sm:w-1/2"
                  onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                />
                <select
                  onChange={(e) => setUrgencyFilter(e.target.value)}
                  className="px-3 py-2 border rounded w-full sm:w-1/4"
                >
                  <option value="">All Urgencies</option>
                  <option value="critical">🔥 Critical</option>
                  <option value="normal">🟡 Normal</option>
                </select>
                <button
                  onClick={() => setSortNewest((prev) => !prev)}
                  className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
                >
                  {sortNewest ? "📅 Newest First" : "📅 Oldest First"}
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 mb-2">
                🗂️ {filteredItems.length} classified records matched
              </p>

              <div className="space-y-4">
                {filteredItems.map((item, index) => (
                  <div key={index} className="border p-4 rounded bg-gray-50 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">
                        {item.title || "📝 Untitled Record"}
                      </h3>
                      {item.urgency === "critical" && (
                        <span className="text-red-500 text-xs bg-red-100 px-2 py-0.5 rounded">
                          🔥 Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 mt-2 mb-2">
                      {item.content || "No description provided."}
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
                    {item.proposalId && (
                      <a
                        href={`/dao/proposal/${item.proposalId}`}
                        className="text-purple-700 underline text-sm mt-2 inline-block"
                      >
                        🗳️ View Linked DAO Proposal
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClassifiedVault;
