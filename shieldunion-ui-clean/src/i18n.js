// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load translation files via HTTP
  .use(LanguageDetector) // Detect user language automatically
  .use(initReactI18next) // Bind react-i18next to React
  .init({
    supportedLngs: ["en"], // Add more when ready
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Matches your file structure
    },
    ns: ["home", "translation"], // Your namespaces
    defaultNS: "translation",
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
