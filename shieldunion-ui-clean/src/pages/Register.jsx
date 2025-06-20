import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PROMO_THRESHOLD = 1500; // first 1500 members free

const Register = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get("type") || "member";

  const [form, setForm] = useState({
    name: "",
    email: "",
    wallet: "",
    income: "",
    groupSize: 1,
    documents: null,
    idDocument: null,
    licenseDocument: null, // For CivGuard certification/license
    companyName: "", // For CivGuard
  });

  const [calculatedFee, setCalculatedFee] = useState(0);
  const [message, setMessage] = useState("");
  const [totalMembers, setTotalMembers] = useState(0); // for promo count

  // Fetch total members count for promo check
  useEffect(() => {
    const fetchTotalMembers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/members/count");
        setTotalMembers(res.data.count || 0);
      } catch (err) {
        console.error("Failed to fetch total members count:", err);
      }
    };
    fetchTotalMembers();
  }, []);

  useEffect(() => {
    if (totalMembers < PROMO_THRESHOLD) {
      // Promo active - free for now but inform about future fees
      setCalculatedFee(0);
    } else {
      // Promo ended - calculate fee normally for all members
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
    }
  }, [form.income, form.groupSize, userType, totalMembers]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documents") {
      setForm({ ...form, documents: files[0] });
    } else if (name === "idDocument") {
      setForm({ ...form, idDocument: files[0] });
    } else if (name === "licenseDocument") {
      setForm({ ...form, licenseDocument: files[0] });
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
      setMessage(
        totalMembers < PROMO_THRESHOLD
          ? "✅ Registration successful! You joined during the free membership promotion. After 1500 total members, all members (including you) will start paying the normal fees."
          : "✅ Registration successful! Membership fees apply."
      );
    } catch (err) {
      console.error(err);
      setMessage("❌ Registration failed. Please try again.");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 sm:p-6 mt-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        {userType === "civguard"
          ? "🛡️ CivGuard Registration"
          : "🙋 Member Registration"}
      </h2>

      {totalMembers < PROMO_THRESHOLD && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 rounded text-green-700 text-center font-semibold">
          🎉 Early Adopter Promotion Active: First 1500 members join <strong>free of charge</strong>!<br />
          After 1500 members total, <strong>all members</strong> will start paying the normal fees.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Wallet */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="wallet">
            Wallet Address (Optional)
          </label>
          <input
            id="wallet"
            name="wallet"
            type="text"
            value={form.wallet}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Income for Members */}
        {userType === "member" && (
          <div>
            <label className="block text-sm font-semibold" htmlFor="income">
              Monthly Income (Last 3 Months)
            </label>
            <input
              id="income"
              name="income"
              type="number"
              value={form.income}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        {/* Group Size for CivGuard */}
        {userType === "civguard" && (
          <div>
            <label className="block text-sm font-semibold" htmlFor="groupSize">
              Group Size (Number of Members in Your Team)
            </label>
            <input
              id="groupSize"
              name="groupSize"
              type="number"
              value={form.groupSize}
              onChange={handleChange}
              required
              min="1"
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        {/* Document Upload */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="idDocument">
            Upload ID Document (Required)
          </label>
          <input
            id="idDocument"
            name="idDocument"
            type="file"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Additional Uploads */}
        {userType === "member" && (
          <div>
            <label className="block text-sm font-semibold" htmlFor="documents">
              Upload Proof of Income (Last 3 Months)
            </label>
            <input
              id="documents"
              name="documents"
              type="file"
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        {userType === "civguard" && (
          <div>
            <label className="block text-sm font-semibold" htmlFor="licenseDocument">
              Upload License or Certification
            </label>
            <input
              id="licenseDocument"
              name="licenseDocument"
              type="file"
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        {/* Company/Name for CivGuard */}
        {userType === "civguard" && (
          <div>
            <label className="block text-sm font-semibold" htmlFor="companyName">
              Company or Personal Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={form.companyName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        {/* Fee Display */}
        <div className="mt-2 font-bold text-base">
          💰 Total Fee: £
          {calculatedFee === 0 ? "0.00" : calculatedFee.toFixed(2)}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 text-sm"
        >
          Submit Registration
        </button>
      </form>

      {/* Registration Message */}
      {message && (
        <div className="mt-4 text-center font-semibold text-blue-600 text-sm">
          {message}
        </div>
      )}
    </div>
  );
};

export default Register;
