import React from "react";
import Footer from "../components/Footer";

const AboutPlatform = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold mb-4">⚙️ About the Platform</h2>
        <p className="mb-4">
          ShieldUnion is a decentralized protection ecosystem powered by AI automation, DAO governance, and anonymous infrastructure.
          It is designed to serve whistleblowers, victims, and defenders globally with zero compromise.
        </p>
        <p className="mb-4">The platform operates through three major forces:</p>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>
            <strong>DAO (Decentralized Autonomous Organization):</strong> All decisions are made through proposal voting by anonymous members.
          </li>
          <li>
            <strong>CivGuard Network:</strong> Verified lawyers, security experts, journalists, and investigators assigned to protect and respond.
          </li>
          <li>
            <strong>AI Engine:</strong> Handles automation, monitoring, member protection triggers, and service routing without human bias.
          </li>
        </ul>
        <p className="mb-4">
          ShieldUnion does not rely on traditional hosting. It is built on decentralized cloud and IPFS-like structures,
          with cryptographic origin signatures to prevent forking, cloning, or hijacking.
        </p>
        <p className="mb-4">
          No human holds master keys. Even the founder is bound by the system. All rules are embedded and enforced by the protocol.
        </p>
        <p className="text-sm text-gray-500 text-right">Last updated: June 2025</p>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPlatform;
