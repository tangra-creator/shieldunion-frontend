import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const CivGuardReview = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(`${API}/api/civguard/pending`);
      setApplications(res.data);
    } catch (err) {
      console.error("Failed to load applications:", err);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.post(`${API}/api/civguard/approve`, { id });
      fetchApplications(); // refresh list
    } catch (err) {
      console.error("Approve failed:", err);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`${API}/api/civguard/reject`, { id });
      fetchApplications();
    } catch (err) {
      console.error("Reject failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <main className="flex-grow max-w-4xl mx-auto p-6 bg-white shadow rounded mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">📝 CivGuard Applications Review</h2>

        {applications.length === 0 ? (
          <p className="text-center text-gray-600">No pending applications.</p>
        ) : (
          applications.map((app) => (
            <div key={app._id} className="mb-4 border rounded p-4 bg-gray-50 shadow-sm">
              <p><strong>Name:</strong> {app.name}</p>
              <p><strong>Service:</strong> {app.serviceType}</p>
              <p><strong>Group Size:</strong> {app.groupSize}</p>
              <p><strong>Email:</strong> {app.email}</p>

              {app.document && (
                <p>
                  📎{" "}
                  <a
                    href={`${API}${app.document}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Uploaded File
                  </a>
                </p>
              )}

              <div className="mt-3 flex gap-4">
                <button
                  onClick={() => handleApprove(app._id)}
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                >
                  ✅ Approve
                </button>
                <button
                  onClick={() => handleReject(app._id)}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  ❌ Reject
                </button>
              </div>
            </div>
          ))
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CivGuardReview;
