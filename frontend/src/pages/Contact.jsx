<<<<<<< HEAD
import React from 'react';

export default function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contact & Communication</h1>
      <p>
        Shieldunion operates without a central office, team, or administrator. All communication is processed directly by our autonomous DAO and AI governance system.
      </p>
      <p className="mt-4">
        If you are a verified member or CivGuard participant, use your authenticated dashboard to submit secure messages, alerts, or proposals. 
        No direct human contact is available or required.
      </p>
      <ul className="list-disc ml-6 my-4">
        <li>No email or support staff exists — all actions are automated or DAO-reviewed.</li>
        <li>All message routing is encrypted and handled internally through secure smart logic.</li>
        <li>Messages from non-members or non-DAO entities are automatically declined.</li>
      </ul>
      <p className="mt-4">
        Shieldunion cannot be contacted, sued, or held responsible by any party, under any legal jurisdiction. Use of the platform confirms agreement with this structure.
      </p>
    </div>
  );
}
=======
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
>>>>>>> d54881f (Fix build issues and install proper Node version)
