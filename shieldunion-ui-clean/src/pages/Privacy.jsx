import React from 'react';
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-4">🔐 Privacy Policy</h2>

          <p className="mb-4">
            ShieldUnion is committed to protecting your identity and personal information.
            We collect only the minimum data required to provide protection, secure DAO voting,
            and manage CivGuard operations.
          </p>

          <p className="mb-4">
            No identifying data is ever shared without your consent or DAO approval. Your submissions
            are encrypted and stored with decentralized redundancy. Only authorized CivGuard
            professionals can request temporary decryption under strict DAO scrutiny.
          </p>

          <p className="mb-4">
            We do not sell, monetize, or share user data with third parties, governments, or corporations.
            ShieldUnion was built to be sovereign, anonymous, and non-exploitable.
          </p>

          <p className="mb-4">
            Your wallet and alias are used solely for internal identity linking, protection requests,
            and platform automation.
          </p>

          <p className="text-sm text-gray-500 text-right">Last updated: June 2025</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
