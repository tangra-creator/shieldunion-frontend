import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const MemberProfile = () => {
  const [profile, setProfile] = useState({ alias: '', wallet: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API}/api/member/profile`);
        setProfile(res.data);
      } catch (err) {
        console.error('Profile fetch failed:', err);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`${API}/api/member/profile`, profile);
      setMessage('✅ Profile updated.');
    } catch (err) {
      console.error('Update failed:', err);
      setMessage('❌ Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <main className="flex-grow">
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-6 text-center">🙍 Member Profile</h2>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Alias</label>
              <input
                type="text"
                name="alias"
                value={profile.alias}
                onChange={handleChange}
                placeholder="Your Alias"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Wallet Address</label>
              <input
                type="text"
                name="wallet"
                value={profile.wallet}
                onChange={handleChange}
                placeholder="Wallet Address"
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded text-white ${
                loading ? 'bg-gray-500' : 'bg-black hover:bg-gray-800'
              }`}
            >
              {loading ? 'Saving...' : 'Save Profile'}
            </button>
          </form>

          {message && <p className="mt-4 text-center text-blue-600">{message}</p>}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MemberProfile;
