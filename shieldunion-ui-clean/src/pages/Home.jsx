import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-2">
          <span>🛡️</span> Welcome to <span className="text-black">ShieldUnion</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8">
          The unstoppable global protection system powered by AI, DAO, and family legacy.
        </p>

        {/* ✅ Your YouTube Video Embed */}
        <div className="mb-10 w-full">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/Xv-QWQHfXY8"
              title="ShieldUnion Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[400px]"
            ></iframe>
          </div>
        </div>

        {/* ✅ Two Join Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/register?type=member"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            🙋 Join as Member
          </Link>
          <Link
            to="/register?type=civguard"
            className="border border-black text-black px-6 py-3 rounded hover:bg-black hover:text-white transition"
          >
            🛡️ Join as CivGuard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
