import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterCivGuard = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    wallet: "",
    orgType: "",
    orgName: "",
    serviceType: "",
    groupSize: 1,
    idDocument: null,
    licenseDocument: null,
    extraFiles: null,
    agree: false,
  });

  const [calculatedFee, setCalculatedFee] = useState(50);
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const res = await axios.get("/api/member/total");
        setTotalMembers(res.data.total);
      } catch (err) {
        console.error("Fetch total failed:", err);
      }
    };
    fetchTotal();
  }, []);

  useEffect(() => {
    const base = 50;
    const extra = form.groupSize > 1 ? (form.groupSize - 1) * 25 : 0;
    const total = base + extra;
    const onboarding = totalMembers < 1500 ? 0 : total * 2;
    setCalculatedFee(onboarding > 0 ? onboarding : 0);
  }, [form.groupSize, totalMembers]);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agree) return alert("You must agree to the terms.");

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    data.append("userType", "civguard");
    data.append("calculatedFee", calculatedFee);

    try {
      await axios.post("/api/civguard/apply", data);
      alert("CivGuard application submitted.");
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold text-center mb-6">
        🛡️ CivGuard Application
      </h2>

      <form onSubmit={handleSubmit}>
        <label className="block font-medium mb-1">Full Name (Main Contact)</label>
        <input name="fullName" onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />

        <label className="block font-medium mb-1">Email Address</label>
        <input name="email" type="email" onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />

        <label className="block font-medium mb-1">Wallet Address (Optional)</label>
        <input name="wallet" onChange={handleChange} className="w-full mb-4 p-2 border rounded" />

        <label className="block font-medium mb-1">Are you applying as:</label>
        <select name="orgType" onChange={handleChange} required className="w-full mb-4 p-2 border rounded">
          <option value="">-- Select Type --</option>
          <option value="solo">Solo Professional</option>
          <option value="small">Small Group (2–5)</option>
          <option value="agency">Agency / Law Firm (6+)</option>
        </select>

        <label className="block font-medium mb-1">Business / Legal Name</label>
        <input name="orgName" onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />

        <label className="block font-medium mb-1">Number of Team Members</label>
        <input
          name="groupSize"
          type="number"
          min="1"
          onChange={handleChange}
          value={form.groupSize}
          required
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block font-medium mb-1">Service Type</label>
        <select name="serviceType" onChange={handleChange} required className="w-full mb-4 p-2 border rounded">
          <option value="">-- Select --</option>
          <option value="legal">Legal / Human Rights</option>
          <option value="security">Private Security</option>
          <option value="investigation">Investigation / Intelligence</option>
          <option value="media">Media / Journalism</option>
          <option value="other">Other</option>
        </select>

        <label className="block font-medium mb-1">Upload ID Document</label>
        <input name="idDocument" type="file" accept=".pdf,.jpg,.png" onChange={handleChange} required className="w-full mb-4" />

        <label className="block font-medium mb-1">Upload License or Certification</label>
        <input name="licenseDocument" type="file" accept=".pdf,.jpg,.png" onChange={handleChange} required className="w-full mb-4" />

        <label className="block font-medium mb-1">Upload Additional Documents (optional)</label>
        <input name="extraFiles" type="file" multiple onChange={handleChange} className="w-full mb-4" />

        <div className="text-xl font-bold mb-4">
          💰 Estimated Fee: £{calculatedFee.toFixed(2)}
        </div>
        <div className="text-sm text-gray-600 mb-4">
          🔹 Fee = £50 base + £25 per team member after the first. First payment is double as onboarding.
        </div>

        <label className="block mb-4">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mr-2"
          />
          I agree to provide accurate data and allow the platform to verify all submitted documents.
        </label>

        <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          Submit Application
        </button>
      </form>

      <p className="text-xs text-center mt-4 italic text-gray-500">
        Powered by ShieldUnion Autonomous Governance Engine
      </p>
    </div>
  );
};

export default RegisterCivGuard;
