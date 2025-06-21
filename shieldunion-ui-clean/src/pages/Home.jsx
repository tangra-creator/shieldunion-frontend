import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
import SmartChat from "../components/SmartChat";

const PROMO_THRESHOLD = 1500;
const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Home = () => {
  const { t } = useTranslation();
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    const fetchTotalMembers = async () => {
      try {
        const res = await axios.get(`${API}/api/member/total`);
        setTotalMembers(res.data.total || 0);
      } catch (err) {
        console.error("Failed to fetch members:", err);
      }
    };
    fetchTotalMembers();
  }, []);

  return (
    <div className="relative">
      <div className="text-center mt-6">
        {totalMembers < PROMO_THRESHOLD && (
          <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
            <p>🎉 {t("promoMessage")}<br />{t("promoThresholdMessage")}</p>
          </div>
        )}
      </div>

      <div className="text-center px-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
          <img src="/shield.png" alt="logo" className="w-8 h-8" />
          {t("welcomeTo ShieldUnion")}
        </h1>
        <p className="text-gray-600 mt-2">{t("platformDescription")}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-6">
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/Xv-QWQHfXY8"
          title="ShieldUnion Video"
          allowFullScreen
          className="rounded shadow-lg"
        ></iframe>

        <div className="max-w-md text-left text-gray-800">
          <h3 className="text-lg font-semibold mb-2">What ShieldUnion Offers:</h3>
          <ul className="list-disc list-inside text-sm">
            <li>CivGuard Protection</li>
            <li>Anonymous Help Network</li>
            <li>Classified Vault</li>
            <li>DAO Legal Voting</li>
          </ul>
          <p className="mt-4 text-sm">Real people. Real justice. Global shield.</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Link to="/register?type=member" className="bg-black text-white px-5 py-2 rounded shadow hover:bg-gray-800">
          🛡️ {t("joinAsMember")}
        </Link>
        <Link to="/civguard-apply" className="bg-white border border-black px-5 py-2 rounded shadow hover:bg-gray-200">
          🚔 {t("applyAsCivGuard")}
        </Link>
      </div>

      <LanguageSelector className="mt-8 text-center" />

      <Footer />

      {/* Floating Smart Chat */}
      <div className="fixed bottom-4 right-4 z-50 shadow-xl">
        <div className="bg-white rounded-xl overflow-hidden border border-gray-300">
          <SmartChat />
        </div>
      </div>
    </div>
  );
};

export default Home;
