import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    axios.get("https://shieldunion-backend.onrender.com/registrations")
      .then((res) => setRegistrations(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h2>Registered Members</h2>
      {registrations.length === 0 ? (
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
