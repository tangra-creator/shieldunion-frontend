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
    idDocument: null,
  });

  const [calculatedFee, setCalculatedFee] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (userType === "member") {
      const income = parseFloat(form.income);
      if (!income) {
        setCalculatedFee(0);
      } else if (income <= 10000) setCalculatedFee(6);
      else if (income <= 15000) setCalculatedFee(10);
      else if (income <= 25000) setCalculatedFee(20);
      else if (income <= 50000) setCalculatedFee(50);
      else if (income <= 100000) setCalculatedFee(100);
      else if (income <= 200000) setCalculatedFee(200);
      else setCalculatedFee(500);
    } else if (userType === "civguard") {
      if (!form.groupSize || form.groupSize < 1) {
        setCalculatedFee(0);
      } else {
        const base = 50;
        const extra = (form.groupSize - 1) * 25;
        setCalculatedFee(base + extra);
      }
    }
  }, [form.income, form.groupSize, userType]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documents") {
      setForm({ ...form, documents: files[0] });
    } else if (name === "idDocument") {
      setForm({ ...form, idDocument: files[0] });
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
          <>
            <div>
              <label className="block font-semibold mb-1">Select Your Annual Income Range</label>
              <select
                name="income"
                value={form.income}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded text-sm"
              >
                <option value="">-- Select Income Range --</option>
                <option value="10000">£0–10,000 → £6</option>
                <option value="15000">£10,001–15,000 → £10</option>
                <option value="25000">£15,001–25,000 → £20</option>
                <option value="50000">£25,001–50,000 → £50</option>
                <option value="100000">£50,001–100,000 → £100</option>
                <option value="200000">£100,001–200,000 → £200</option>
                <option value="250000">Over £200,000 → £500 (Gold Tier)</option>
              </select>
            </div>

            <div className="mt-3">
              <label className="block font-semibold mb-1">Upload Proof of Income</label>
              <input
                type="file"
                name="documents"
                onChange={handleChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
                className="w-full text-sm"
              />
            </div>

            <div className="mt-3">
              <label className="block font-semibold mb-1">Upload ID Document</label>
              <input
                type="file"
                name="idDocument"
                onChange={handleChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
                className="w-full text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                Required for AI identity trust — not visible to public
              </p>
            </div>
          </>
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

        {userType === "civguard" && (
          <div className="mt-2 font-bold text-base">
            💰 Total Fee: £{isNaN(calculatedFee) || calculatedFee === 0 ? "0.00" : calculatedFee}
          </div>
        )}

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

import Footer from '../components/Footer'; // ✅ correct


function App() {
  return (
    <>
      <Routes>{/* your routes */}</Routes>
      <Footer />
    </>
  );
}


export default Register;
