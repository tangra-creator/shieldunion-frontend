import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import SmartChat from '../components/SmartChat';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const SubmitCase = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [evidence, setEvidence] = useState('');
  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState('English');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/cases`, { title, description, evidence });
      setMessage('✅ Case submitted successfully.');
      setTitle('');
      setDescription('');
      setEvidence('');
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to submit case.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* 🌐 Language Switch */}
      <div className="text-right px-6 pt-4 text-sm text-gray-600">
        🌐 Language:
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="ml-2 px-2 py-1 border rounded"
        >
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
          <option>العربية</option>
          <option>Türkçe</option>
          <option>Български</option>
        </select>
      </div>

      <main className="flex-grow">
        <div className="max-w-xl mx-auto mt-6 p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-bold mb-6 text-center">📤 Submit a Case</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Case title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              placeholder="Describe your situation clearly"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              placeholder="Optional: links, names, file links, or context"
              value={evidence}
              onChange={(e) => setEvidence(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border rounded"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Submit Case
            </button>
          </form>

          {message && <p className="mt-4 text-center font-semibold">{message}</p>}

          {/* 🧠 Optional: SmartChat if case needs review */}
          <div className="mt-10">
            <SmartChat caseId="SUBMIT-TEMP" sender="member" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitCase;
