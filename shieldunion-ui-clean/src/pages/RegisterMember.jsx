import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PROMO_THRESHOLD = 1500;
const TREASURY_WALLET = "0xB22f3f35Dcb16a1C2D7748a53D4e7c3f8143E043";

const Register = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get("type") || "member";

  const [form, setForm] = useState({
    name: "",
    email: "",
    wallet: "",
    incomeTier: "",
    idDocument: null,
    incomeProof: null,
    paymentHash: ""
  });

  const [calculatedFee, setCalculatedFee] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    const fetchTotalMembers = async () => {
      try {
        const res = await axios.get("/api/member/total");
        setTotalMembers(res.data.total);
      } catch (err) {
        console.error("Failed to fetch member count:", err);
      }
    };

    fetchTotalMembers();
  }, []);

  useEffect(() => {
    if (totalMembers < PROMO_THRESHOLD) {
      setCalculatedFee(0);
      return;
    }
    switch (form.incomeTier) {
      case "A": setCalculatedFee(6); break;
      case "B": setCalculatedFee(10); break;
      case "C": setCalculatedFee(20); break;
      case "D": setCalculatedFee(50); break;
      case "E": setCalculatedFee(100); break;
      case "F": setCalculatedFee(200); break;
      case "G": setCalculatedFee(500); break;
      default: setCalculatedFee(0);
    }
  }, [form.incomeTier, totalMembers]);

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
    data.append("userType", userType);
    data.append("calculatedFee", calculatedFee);

    try {
      await axios.post("/api/member/register", data);
      alert("Registration submitted successfully.");
    } catch (err) {
      alert("Registration failed.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">👤 Member Registration</h2>

      <div className="bg-green-100 text-green-800 text-sm p-3 rounded mb-4">
        📅 Early Adopter Promotion Active: First 1500 members join <strong>free of charge!</strong><br/>
        After 1500 members total, all members will start paying the normal fees.
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Full Name</label>
        <input name="name" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <label className="block mb-2 font-medium">Email Address</label>
        <input name="email" type="email" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <label className="block mb-2 font-medium">Wallet Address (Optional)</label>
        <input name="wallet" onChange={handleChange} className="w-full mb-4 p-2 border rounded" />

        <label className="block mb-2 font-medium">Your Income Level (Last 12 Months) <span title="Used to calculate fair fee. Smart engine will verify.">🔹</span></label>
        <select name="incomeTier" onChange={handleChange} required className="w-full mb-4 p-2 border rounded">
          <option value="">-- Select Tier --</option>
          <option value="A">Tier A: £0–10,000</option>
          <option value="B">Tier B: £10,001–15,000</option>
          <option value="C">Tier C: £15,001–25,000</option>
          <option value="D">Tier D: £25,001–50,000</option>
          <option value="E">Tier E: £50,001–100,000</option>
          <option value="F">Tier F: £100,001–200,000</option>
          <option value="G">Tier G: Over £200,000</option>
        </select>

        <label className="block mb-2 font-medium">Upload ID Document (Required)</label>
        <input name="idDocument" type="file" accept=".pdf,.jpg,.png" onChange={handleChange} className="w-full mb-4" required />

        <label className="block mb-2 font-medium">Upload Proof of Income (Last 3 Months)</label>
        <input name="incomeProof" type="file" accept=".pdf,.jpg,.png" onChange={handleChange} className="w-full mb-4" required />

        <div className="mb-4 p-4 bg-blue-100 text-blue-900 rounded text-sm border border-blue-300">
          🔐 <strong>Privacy Guarantee:</strong><br/>
          All personal data, ID, and documents are protected by the <strong>ShieldUnion Smart AI Governance Engine</strong>.<br/>
          No human — including the founder <strong>Tangra</strong>, any government, or third party — can access your identity.<br/>
          <strong>Only when a case is opened</strong> will your details be securely and temporarily shared with approved stakeholders (e.g. CivGuards), and even then, <strong>only under AI control</strong> and DAO approval.
        </div>

        <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded">
          💸 Please send your calculated fee in cryptocurrency to the ShieldUnion temporary treasury wallet:
          <div className="mt-2 font-mono break-all">{TREASURY_WALLET}</div>
          <p className="mt-2 text-xs italic text-gray-600">
            🔐 Note: The founder of ShieldUnion (Tangra), and his successor Asparuh, hold permanent and unstoppable rights to adjust the founder's earnings percentage up to 51% at any time without DAO, smart engine, or any third-party approval. If the platform fails to reach 1,000 members within 1 year, full control returns to the founder. If any unauthorized entity attempts to take control, the platform will immediately return to founder ownership and override all external claims.
          </p>
        </div>

        <label className="block mb-2 font-medium">Transaction Hash (Optional)</label>
        <input name="paymentHash" onChange={handleChange} className="w-full mb-4 p-2 border rounded" placeholder="Paste payment transaction hash if available" />

        <div className="text-xl font-bold mb-4">
          💰 Total Fee: £{calculatedFee.toFixed(2)}
        </div>

        <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default Register;
