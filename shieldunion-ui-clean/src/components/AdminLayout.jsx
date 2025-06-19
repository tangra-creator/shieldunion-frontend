import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔙 Back to Main Home */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-700">🛠️ Admin Dashboard</h2>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 underline text-sm"
        >
          ← Back to ShieldUnion Home
        </Link>
      </div>

      {/* 📌 Admin Navigation (optional, add links if needed) */}
      <nav className="bg-gray-100 px-4 py-2 text-sm text-gray-600">
        <span className="font-medium">⚙️ Tools:</span>
        <span className="ml-4 text-gray-700">Logs, Stats, Users (Coming soon)</span>
      </nav>

      {/* 📄 Page Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
