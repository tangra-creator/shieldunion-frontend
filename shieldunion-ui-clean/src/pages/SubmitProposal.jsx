import React, { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const SubmitProposal = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: 3,
    urgency: "normal",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (file) data.append("file", file);

    try {
      await axios.post(`${API}/api/proposals`, data);
      alert("✅ Proposal submitted!");
    } catch (err) {
      console.error("Proposal submit failed:", err);
      alert("❌ Failed to submit proposal.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">📝 Submit DAO Proposal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Proposal Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          min={1}
          className="w-full border p-2 rounded"
        />
        <select
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="normal">Normal</option>
          <option value="urgent">Urgent</option>
          <option value="critical">Life-Risk</option>
        </select>
        <input
          type="file"
          onChange={handleFile}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          🚀 Submit Proposal
        </button>
      </form>
    </div>
  );
};

import React from "react";
import Footer from "../components/Footer";

const PageName = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        {/* your existing content here */}
      </main>

      <Footer />
    </div>
  );
};


export default SubmitProposal;
