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
// src/pages/TermsOfUse.jsx
import React from "react";

const TermsOfUse = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>

      <p className="mb-4">
        By using Shieldunion, you agree to operate within the platform’s protected system, governed by DAO consensus and smart AI routing. This platform exists solely for the protection of individuals, families, and communities from injustice, corruption, and persecution.
      </p>

      <p className="mb-4">
        Users must be of legal age or guaranteed by a legal-age third party. All submissions are final, and access to services is subject to case verification, membership validation, and DAO approval.
      </p>

      <p className="mb-4">
        No user may interfere with platform automation or override DAO outcomes. Shieldunion is a sovereign digital union; no government, corporation, or individual may claim ownership or request takedown of its services without DAO consent.
      </p>

      <p className="mb-4">
        All payments, protection claims, and interactions are logged in a cryptographic ledger controlled by the system — not by any human operator. Attempts to clone, impersonate, or fraudulently use the platform will result in permanent denial and blacklisting.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: June 2025
      </p>
    </div>
  );
};

export default TermsOfUse;
