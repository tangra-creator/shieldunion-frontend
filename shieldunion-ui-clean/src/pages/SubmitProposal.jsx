import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import SmartChat from "../components/SmartChat";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const SubmitProposal = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: 3,
    urgency: "normal",
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("English");

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
      {/* 🌍 Language Switcher */}
      <div className="text-right px-6 pt-4 text-sm text-gray-600">
        🌐 Language:
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="ml-2 px-2 py-1 border rounded"
        >
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
          <option>العربية</option>
          <option>Türkçe</option>
          <option>Български</option>
        </select>
      </div>

      <main className="flex-grow">
        <div className="max-w-xl mx-auto mt-6 p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">📝 Submit DAO Proposal</h2>
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
              className="w-full border p-2 rounded"
              rows={4}
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

          {/* 🧠 Optional SmartChat */}
          <div className="mt-8">
            <SmartChat caseId="DAO-PROPOSAL" sender="dao" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitProposal;
