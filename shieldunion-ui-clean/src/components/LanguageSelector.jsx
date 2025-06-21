import React from "react";
import i18n from "../i18n"; // i18n config file

const LanguageSelector = () => {
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={changeLanguage}
      className="text-sm border rounded px-2 py-1 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
      defaultValue={i18n.language || "en"}
    >
      <option value="en">🇬🇧 English</option>
      <option value="es">🇪🇸 Español</option>
      <option value="fr">🇫🇷 Français</option>
      <option value="ar">🇸🇦 العربية</option>
      <option value="zh">🇨🇳 中文</option>
      <option value="ru">🇷🇺 Русский</option>
      <option value="tr">🇹🇷 Türkçe</option>
      <option value="uk">🇺🇦 Українська</option>
      <option value="fa">🇮🇷 فارسی</option>
      <option value="bg">🇧🇬 Български</option>
    </select>
  );
};

export default LanguageSelector;
