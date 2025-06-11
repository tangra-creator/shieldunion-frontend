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
      const res = await axios.post("https://shieldunion-backend.onrender.com/api/register", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        incomeTier: formData.incomeTier,
      });

      setMessage(res.data.message || "Registration successful.");
    } catch (err) {
      setMessage(err.response?.data?.error || "Registration failed.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register for ShieldUnion</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <select
          name="incomeTier"
          onChange={handleChange}
          className="w-full p-2 border"
          required
        >
          <option value="">Select Income Tier</option>
          <option value="A">Tier A (£0–10,000)</option>
          <option value="B">Tier B (£10,001–15,000)</option>
          <option value="C">Tier C (£15,001–25,000)</option>
          <option value="D">Tier D (£25,001–50,000)</option>
          <option value="E">Tier E (£50,001–100,000)</option>
          <option value="F">Tier F (£100,001–200,000)</option>
          <option value="G">Tier G (Over £200,000)</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white p-2 w-full">
          Register
        </button>
      </form>
      {message && <p className="mt-2 text-center text-sm">{message}</p>}
    </div>
  );
};

export default Register;
