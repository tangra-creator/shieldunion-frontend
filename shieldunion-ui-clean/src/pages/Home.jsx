import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-center flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Welcome to ShieldUnion
      </h1>

      <p className="text-lg max-w-xl text-gray-700 mb-6">
        ShieldUnion is the world’s first unstoppable global protection platform defending people from injustice, corruption, and danger.
        <br />
        Anonymous reporting. DAO voting. CivGuard response.
      </p>

      <Link
        to="/join"
        className="inline-block bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-800 transition"
      >
        Join Now
      </Link>

      <p className="text-sm text-gray-500 mt-4">
        Already registered? <Link to="/login" className="underline text-blue-600">Login here</Link>
      </p>

      {/* 🎥 Embedded Explainer Videos */}
      <div className="mt-10 space-y-10 max-w-4xl w-full">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">🔒 What is ShieldUnion?</h2>
          <iframe className="w-full h-64" src="/videos/intro.mp4" title="ShieldUnion Intro" controls></iframe>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">👥 For Members – Full Protection for £6</h2>
          <iframe className="w-full h-64" src="/videos/member-benefits.mp4" title="Member Benefits" controls></iframe>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">🛡️ For CivGuards – Join the Fight</h2>
          <iframe className="w-full h-64" src="/videos/civguard-call.mp4" title="CivGuard Promo" controls></iframe>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">🧠 Smart Engine Control</h2>
          <iframe className="w-full h-64" src="/videos/smart-engine.mp4" title="Smart AI Control" controls></iframe>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">🌍 Trade Corruption Intelligence Globally</h2>
          <iframe className="w-full h-64" src="/videos/infotrade.mp4" title="InfoTrade System" controls></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
