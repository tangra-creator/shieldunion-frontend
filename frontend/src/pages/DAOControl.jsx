import React, { useEffect, useState } from "react";

const DAOControl = () => {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/proposals")
      .then((res) => res.json())
      .then((data) => {
        setProposals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch proposals:", err);
        setLoading(false);
      });
  }, []);

  const vote = async (proposalId, choice) => {
    const response = await fetch("http://localhost:5000/api/proposals/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ proposalId, vote: choice }),
    });

    if (response.ok) {
      alert("Vote submitted!");
    } else {
      alert("Error submitting vote.");
    }
  };

  if (loading) return <div className="p-6">Loading proposals...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">DAO Voting</h1>
      {proposals.length === 0 && <p>No proposals available.</p>}
      {proposals.map((p) => (
        <div key={p.id} className="mb-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
          <p className="mb-2">{p.description}</p>
          <p className="text-sm text-gray-500 mb-4">
            Status: {p.status} | Ends: {new Date(p.endsAt).toLocaleString()}
          </p>
          {p.status === "open" && (
            <div className="flex gap-4">
              <button onClick={() => vote(p.id, "yes")} className="px-4 py-2 bg-green-600 text-white rounded">Yes</button>
              <button onClick={() => vote(p.id, "no")} className="px-4 py-2 bg-red-600 text-white rounded">No</button>
              <button onClick={() => vote(p.id, "abstain")} className="px-4 py-2 bg-gray-600 text-white rounded">Abstain</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DAOControl;
