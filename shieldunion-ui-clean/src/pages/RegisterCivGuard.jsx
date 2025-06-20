import React, { useState, useEffect } from "react";
import axios from "axios";

const CivGuardRegister = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    profession: "",
    serviceLevel: "basic",
    groupSize: 1,
    documents: null,
    paymentHash: ""
  });

  const [calculatedFee, setCalculatedFee] = useState(50);

  useEffect(() => {
    let baseFee = 50;
    if (form.groupSize > 1) baseFee += (form.groupSize - 1) * 25;
    setCalculatedFee(baseFee);
  }, [form.groupSize]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("calculatedFee", calculatedFee);

    try {
      await axios.post("/api/civguard/register", data);
      alert("Application submitted successfully.");
    } catch (err) {
      alert("Application failed.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">🛡️ CivGuard Registration</h2>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Full Name</label>
        <input name="name" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <label className="block mb-2 font-medium">Email Address</label>
        <input name="email" type="email" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <label className="block mb-2 font-medium">Profession / License Title</label>
        <input name="profession" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <label className="block mb-2 font-medium">Service Level</label>
        <select name="serviceLevel" onChange={handleChange} className="w-full mb-4 p-2 border rounded">
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="emergency">Emergency & Rapid</option>
        </select>

        <label className="block mb-2 font-medium">Team Size (Including You)</label>
        <input
          name="groupSize"
          type="number"
          min="1"
          value={form.groupSize}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="block mb-2 font-medium">Upload Credentials / ID / Proof</label>
        <input name="documents" type="file" accept=".pdf,.jpg,.png" onChange={handleChange} className="w-full mb-4" required />

        <div className="mb-4 p-4 bg-blue-100 text-blue-900 rounded text-sm border border-blue-300">
          🔐 <strong>Privacy & Compliance:</strong><br/>
          CivGuard applicants are verified strictly by the ShieldUnion <strong>Smart AI Engine</strong>.<br/>
          No human, including the founder, can view or access your credentials or ID until you accept a case.<br/>
          Upon accepting a case, your identity is shared <strong>only with the protected member</strong>, under full AI and DAO control.
        </div>

        <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded text-sm">
          💸 CivGuard Onboarding Fees:<br/>
          - Base Fee: £50<br/>
          - Additional Members: +£25 per extra person<br/>
          - Total this submission: <strong>£{calculatedFee}</strong><br/><br/>
          Please send payment to treasury wallet:
          <div className="mt-2 font-mono break-all">0xB22f3f35Dcb16a1C2D7748a53D4e7c3f8143E043</div>
        </div>

        <label className="block mb-2 font-medium">Transaction Hash (Optional)</label>
        <input name="paymentHash" onChange={handleChange} className="w-full mb-4 p-2 border rounded" placeholder="Paste payment transaction hash if available" />

        <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default CivGuardRegister;
