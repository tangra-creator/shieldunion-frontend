import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    incomeTier: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      await axios.post("https://shieldunion-backend.onrender.com/case1", caseData);
      setMessage("Registered successfully");
    } catch (error) {
      console.error("Registration failed:", error);
      setMessage("Registration failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register for ShieldUnion</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <select
          name="incomeTier"
          value={formData.incomeTier}
          onChange={handleChange}
          required
          className="w-full border p-2"
        >
          <option value="">Select Income Tier</option>
          <option value="Tier A">Tier A (£0–10,000)</option>
          <option value="Tier B">Tier B (£10,001–15,000)</option>
          <option value="Tier C">Tier C (£15,001–25,000)</option>
          <option value="Tier D">Tier D (£25,001–50,000)</option>
          <option value="Tier E">Tier E (£50,001–100,000)</option>
          <option value="Tier F">Tier F (£100,001–£200,000)</option>
          <option value="Tier G">Tier G (Over £200,000)</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Register;
