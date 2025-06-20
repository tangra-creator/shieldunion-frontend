import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          🛡️ Welcome to <span className="text-black">ShieldUnion</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 px-2 sm:px-8">
          The unstoppable global protection system powered by AI, DAO, and family legacy.
        </p>

        {/* ✅ YouTube Video Embed Responsive */}
        <div className="mb-10 w-full">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/Xv-QWQHfXY8"
              title="ShieldUnion Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* ✅ Join Buttons - Responsive Stack */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
          <Link
            to="/register?type=member"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition text-sm sm:text-base"
          >
            🙋 Join as Member
          </Link>
          <Link
            to="/register?type=civguard"
            className="border border-black text-black px-6 py-3 rounded hover:bg-black hover:text-white transition text-sm sm:text-base"
          >
            🛡️ Join as CivGuard
          </Link>
        </div>
      </div>
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

export default Home;
