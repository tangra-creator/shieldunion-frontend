import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          🛡️ Welcome to ShieldUnion
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          The unstoppable platform for truth, protection, and justice — powered by AI, DAO, and human legacy.
        </p>

        <div className="mb-10">
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://share.synthesia.io/embeds/videos/4aebfec9-3b43-4ae2-9945-a31736f0f550"
              title="Intro Video"
              loading="lazy"
              allowFullScreen
              className="w-full h-96 rounded"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            🚀 Join Now
          </Link>
          <Link
            to="/contact"
            className="border border-black text-black px-6 py-3 rounded hover:bg-black hover:text-white transition"
          >
            📩 Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
