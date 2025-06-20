import React, { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const SubmitCase = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [evidence, setEvidence] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/api/cases`, {
        title,
        description,
        evidence,
      });

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
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
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
          placeholder="Case description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Attach evidence (optional URLs, text, names)"
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
      {message && <p className="mt-4 text-center">{message}</p>}
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


export default SubmitCase;
