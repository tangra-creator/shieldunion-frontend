import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector"; // Language button
import SmartChat from "../components/SmartChat"; // AI Chat component

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
        console.error("Failed to fetch total members count:", err);
      }
    };
    fetchTotalMembers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 relative">
      <SmartChat />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl text-center">
          <div className="flex justify-end mb-4">
            <LanguageSelector />
          </div>

          {totalMembers < PROMO_THRESHOLD && (
            <div className="mb-6 p-3 bg-green-100 border border-green-400 rounded text-green-700 text-center font-semibold">
              🎉 {t("promoMessage")}<br />
              {t("promoThresholdMessage", { threshold: PROMO_THRESHOLD })}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            🛡️ {t("welcomeTo")} <span className="text-black">ShieldUnion</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 px-2 sm:px-8">
            {t("platformDescription")}
          </p>

          {/* YouTube Video Embed Responsive */}
          <div className="mb-10 w-full">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/Xv-QWQHfXY8"
                title="ShieldUnion Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* ✅ Join Now Button Below Video */}
          <div className="mt-6 mb-10">
            <Link
              to="/join"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              🎥 Join Now & Learn More
            </Link>
          </div>

          {/* Join Buttons - Responsive Stack */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link
              to="/register/member"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition text-sm sm:text-base"
            >
              🙋 {t("joinAsMember")}
            </Link>
            <Link
              to="/register/civguard"
              className="border border-black text-black px-6 py-3 rounded hover:bg-black hover:text-white transition text-sm sm:text-base"
            >
              🛡️ {t("applyAsCivGuard")}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
