import React, { useState } from "react";
import axios from "axios";

const RegisterCivGuard = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    groupSize: 1,
    profession: "",
    document: null,
    paymentHash: ""
  });

  const [calculatedFee, setCalculatedFee] = useState(50);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });

      if (name === "groupSize") {
        const size = parseInt(value);
        const fee = 50 + 25 * (size - 1);
        setCalculatedFee(size > 0 ? fee : 50);
      }
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
      alert("CivGuard registration submitted successfully.");
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Failed to register.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">🛡️ CivGuard Registration</h2>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Full Name</label>
        <input name="fullName" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <label className="block mb-2 font-medium">Email Address</label>
        <input name="email" type="email" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <label className="block mb-2 font-medium">Profession / Role</label>
        <input name="profession" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <label className="block mb-2 font-medium">Number of People in Group</label>
        <input name="groupSize" type="number" min="1" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <label className="block mb-2 font-medium">Upload Proof Document (ID, Certification)</label>
        <input name="document" type="file" accept=".pdf,.jpg,.png" onChange={handleChange} className="w-full mb-4" required />

        <div className="mb-4 p-4 bg-blue-50 text-blue-800 rounded">
          🔐 <strong>Privacy Notice:</strong> All data is secured by ShieldUnion AI. No human, including the founder, can access your identity unless you accept a case. Details are only shared with the protected member under DAO-approved protocols.
        </div>

        <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded">
          💸 CivGuard fees depend on your group size. You pay:
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li>Base: £50 (solo)</li>
            <li>+£25 for each additional member</li>
            <li>Onboarding fee (first month): double total fee</li>
          </ul>
          Founder earnings come from each fee, never exceeding declared percentage. The treasury pays its own taxes.
        </div>

        <label className="block mb-2 font-medium">Transaction Hash (Optional)</label>
        <input name="paymentHash" onChange={handleChange} className="w-full mb-4 p-2 border rounded" placeholder="Paste payment transaction hash if available" />

        <div className="text-xl font-bold mb-4">
          💰 Total Fee: £{calculatedFee} (Onboarding: £{calculatedFee * 2})
        </div>

        <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default RegisterCivGuard;
