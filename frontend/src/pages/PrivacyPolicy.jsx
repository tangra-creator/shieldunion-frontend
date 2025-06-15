// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Shieldunion is committed to protecting your privacy. All information submitted to this platform is encrypted and stored securely. We do not share your data with third parties, governments, or corporations.
      </p>
      <p className="mb-4">
        All actions, forms, and submissions are anonymized by default. No user or member has access to your identity unless explicitly authorized by DAO consensus.
      </p>
      <p className="mb-4">
        We use browser-based language detection only to enhance your experience. No personal tracking or marketing cookies are used.
      </p>
      <p className="mb-4">
        You may request account deletion or data export through the secure vault access feature. However, if your protection plan is active, we will retain encrypted records for audit and defense purposes until resolution.
      </p>
      <p className="text-sm text-gray-500 mt-8">
        Last updated: June 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
