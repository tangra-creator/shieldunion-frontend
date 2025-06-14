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
