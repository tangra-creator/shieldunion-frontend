import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import LanguageSelector from '../components/LanguageSelector';
import SmartChat from '../components/SmartChat';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('✅ Message sent successfully!');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 relative">
      <SmartChat />

      <main className="flex-grow max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
        <div className="flex justify-end mb-2">
          <LanguageSelector />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">📬 Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
