import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load translation files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "bg", "es", "fr", "ar", "zh", "ru", "tr", "uk", "fa"],
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    ns: ["home", "translation"], // Add more namespaces as needed
    defaultNS: "translation",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
