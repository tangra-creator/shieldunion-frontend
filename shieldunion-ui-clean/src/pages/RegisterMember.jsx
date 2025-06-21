import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

const PROMO_THRESHOLD = 1500;
const TREASURY_WALLET = "0xB22f3f35Dcb16a1C2D7748a53D4e7c3f8143E043";

const RegisterMember = () => {
  const { t } = useTranslation();
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
  const [language, setLanguage] = useState("English");

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
      alert(t("registrationSuccess"));
    } catch (err) {
      alert(t("registrationFail"));
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* 🌐 Language Control */}
      <div className="text-right px-6 pt-4 text-sm text-gray-600">
        🌐 Language:
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
          <h2 className="text-2xl font-bold text-center mb-6">{t("memberRegistration")}</h2>

          <div className="bg-green-100 text-green-800 text-sm p-3 rounded mb-4">
            🗓️ {t("earlyAdopterPromo")} <strong>{t("freeOfCharge")}</strong><br />
            {t("afterThresholdFees")}
          </div>

          <form onSubmit={handleSubmit}>
            <label className="block mb-2 font-medium">{t("fullName")}</label>
            <input name="name" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

            <label className="block mb-2 font-medium">{t("emailAddress")}</label>
            <input name="email" type="email" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

            <label className="block mb-2 font-medium">{t("walletAddressOptional")}</label>
            <input name="wallet" onChange={handleChange} className="w-full mb-4 p-2 border rounded" />

            <label className="block mb-2 font-medium">{t("incomeLevel")}</label>
            <select name="incomeTier" onChange={handleChange} required className="w-full mb-4 p-2 border rounded">
              <option value="">-- {t("selectTier")} --</option>
              <option value="A">{t("tierA")}</option>
              <option value="B">{t("tierB")}</option>
              <option value="C">{t("tierC")}</option>
              <option value="D">{t("tierD")}</option>
              <option value="E">{t("tierE")}</option>
              <option value="F">{t("tierF")}</option>
              <option value="G">{t("tierG")}</option>
            </select>

            <label className="block mb-2 font-medium">{t("uploadID")}</label>
            <input name="idDocument" type="file" accept=".pdf,.jpg,.png" onChange={handleChange} className="w-full mb-4" required />

            <label className="block mb-2 font-medium">{t("uploadIncomeProof")}</label>
            <input name="incomeProof" type="file" accept=".pdf,.jpg,.png" onChange={handleChange} className="w-full mb-4" required />

            <div className="mb-4 p-4 bg-blue-50 text-blue-800 rounded text-sm">
              🔐 <strong>{t("privacyGuaranteeTitle")}</strong><br />
              {t("privacyGuaranteeText")}
            </div>

            <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded text-sm">
              💸 <strong>{t("paymentInstructions")}</strong><br />
              {t("secureTreasuryInfo")}
              <p className="mt-2 text-xs italic text-gray-600">
                🛡️ {t("founderRightsNotice")}
              </p>
            </div>

            <label className="block mb-2 font-medium">{t("transactionHash")}</label>
            <input name="paymentHash" onChange={handleChange} className="w-full mb-4 p-2 border rounded" placeholder={t("transactionPlaceholder")} />

            <div className="text-xl font-bold mb-4">
              💰 {t("totalFee")}: £{calculatedFee.toFixed(2)}
            </div>

            <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
              {t("submitRegistration")}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterMember;
