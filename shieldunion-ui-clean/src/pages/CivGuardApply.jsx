import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const CivGuardApply = () => {
  const [formData, setFormData] = useState({
    alias: "",
    type: "individual",
    groupSize: 1,
    serviceLevel: "local",
    paid: 50,
  });

  const [selectedFile, setSelectedFile] = useState(null);

  // 💰 Auto-calculate fee logic
  useEffect(() => {
    const { type, groupSize, serviceLevel } = formData;
    const baseFee = 50;
    let perExtra = 0;

    switch (serviceLevel) {
      case "local":
        perExtra = 10;
        break;
      case "regional":
        perExtra = 15;
        break;
      case "national":
        perExtra = 20;
        break;
      case "international":
        perExtra = 25;
        break;
      default:
        perExtra = 0;
    }

    const extra = type === "group" ? Math.max(groupSize - 1, 0) : 0;
    const total = baseFee + extra * perExtra;

    setFormData((prev) => ({ ...prev, paid: total }));
  }, [formData.type, formData.groupSize, formData.serviceLevel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "groupSize" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submission = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        submission.append(key, value)
      );
      if (selectedFile) {
        submission.append("document", selectedFile);
      }

      await axios.post(`${API}/api/civguard/apply`, submission, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Application submitted!");
      setFormData({
        alias: "",
        type: "individual",
        groupSize: 1,
        serviceLevel: "local",
        paid: 50,
      });
      setSelectedFile(null);
    } catch (err) {
      console.error("Application failed:", err);
      alert("❌ Submission failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <main className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">🛡️ Apply to Become a CivGuard</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-medium">Alias</label>
            <input
              type="text"
              name="alias"
              placeholder="e.g. justice_agent01"
              value={formData.alias}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <p className="text-sm text-gray-600">
              This is your public name until a case is accepted.
            </p>
          </div>

          <div>
            <label className="font-medium">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="individual">Individual</option>
              <option value="group">Group</option>
            </select>
            <p className="text-sm text-gray-600">
              Individual = solo professional. Group = law firm, NGO, team.
            </p>
          </div>

          <div>
            <label className="font-medium">Group Size</label>
            <input
              type="number"
              name="groupSize"
              value={formData.groupSize}
              onChange={handleChange}
              min={1}
              className="w-full border p-2 rounded"
            />
            <p className="text-sm text-gray-600">
              If you're an individual, keep this as 1. Groups must enter their team size.
            </p>
          </div>

          <div>
            <label className="font-medium">Service Level</label>
            <select
              name="serviceLevel"
              value={formData.serviceLevel}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="local">Local volunteer</option>
              <option value="regional">Regional professional</option>
              <option value="national">National agency or firm</option>
              <option value="international">International org or specialist</option>
            </select>
            <p className="text-sm text-gray-600">
              Fee: Local (£10), Regional (£15), National (£20), International (£25) per extra member.
            </p>
          </div>

          <div>
            <label className="font-medium">Upload Document</label>
            <input
              type="file"
              name="document"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="w-full border p-2 rounded bg-white"
            />
            <p className="text-sm text-gray-600">
              Upload ID, certificate, or legal proof (PDF/JPG/PNG).
            </p>
          </div>

          <div>
            <label className="font-medium">Calculated Fee (£)</label>
            <input
              type="number"
              name="paid"
              value={formData.paid}
              readOnly
              className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
            />
            <p className="text-sm text-gray-600">
              Auto-calculated based on your structure and team.
            </p>
          </div>

          <button
            type="submit"
            className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
          >
            🚀 Submit Application
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default CivGuardApply;
