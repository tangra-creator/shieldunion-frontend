import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get("type") || "member";

  const [form, setForm] = useState({
    name: "",
    email: "",
    income: "",
    groupSize: 1,
    documents: null,
  });

  const [calculatedFee, setCalculatedFee] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (userType === "member") {
      const income = parseFloat(form.income);
      if (income <= 10000) setCalculatedFee(6);
      else if (income <= 15000) setCalculatedFee(10);
      else if (income <= 25000) setCalculatedFee(20);
      else if (income <= 50000) setCalculatedFee(50);
      else if (income <= 100000) setCalculatedFee(100);
      else if (income <= 200000) setCalculatedFee(200);
      else setCalculatedFee(500); // Default for Gold Tier
    } else if (userType === "civguard") {
      const base = 50;
      const extra = form.groupSize > 1 ? (form.groupSize - 1) * 25 : 0;
      setCalculatedFee(base + extra);
    }
  }, [form.income, form.groupSize, userType]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documents") {
      setForm({ ...form, documents: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      formData.append(key, val);
    });
    formData.append("userType", userType);
    formData.append("fee", calculatedFee);

    try {
      await axios.post("http://localhost:5000/api/register", formData);
      setMessage("✅ Registration successful!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Registration failed. Please try again.");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 sm:p-6 mt-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        {userType === "civguard" ? "🛡️ CivGuard Registration" : "🙋 Member Registration"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded text-sm"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded text-sm"
          />
        </div>

        {userType === "member" && (
          <div>
            <label className="block font-semibold mb-1">Your Annual Income (£)</label>
            <input
              type="number"
              name="income"
              value={form.income}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded text-sm"
            />

            <div className="mt-3 text-sm text-gray-600">
              <p className="font-semibold mb-2">💸 Monthly Fee Based on Income:</p>
              <ul className="list-disc list-inside space-y-1 text-left text-xs">
                <li>£0–10,000 → £6</li>
                <li>£10,001–15,000 → £10</li>
                <li>£15,001–25,000 → £20</li>
                <li>£25,001–50,000 → £50</li>
                <li>£50,001–100,000 → £100</li>
                <li>£100,001–200,000 → £200</li>
                <li>Over £200,000 → £500–£1500 (Gold Tier)</li>
              </ul>
            </div>
          </div>
        )}

        {userType === "civguard" && (
          <>
            <div>
              <label className="block font-semibold mb-1">CivGuard Group Size</label>
              <input
                type="number"
                name="groupSize"
                min="1"
                value={form.groupSize}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                Solo = £50 · +£25 per additional member
              </p>
            </div>

            <div>
              <label className="block font-semibold mb-1">Upload ID / Certificate</label>
              <input
                type="file"
                name="documents"
                onChange={handleChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
                className="w-full text-sm"
              />
            </div>
          </>
        )}

        <div className="mt-2 font-bold text-base">
          💰 Total Fee: £{calculatedFee}
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 text-sm"
        >
          Submit Registration
        </button>
      </form>

      {message && (
        <div className="mt-4 text-center font-semibold text-blue-600 text-sm">
          {message}
        </div>
      )}
    </div>
  );
};

export default Register;
