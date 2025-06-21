import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import MemberNavbar from '../components/MemberNavbar';
import SmartChat from '../components/SmartChat';
import LanguageSelector from '../components/LanguageSelector';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const SubmitCase = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [evidence, setEvidence] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/cases`, { title, description, evidence });
      setMessage('✅ Case submitted successfully.');
      setStatus('success');
      setTitle('');
      setDescription('');
      setEvidence('');
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to submit case.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <MemberNavbar />
      <SmartChat />

      <main className="flex-grow">
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
          <div className="flex justify-end mb-2">
            <LanguageSelector />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">📤 Submit a Case</h2>

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

          {message && (
            <p className={`mt-4 text-center font-medium ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}

          <div className="mt-10">
            <SmartChat caseId="SUBMIT-TEMP" sender="member" />
          </div>
        </div>
      </main>

      <Footer
        links={[
          { name: 'Privacy Policy', to: '/privacy' },
          { name: 'Terms of Use', to: '/terms' },
          { name: 'About', to: '/about' }
        ]}
        note="Your case is handled securely. Only the AI engine can review and assign protections anonymously."
      />
    </div>
  );
};

export default SubmitCase;
