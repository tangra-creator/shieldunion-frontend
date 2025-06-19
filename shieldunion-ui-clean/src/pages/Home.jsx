import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-center flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Welcome to ShieldUnion
      </h1>

      <p className="text-lg max-w-xl text-gray-700 mb-6">
        ShieldUnion is the world’s first unstoppable global protection platform
        defending people from injustice, corruption, and danger.
        <br />
        Anonymous reporting. DAO voting. CivGuard response.
      </p>

      <div className="bg-gray-100 rounded-lg p-6 max-w-3xl text-left text-gray-800 shadow mb-6">
        <h2 className="text-2xl font-bold mb-3 text-black">🌍 ShieldUnion — The World’s First Global AI Justice Engine</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>🔐 100% Anonymous</strong> reporting, evidence upload, and protection activation</li>
          <li><strong>⚖️ DAO-powered justice</strong> — where verified users vote on real cases</li>
          <li><strong>🛡️ CivGuard professionals</strong> respond: lawyers, investigators, security experts</li>
          <li><strong>💡 Smart engine control</strong> — no human interference, no corruption</li>
          <li><strong>💸 From £6/month</strong>, receive services worth thousands if your case is approved</li>
          <li><strong>🌐 Global reach</strong>: Individuals, groups, and entire nations welcome</li>
          <li><strong>🎯 InfoTrade</strong> — Earn by sharing verified evidence and truth</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          Whether you're silenced, threatened, or seeking justice — ShieldUnion gives you a voice, a shield, and a system that works beyond borders.
        </p>
      </div>

      <Link
        to="/join"
        className="inline-block bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-800 transition"
      >
        Join Now
      </Link>

      <p className="text-sm text-gray-500 mt-4">
        Already registered? <Link to="/login" className="underline text-blue-600">Login here</Link>
      </p>
    </div>
  );
};

export default Home;
