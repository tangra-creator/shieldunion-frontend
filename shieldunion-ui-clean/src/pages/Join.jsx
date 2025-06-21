import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import SmartChat from "../components/SmartChat";

const Join = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 relative">
      <SmartChat />

      <main className="flex-grow">
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded shadow">
          <div className="flex justify-end mb-2">
            <LanguageSelector />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">🛡️ Join ShieldUnion</h2>

          <p className="text-center text-gray-700 mb-8">
            Select your role to begin registration. ShieldUnion protects justice through both protected Members and verified CivGuards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 👤 MEMBER JOIN */}
            <div className="border rounded p-5 shadow bg-gray-50 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">👤 Join as a Member</h3>
              <p className="text-sm text-gray-600 mb-4">
                Need protection, access to DAO support, or want to vote on justice cases? Join as a protected Member.
              </p>
              <Link to="/register">
                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                  Register as Member
                </button>
              </Link>
            </div>

            {/* 🛡️ CIVGUARD JOIN */}
            <div className="border rounded p-5 shadow bg-gray-50 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">🛡️ Join as a CivGuard</h3>
              <p className="text-sm text-gray-600 mb-4">
                Are you a lawyer, investigator, journalist, or protector? Apply to be a verified CivGuard and serve the mission.
              </p>
              <Link to="/civguard/apply">
                <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
                  Apply as CivGuard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Join;
