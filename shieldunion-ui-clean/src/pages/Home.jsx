import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SmartChat from "../components/SmartChat";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import axios from "axios";

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
        console.error("Error fetching total members:", err.message);
      }
    };
    fetchTotalMembers();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white">
      {/* Language Button */}
      <div className="absolute top-2 right-4 z-50">
        <LanguageSelector />
      </div>

      {/* Hero Section */}
      <section className="text-center px-4 pt-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-black">🛡️ ShieldUnion</h1>
        <p className="mt-4 text-gray-600 text-lg">{t("subtitle")}</p>
        <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
          {t("homeDesc", {
            defaultValue:
              "Join the world's first unstoppable global protection network.",
          })}
        </p>

        {/* Embedded YouTube Video */}
        <div className="mt-8 px-4">
          <div className="w-full max-w-3xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded shadow"
              src="https://www.youtube.com/embed/Xv-QWQHfXY8"
              title="ShieldUnion Explainer Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Only Join Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/register?type=member"
            className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            {t("getStarted", { defaultValue: "Join as Member" })}
          </Link>
          <Link
            to="/register?type=civguard"
            className="px-6 py-3 bg-gray-200 text-black rounded hover:bg-gray-300 transition"
          >
            {t("getStartedGuard", { defaultValue: "Join as CivGuard" })}
          </Link>
        </div>

        {/* Promo Spots Counter */}
        <p className="mt-3 text-sm text-gray-600">
          {totalMembers < PROMO_THRESHOLD &&
            `🎉 ${PROMO_THRESHOLD - totalMembers} Early Access Spots Remaining`}
        </p>
      </section>

      {/* Smart Chat fixed in corner */}
      <div className="fixed bottom-4 right-4 z-40 w-[90%] sm:w-[350px] max-w-sm">
        <SmartChat />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
