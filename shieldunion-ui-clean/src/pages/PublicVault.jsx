import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import SmartChat from "../components/SmartChat";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const PublicVault = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [urgencyFilter, setUrgencyFilter] = useState("");
  const [sortNewest, setSortNewest] = useState(true);

  useEffect(() => {
    const fetchVault = async () => {
      try {
        const res = await axios.get(`${API}/api/vault/public`);
        setEntries(res.data || []);
      } catch (err) {
        console.error("Failed to fetch public vault:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVault();
  }, []);

  const filteredItems = entries
    .filter((item) =>
      (item.title + item.summary).toLowerCase().includes(searchQuery)
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
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
          <div className="flex justify-end mb-2">
            <LanguageSelector />
          </div>

          <h1 className="text-3xl font-bold mb-4 text-center">🗂️ Public Vault</h1>
          <p className="text-center mb-8 text-gray-600">
            Browse public case summaries and documents shared with transparency.
          </p>

          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <input
                  type="text"
                  placeholder="🔎 Search public vault"
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
                {filteredItems.length} entries matched
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border p-4 rounded shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title || "Untitled"}
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      {item.summary || "No summary provided."}
                    </p>
                    {item.urgency === "critical" && (
                      <span className="text-red-600 text-xs bg-red-100 px-2 py-0.5 rounded">
                        🔥 Urgent
                      </span>
                    )}
                    <p className="text-xs text-gray-500 italic mt-1">
                      Posted:{" "}
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString()
                        : "Unknown"}
                    </p>
                    {item.fileUrl && (
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline text-sm block mt-1"
                      >
                        📎 View Document
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PublicVault;
