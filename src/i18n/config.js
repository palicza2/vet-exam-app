import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import hu from './locales/hu.json';

console.log("i18n/config.js: Starting i18next configuration.");
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      hu: { translation: hu }
    },
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false
    }
  });
console.log("i18n/config.js: i18next configuration complete.");

export default i18n;
