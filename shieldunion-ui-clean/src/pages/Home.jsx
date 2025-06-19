import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-center flex flex-col items-center justify-center p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Welcome to ShieldUnion
      </h1>

      <p className="text-lg max-w-2xl text-gray-700 mb-6">
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

      <p className="text-sm text-gray-500 mt-3">
        Already registered?{" "}
        <Link to="/login" className="underline text-blue-600">
          Login here
        </Link>
      </p>

      {/* 🎥 Video/Promo Sections as Images */}
      <div className="mt-12 w-full max-w-4xl space-y-12">

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🎥 ShieldUnion: How It Works</h2>
          <img
            src="/assets/placeholder_platform.png"
            alt="ShieldUnion Platform Overview"
            className="w-full rounded shadow"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🛡️ CivGuard: Verified Protectors</h2>
          <img
            src="/assets/placeholder_civguard.png"
            alt="CivGuard Overview"
            className="w-full rounded shadow"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">💸 Full Protection for £6</h2>
          <img
            src="/assets/placeholder_6pounds.png"
            alt="Affordable Protection"
            className="w-full rounded shadow"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🌍 InfoTrade: Sell Truth. Buy Justice.</h2>
          <img
            src="/assets/placeholder_infotrade.png"
            alt="InfoTrade System"
            className="w-full rounded shadow"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
