import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

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
  const [language, setLanguage] = useState("English");

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
      alert("✅ CivGuard registration submitted successfully.");
    } catch (err) {
      console.error("Registration failed:", err);
      alert("❌ Failed to register.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* 🌐 Language Selector */}
      <div className="text-right pr-6 pt-4 text-sm text-gray-600">
        🌐 Language:{" "}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="ml-2 px-2 py-1 border rounded"
        >
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
          <option>العربية</option>
          <option>Türkçe</option>
          <option>Български</option>
        </select>
      </div>

      <main className="flex-grow">
        <div className="max-w-xl mx-auto mt-6 p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-bold text-center mb-6">🛡️ CivGuard Registration</h2>

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

            <div className="mb-4 p-4 bg-blue-50 text-blue-800 rounded text-sm">
              🔐 <strong>Privacy Notice:</strong> ShieldUnion AI ensures your data remains private. Identities are hidden from all humans unless a case is accepted.
            </div>

            <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded text-sm">
              💸 CivGuard fees:
              <ul className="list-disc ml-5 mt-2">
                <li>Base fee: £50</li>
                <li>+£25 per extra group member</li>
                <li>First payment = double onboarding</li>
              </ul>
              The founder receives a fixed percentage. All else is secured in the Treasury.
            </div>

            <label className="block mb-2 font-medium">Transaction Hash (Optional)</label>
            <input name="paymentHash" onChange={handleChange} className="w-full mb-4 p-2 border rounded" placeholder="Paste transaction hash if paid already" />

            <div className="text-xl font-bold mb-4">
              💰 Total Fee: £{calculatedFee} (Onboarding: £{calculatedFee * 2})
            </div>

            <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
              Submit Application
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterCivGuard;
