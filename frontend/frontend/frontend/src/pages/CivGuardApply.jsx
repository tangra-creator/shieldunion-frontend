import { useState } from "react";
import axios from "axios";

const CivGuardApply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    profession: "",
    region: "",
    membershipType: "",
    organizationType: "Solo",
    background: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // This route will be wired up later
      await axios.post("https://shieldunion-backend.onrender.com/civguard", formData);
      setMessage("CivGuard application submitted successfully.");
    } catch (error) {
      console.error("Error submitting CivGuard application:", error);
      setMessage("Submission failed.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Apply as a CivGuard</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          required
          className="w-full border p-2"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border p-2"
          onChange={handleChange}
        />

        <select
          name="profession"
          required
          className="w-full border p-2"
          onChange={handleChange}
        >
          <option value="">Select Profession</option>
          <option value="Lawyer">Lawyer</option>
          <option value="Activist">Activist</option>
          <option value="Investigator">Investigator</option>
          <option value="Security Expert">Security Expert</option>
        </select>

        <input
          name="region"
          type="text"
          placeholder="Region / Country"
          required
          className="w-full border p-2"
          onChange={handleChange}
        />

        <select
          name="membershipType"
          required
          className="w-full border p-2"
          onChange={handleChange}
        >
          <option value="">Membership Tier</option>
          <option value="Solo">Solo CivGuard (£50/month)</option>
          <option value="SmallGroup">Small Group (2–10) – £50 + £25/member</option>
          <option value="Firm">Firm (10+) – £50 × lawyers</option>
        </select>

        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="organizationType"
              value="Solo"
              checked={formData.organizationType === "Solo"}
              onChange={handleChange}
            />
            Solo
          </label>
          <label>
            <input
              type="radio"
              name="organizationType"
              value="Group"
              checked={formData.organizationType === "Group"}
              onChange={handleChange}
            />
            Group
          </label>
        </div>

        <textarea
          name="background"
          placeholder="Your background, motivation, and experience"
          rows="4"
          className="w-full border p-2"
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Submit Application
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default CivGuardApply;
