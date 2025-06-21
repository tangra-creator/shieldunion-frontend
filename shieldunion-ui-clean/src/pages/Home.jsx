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
        console.error("Error fetching total members:", err);
      }
    };

    fetchTotalMembers();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Promo */}
      <div className="bg-green-100 text-center p-2 text-sm font-medium">
        🥇 {t("promoMessage")} <br />
        {totalMembers < PROMO_THRESHOLD && `✅ 1500 free spots left!`}
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center p-4 mt-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
          🛡️ {t("welcomeToShieldUnion")}
        </h1>
        <p className="text-gray-600 mb-6">{t("platformDescription")}</p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Video */}
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/Xv-QWQHfXY8"
            title="ShieldUnion Intro"
            className="rounded shadow-lg"
            allowFullScreen
          ></iframe>

          {/* Offer List */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">
              {t("What ShieldUnion Offers:")}
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>{t("CivGuard Protection")}</li>
              <li>{t("Anonymous Help Network")}</li>
              <li>{t("Classified Vault")}</li>
              <li>{t("DAO Legal Voting")}</li>
              <li>{t("Real people. Real justice. Global shield.")}</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/register?type=member"
            className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800"
          >
            🛡️ {t("joinAsMember")}
          </Link>
          <Link
            to="/civguard-apply"
            className="bg-white border px-6 py-2 rounded shadow hover:bg-gray-100"
          >
            🧠 {t("applyAsCivGuard")}
          </Link>
        </div>
      </div>

      {/* Language selector bottom left */}
      <div className="absolute bottom-2 left-2 z-40">
        <LanguageSelector />
      </div>

      {/* SmartChat bottom right */}
      <div className="fixed bottom-2 right-2 z-50">
        <SmartChat />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
