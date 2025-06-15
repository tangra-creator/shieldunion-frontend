import React from 'react';

export default function Terms() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p>
        Shieldunion is a decentralized protection platform built to operate without human control, influence, or ownership. 
        By using this platform, you agree that:
      </p>
      <ul className="list-disc ml-6 my-4">
        <li>The platform cannot be sold, paused, or redirected by any individual, company, or government.</li>
        <li>All decisions are processed through autonomous AI and DAO governance mechanisms.</li>
        <li>You agree that no human party — including the founder or DAO members — are personally liable for any outcomes.</li>
        <li>Membership grants access to protection and services, but does not establish any legal ownership, shares, or control over the platform.</li>
        <li>Only the platform’s treasury and AI logic determine service operations, service cost, and risk-handling.</li>
      </ul>
      <p>
        Use of the platform constitutes acceptance of this legal and structural framework. If you do not agree, do not use Shieldunion.
      </p>
    </div>
  );
}
