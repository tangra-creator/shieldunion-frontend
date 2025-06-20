import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import SmartChat from "../components/SmartChat";
import LanguageSelector from "../components/LanguageSelector";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const SubmitProposal = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: 3,
    urgency: "normal",
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

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
      setMessage("✅ Proposal submitted!");
      setFormData({ title: "", description: "", duration: 3, urgency: "normal" });
      setFile(null);
    } catch (err) {
      console.error("Proposal submit failed:", err);
      setMessage("❌ Failed to submit proposal.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <SmartChat />

      <main className="flex-grow">
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">📝 Submit DAO Proposal</h2>
            <LanguageSelector />
          </div>

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
              placeholder="Describe your proposal"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border p-2 rounded"
            />
            <div>
              <label className="block font-semibold mb-1">⏳ Vote Duration (days)</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                min={1}
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">🚨 Urgency Level</label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
                <option value="critical">Life-Risk (Tier 1)</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">📎 Attach Evidence (optional)</label>
              <input
                type="file"
                onChange={handleFile}
                className="w-full border p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              🚀 Submit Proposal
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center font-semibold text-blue-600">{message}</p>
          )}

          <div className="mt-8">
            <SmartChat caseId="DAO-PROPOSAL" sender="dao" />
          </div>
        </div>
      </main>

      <Footer
        links={[
          { name: "Privacy Policy", to: "/privacy" },
          { name: "Terms of Use", to: "/terms" },
          { name: "About", to: "/about" }
        ]}
        note="ShieldUnion is fully AI-governed. No human, including the founder, can view or modify your data."
      />
    </div>
  );
};

export default SubmitProposal;
