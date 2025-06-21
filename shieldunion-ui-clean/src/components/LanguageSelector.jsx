import React from "react";
import i18n from "../i18n"; // i18n config file

const LanguageSelector = () => {
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={changeLanguage} className="p-2 border rounded ml-2">
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="ar">العربية</option>
      <option value="zh">中文</option>
      <option value="ru">Русский</option>
      <option value="tr">Türkçe</option>
      <option value="uk">Українська</option>
      <option value="fa">فارسی</option>
      <option value="bg">Български</option>
    </select>
  );
};

export default LanguageSelector;
