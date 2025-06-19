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

      {/* 🎥 ShieldUnion Platform Overview */}
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">🎥 ShieldUnion: How It Works</h2>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            className="w-full h-64 md:h-96 rounded shadow"
            src="https://www.youtube.com/embed/Hyh3h_yIDf0"
            title="What is a DAO?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">🛡️ CivGuard: Verified Protectors</h2>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            className="w-full h-64 md:h-96 rounded shadow"
            src="https://www.youtube.com/embed/Ropj9L9ULmU"
            title="Privacy Tools for Activists"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">💸 Full Protection for £6</h2>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            className="w-full h-64 md:h-96 rounded shadow"
            src="https://www.youtube.com/embed/H7aXzZsj5vI"
            title="Human Rights & Tech"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">🌍 InfoTrade: Sell Truth. Buy Justice.</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-64 md:h-96 rounded shadow"
            src="https://www.youtube.com/embed/2rCyK1mK8fs"
            title="Decentralized Justice"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
