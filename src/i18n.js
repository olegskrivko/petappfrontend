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

// locales/
//   en/
//     common.json
//     buttons.json
//     titles.json
//   lv/
//     common.json
//     buttons.json
//     titles.json
//   ru/
//     common.json
//     buttons.json
//     titles.json

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Import namespaces
// import enCommon from './locales/en/common.json';
// import enButtons from './locales/en/buttons.json';
// import enTitles from './locales/en/titles.json';

// import lvCommon from './locales/lv/common.json';
// import lvButtons from './locales/lv/buttons.json';
// import lvTitles from './locales/lv/titles.json';

// import ruCommon from './locales/ru/common.json';
// import ruButtons from './locales/ru/buttons.json';
// import ruTitles from './locales/ru/titles.json';

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false, // React already does escaping
//     },
//     resources: {
//       en: {
//         common: enCommon,
//         buttons: enButtons,
//         titles: enTitles,
//         // Add more namespaces if needed
//       },
//       lv: {
//         common: lvCommon,
//         buttons: lvButtons,
//         titles: lvTitles,
//         // Add more namespaces if needed
//       },
//       ru: {
//         common: ruCommon,
//         buttons: ruButtons,
//         titles: ruTitles,
//         // Add more namespaces if needed
//       },
//     },
//     detection: {
//       order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
//       caches: ['localStorage', 'cookie'],
//     },
//     ns: ['common', 'buttons', 'titles'], // List of namespaces
//     defaultNS: 'common', // Default namespace
//   });

// export default i18n;
