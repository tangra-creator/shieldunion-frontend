import React, { useState } from "react";
import Footer from "../components/Footer";

const Terms = () => {
  const [language, setLanguage] = useState("English");

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* 🌐 Language Selector */}
      <div className="text-right px-6 pt-4 text-sm text-gray-600">
        🌐 Language:
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="ml-2 px-2 py-1 border rounded"
        >
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
          <option>العربية</option>
          <option>Türkçe</option>
          <option>Български</option>
        </select>
      </div>

      <main className="flex-grow">
        <div className="max-w-3xl mx-auto mt-6 p-6 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-4">📜 Terms & Conditions</h2>

          <p className="mb-4">
            By using ShieldUnion, you agree to operate within the platform’s legal and ethical
            framework. The system is designed for protective purposes only and must not be used
            for harmful, fraudulent, or malicious activities.
          </p>

          <p className="mb-4">
            Members must not share or expose classified or sensitive submissions unless authorized
            by DAO decision. CivGuard professionals are held to the highest code of conduct and must
            maintain full confidentiality.
          </p>

          <p className="mb-4">
            The platform reserves the right to ban, block, or neutralize any malicious account, actor,
            or organization attempting to corrupt or weaponize the DAO process.
          </p>

          <p className="mb-4">
            Use of ShieldUnion services implies acknowledgment of decentralized authority under
            DAO governance and AI-managed resolution. No central party (including the founder) is
            liable for individual member decisions or outcomes.
          </p>

          <p className="text-sm text-gray-500 text-right">Last updated: June 2025</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
