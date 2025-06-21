import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SmartChat from "../components/SmartChat";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const PROMO_THRESHOLD = 1500;

const Home = () => {
  const { t } = useTranslation();
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    const fetchTotalMembers = async () => {
      try {
        const res = await axios.get(`${API}/api/member/total`);
        setTotalMembers(res.data.total || 0);
      } catch (err) {
        console.error("Failed to fetch total members:", err);
      }
    };
    fetchTotalMembers();
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <div className="absolute top-2 right-4 z-50">
        <LanguageSelector />
      </div>

      <div className="text-center px-4 pt-20 pb-10">
        <h1 className="text-4xl font-extrabold sm:text-5xl mb-3">🛡️ ShieldUnion</h1>
        <p className="text-lg text-gray-700 mb-4">{t("subtitle")}</p>

        <div className="max-w-4xl mx-auto">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Xv-QWQHfXY8"
            title="ShieldUnion Intro"
            frameBorder="0"
            allowFullScreen
            className="rounded-xl shadow-md"
          ></iframe>
        </div>

        <h2 className="mt-10 text-2xl font-bold">{t("joinTitle")}</h2>
        <p className="text-gray-600 mb-4">{t("joinDesc")}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          <Link to="/register?type=member" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            {t("getStarted")}
          </Link>
          <Link to="/register?type=civguard" className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">
            {t("getStartedGuard")}
          </Link>
        </div>

        {totalMembers < PROMO_THRESHOLD && (
          <p className="text-sm text-gray-500">
            🆓 {PROMO_THRESHOLD - totalMembers} Early Access Spots Remaining
          </p>
        )}
      </div>

      {/* Floating Smart Chat fixed at bottom right */}
      <div className="fixed bottom-4 right-4 z-50 w-[300px] max-w-full sm:max-w-[300px] border rounded shadow-lg bg-white">
        <SmartChat />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
