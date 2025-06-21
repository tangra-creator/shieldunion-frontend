import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        register: "Register",
        name: "Full Name",
        email: "Email",
        wallet: "Wallet Address",
        income: "Your Income Level",
        uploadID: "Upload ID Document",
        uploadProof: "Upload Proof of Income",
        submit: "Submit Registration"
      }
    },
    bg: {
      translation: {
        welcome: "Добре дошли",
        register: "Регистрация",
        name: "Пълно име",
        email: "Имейл адрес",
        wallet: "Крипто адрес (по избор)",
        income: "Вашето ниво на доход",
        uploadID: "Качете документ за самоличност",
        uploadProof: "Качете доказателство за доход",
        submit: "Изпрати регистрация"
      }
    },
    es: { translation: { welcome: "Bienvenido", register: "Registrar" } },
    fr: { translation: { welcome: "Bienvenue", register: "S'inscrire" } },
    ar: { translation: { welcome: "مرحبا", register: "تسجيل" } },
    zh: { translation: { welcome: "欢迎", register: "注册" } },
    ru: { translation: { welcome: "Добро пожаловать", register: "Регистрация" } },
    tr: { translation: { welcome: "Hoşgeldiniz", register: "Kayıt Ol" } },
    uk: { translation: { welcome: "Ласкаво просимо", register: "Реєстрація" } },
    fa: { translation: { welcome: "خوش آمدید", register: "ثبت نام" } },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
