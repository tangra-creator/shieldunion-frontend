// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="mb-4">
        Shieldunion operates as a decentralized legal engine. We do not use traditional email support.
      </p>

      <p className="mb-4">
        For secure contact, please use the Vault interface or DAO proposal system depending on your situation. If you are at risk, use the “SubmitCase” function and mark your case as Tier 1.
      </p>

      <p className="mb-4">
        For public collaboration, government inquiries, or legal recognition requests, please use the Recognition Proposal interface (coming soon).
      </p>

      <p className="mb-4">
        Shieldunion will never ask for your password, identification, or offline contact. All communication is protected within the system.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: June 2025
      </p>
    </div>
  );
};

export default Contact;
