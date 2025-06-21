import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-sm px-4 py-6 text-center mt-10">
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2">
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/terms" className="hover:underline">Terms of Use</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
      <div>© {new Date().getFullYear()} ShieldUnion. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
