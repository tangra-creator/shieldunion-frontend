import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>🛡️ {t("welcome")}</h1>
      <p>{t("intro")}</p>
      <nav>
        <Link to="/register">{t("register")}</Link> |{" "}
        <Link to="/submit">{t("submitCase")}</Link> |{" "}
        <Link to="/apply">{t("civGuard")}</Link> |{" "}
        <Link to="/dashboard">{t("dashboard")}</Link>
      </nav>
    </div>
  );
};

export default Home;

