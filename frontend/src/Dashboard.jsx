import React, { useEffect, useState } from "react";

function Dashboard() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://your-backend-url.onrender.com/api/register")  // ✅ Replace with actual URL
      .then((res) => res.json())
      .then((data) => {
        setRegistrations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching registrations:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Registered Members</h2>
      {loading ? (
        <p>Loading...</p>
      ) : registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        registrations.map((r, index) => (
          <div key={index} className="mb-4 p-3 border rounded shadow">
            <p><strong>Name:</strong> {r.fullName}</p>
            <p><strong>Email:</strong> {r.email}</p>
            <p><strong>Tier:</strong> {r.incomeTier}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
