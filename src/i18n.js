// // src/i18n.js
// THIS IS FOR BACKEND
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import HttpBackend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false, // React already does escaping
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}.json',
//     },
//     detection: {
//       order: [
//         'queryString',
//         'cookie',
//         'localStorage',
//         'sessionStorage',
//         'navigator',
//         'htmlTag',
//         'path',
//         'subdomain',
//       ],
//       caches: ['localStorage', 'cookie'],
//     },
//   });

// export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import lvTranslations from './locales/lv.json';
import ruTranslations from './locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      lv: {
        translation: lvTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
