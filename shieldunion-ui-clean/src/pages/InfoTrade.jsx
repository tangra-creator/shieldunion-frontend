import React, { useState } from 'react';
import axios from 'axios';
import MemberNavbar from '../components/MemberNavbar';
import SmartChat from '../components/SmartChat';
import LanguageSelector from '../components/LanguageSelector';
import Footer from '../components/Footer';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const InfoTrade = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/api/info`, {
        title,
        content,
        price,
      });

      setTitle('');
      setContent('');
      setPrice('');
      setMessage('✅ Information submitted successfully.');
      setStatus('success');
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to submit information.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 relative">
      <MemberNavbar />
      <SmartChat />

      <main className="flex-grow">
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
          <div className="flex justify-end mb-2">
            <LanguageSelector />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🧠 InfoTrade Exchange</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Information title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />

            <textarea
              placeholder="Describe your intel or evidence"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-2 border rounded"
            />

            <input
              type="number"
              placeholder="Requested payout (e.g. 100)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Submit Info for Review
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-center font-medium ${
                status === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </main>

      <Footer
        links={[
          { name: 'Privacy Policy', to: '/privacy' },
          { name: 'Terms of Use', to: '/terms' },
          { name: 'About', to: '/about' }
        ]}
        note="All submissions are reviewed by the ShieldUnion AI. Identities remain anonymous unless verified by smart governance."
      />
    </div>
  );
};

export default InfoTrade;
