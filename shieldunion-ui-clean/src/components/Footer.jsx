// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 text-center mt-10">
      <p>
        © {new Date().getFullYear()} ShieldUnion. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
