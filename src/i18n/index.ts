import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Hello",
    },
  },
  ua: {
    translation: {
      welcome: "Привіт",
    },
  },
};

i18n
  .use(LanguageDetector) // Визначення мови
  .use(initReactI18next) // Інтеграція з React
  .init({
    resources,
    fallbackLng: "en", // Мова за замовчуванням
    interpolation: {
      escapeValue: false, // React сам обробляє XSS
    },
  });

export default i18n;
