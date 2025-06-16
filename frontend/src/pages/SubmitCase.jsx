// src/pages/SubmitCase.jsx
import React, { useState } from "react";
import MemberLayout from '../components/MemberLayout';
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const [caseTitle, setCaseTitle] = useState("");
const [caseDescription, setCaseDescription] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {
    title: caseTitle,
    description: caseDescription
  };

  try {
    await axios.post(`${API}/submit`, data);
    alert("✅ Case submitted successfully!");
  } catch (err) {
    console.error("❌ Case submission failed:", err);
    alert("Failed to submit case.");
  }
};

const SubmitCase = () => {
  return (
    <MemberLayout>
      <h2 className="text-2xl font-semibold mb-4">📤 Submit a New Case</h2>
      <p>Here you can submit a protected case for Shieldunion review. Your identity stays anonymous.</p>
      {<form onSubmit={handleSubmit} className="space-y-4 mt-4">
  <input
    type="text"
    placeholder="Case Title"
    value={caseTitle}
    onChange={(e) => setCaseTitle(e.target.value)}
    className="w-full border p-2"
    required
  />
  <textarea
    placeholder="Describe your case"
    value={caseDescription}
    onChange={(e) => setCaseDescription(e.target.value)}
    className="w-full border p-2"
    required
  />
  <button
    type="submit"
    className="bg-black text-white px-4 py-2 rounded"
  >
    Submit Case
  </button>
</form>
}
    </MemberLayout>
  );
};

export default SubmitCase;
