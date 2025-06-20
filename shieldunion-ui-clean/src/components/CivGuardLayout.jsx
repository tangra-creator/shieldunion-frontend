import React from 'react';
import CivGuardNavbar from './CivGuardNavbar';
import { Outlet, Link } from 'react-router-dom';

const CivGuardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔙 Back to Main Home */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">🛡️ CivGuard Panel</h2>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 underline text-sm"
        >
          ← Back to ShieldUnion Home
        </Link>
      </div>

      {/* 🔽 CivGuard Navigation */}
      <CivGuardNavbar />

      {/* 📄 Page Content */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

import Footer from "../components/Footer"; // Adjust path if needed

...

return (
  <div>
    {/* ... existing layout */}
    <Footer />
  </div>
);


import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>{/* your routes */}</Routes>
      <Footer />
    </>
  );
}


export default CivGuardLayout;
