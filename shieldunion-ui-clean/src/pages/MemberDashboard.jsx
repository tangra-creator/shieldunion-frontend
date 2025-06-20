import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const MemberDashboard = () => {
  const [myCases, setMyCases] = useState([]);
  const [alias, setAlias] = useState('');
  const [tier, setTier] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedAlias = localStorage.getItem('alias') || 'anonymous-user';
    setAlias(storedAlias);

    const fetchMyCases = async () => {
      try {
        const res = await axios.get(`${API}/api/cases/member/${storedAlias}`);
        setMyCases(res.data || []);
      } catch (err) {
        console.error('Failed to load member cases:', err);
      }
    };

    const storedTier = localStorage.getItem('tier') || 'Tier C';
    const storedRole = localStorage.getItem('role') || 'Member';
    setTier(storedTier);
    setRole(storedRole);

    fetchMyCases();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
          <h2 className="text-3xl font-bold mb-2 text-center">🛡️ Member Dashboard</h2>
          <p className="text-center text-gray-700 mb-2">
            Welcome, <strong>{alias}</strong>
          </p>
          <p className="text-center text-sm text-gray-500 mb-6">
            Membership: <span className="text-indigo-600 font-medium">{tier}</span> | Role: {role}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Link to="/my-cases" className="bg-blue-600 text-white p-4 rounded text-center hover:bg-blue-700">
              📂 View All My Cases
            </Link>
            <Link to="/my-protection" className="bg-green-600 text-white p-4 rounded text-center hover:bg-green-700">
              🛡️ Request Protection
            </Link>
            <Link to="/dao-voting" className="bg-yellow-500 text-white p-4 rounded text-center hover:bg-yellow-600">
              🗳️ Vote on DAO Proposals
            </Link>
            <Link to="/classified-vault" className="bg-purple-700 text-white p-4 rounded text-center hover:bg-purple-800">
              🔒 View Classified Vault
            </Link>
          </div>

          <h3 className="text-xl font-semibold mb-3">📋 Your Recent Cases</h3>
          {myCases.length === 0 ? (
            <p className="text-center text-gray-500">You haven't submitted any cases yet.</p>
          ) : (
            <ul className="space-y-4">
              {myCases.slice(0, 3).map((c) => (
                <li key={c.id} className="p-4 bg-gray-50 border rounded">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="text-sm text-gray-700">{c.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Submitted: {new Date(c.createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {role === 'CivGuard' && (
            <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-400 p-4 text-sm text-yellow-800 rounded">
              🛡️ You are a registered <strong>CivGuard</strong>. Remember to check flagged cases for review.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MemberDashboard;
