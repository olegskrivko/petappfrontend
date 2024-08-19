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
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// import enTranslations from './locales/en.json';
// import lvTranslations from './locales/lv.json';
// import ruTranslations from './locales/ru.json';

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
//         translation: enTranslations,
//       },
//       lv: {
//         translation: lvTranslations,
//       },
//       ru: {
//         translation: ruTranslations,
//       },
//     },
//     detection: {
//       order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
//       caches: ['localStorage', 'cookie'],
//     },
//   });

// export default i18n;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Import translation files
// const importAll = (r) => {
//   let translations = {};
//   r.keys().forEach((item) => {
//     const namespace = item.replace('./', '').replace('.json', '');
//     translations[namespace] = r(item);
//   });
//   return translations;
// };

// // Import translations
// const enTranslations = importAll(require.context('./locales/en', false, /\.json$/));
// const lvTranslations = importAll(require.context('./locales/lv', false, /\.json$/));
// const ruTranslations = importAll(require.context('./locales/ru', false, /\.json$/));

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
//       en: enTranslations,
//       lv: lvTranslations,
//       ru: ruTranslations,
//     },
//     detection: {
//       order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
//       caches: ['localStorage', 'cookie'],
//     },
//   });

// export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import namespaces
import enCommon from './locales/en/common.json';
import enNavbar from './locales/en/navbar.json';
import enFooter from './locales/en/footer.json';
import enAboutPage from './locales/en/aboutPage.json';
import enSupportPage from './locales/en/supportPage.json';
import enSelectOptions from './locales/en/selectOptions.json';
import enFeedbackPage from './locales/en/feedbackPage.json';
import enPrivacyPolicyPage from './locales/en/privacyPolicyPage.json';
import enDisclaimerPage from './locales/en/disclaimerPage.json';
import enTermsOfServicePage from './locales/en/termsOfServicePage.json';
import enDataProtectionPolicyPage from './locales/en/dataProtectionPolicyPage.json';
import enCookiePolicyPage from './locales/en/cookiePolicyPage.json';
import enCommunityGuidelinesPage from './locales/en/communityGuidelinesPage.json';

import lvCommon from './locales/lv/common.json';
import lvNavbar from './locales/lv/navbar.json';
import lvFooter from './locales/lv/footer.json';
import lvAboutPage from './locales/lv/aboutPage.json';
import lvSupportPage from './locales/lv/supportPage.json';
import lvSelectOptions from './locales/lv/selectOptions.json';
import lvFeedbackPage from './locales/lv/feedbackPage.json';
import lvPrivacyPolicyPage from './locales/lv/privacyPolicyPage.json';
import lvDisclaimerPage from './locales/lv/disclaimerPage.json';
import lvTermsOfServicePage from './locales/lv/termsOfServicePage.json';
import lvDataProtectionPolicyPage from './locales/lv/dataProtectionPolicyPage.json';
import lvCookiePolicyPage from './locales/lv/cookiePolicyPage.json';
import lvCommunityGuidelinesPage from './locales/lv/communityGuidelinesPage.json';

import ruCommon from './locales/ru/common.json';
import ruNavbar from './locales/ru/navbar.json';
import ruFooter from './locales/ru/footer.json';
import ruAboutPage from './locales/ru/aboutPage.json';
import ruSupportPage from './locales/ru/supportPage.json';
import ruSelectOptions from './locales/ru/selectOptions.json';
import ruFeedbackPage from './locales/ru/feedbackPage.json';
import ruPrivacyPolicyPage from './locales/ru/privacyPolicyPage.json';
import ruDisclaimerPage from './locales/ru/disclaimerPage.json';
import ruTermsOfServicePage from './locales/ru/termsOfServicePage.json';
import ruDataProtectionPolicyPage from './locales/ru/dataProtectionPolicyPage.json';
import ruCookiePolicyPage from './locales/ru/cookiePolicyPage.json';
import ruCommunityGuidelinesPage from './locales/ru/communityGuidelinesPage.json';

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Initializes i18next with React
  .init({
    fallbackLng: 'en', // Default language if detection fails
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        common: enCommon,
        navbar: enNavbar,
        footer: enFooter,
        aboutPage: enAboutPage,
        supportPage: enSupportPage,
        selectOptions: enSelectOptions,
        feedbackPage: enFeedbackPage,
        privacyPolicyPage: enPrivacyPolicyPage,
        disclaimerPage: enDisclaimerPage,
        termsOfServicePage: enTermsOfServicePage,
        dataProtectionPolicyPage: enDataProtectionPolicyPage,
        cookiePolicyPage: enCookiePolicyPage,
        communityGuidelinesPage: enCommunityGuidelinesPage,
      },
      lv: {
        common: lvCommon,
        navbar: lvNavbar,
        footer: lvFooter,
        aboutPage: lvAboutPage,
        supportPage: lvSupportPage,
        selectOptions: lvSelectOptions,
        feedbackPage: lvFeedbackPage,
        privacyPolicyPage: lvPrivacyPolicyPage,
        disclaimerPage: lvDisclaimerPage,
        termsOfServicePage: lvTermsOfServicePage,
        dataProtectionPolicyPage: lvDataProtectionPolicyPage,
        cookiePolicyPage: lvCookiePolicyPage,
        communityGuidelinesPage: lvCommunityGuidelinesPage,
      },
      ru: {
        common: ruCommon,
        navbar: ruNavbar,
        footer: ruFooter,
        aboutPage: ruAboutPage,
        supportPage: ruSupportPage,
        selectOptions: ruSelectOptions,
        feedbackPage: ruFeedbackPage,
        privacyPolicyPage: ruPrivacyPolicyPage,
        disclaimerPage: ruDisclaimerPage,
        termsOfServicePage: ruTermsOfServicePage,
        dataProtectionPolicyPage: ruDataProtectionPolicyPage,
        cookiePolicyPage: ruCookiePolicyPage,
        communityGuidelinesPage: ruCommunityGuidelinesPage,
      },
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    ns: [
      'common',
      'navbar',
      'footer',
      'aboutPage',
      'feedbackPage',
      'privacyPolicyPage',
      'disclaimerPage',
      'selectOptions',
      'termsOfServicePage',
      'dataProtectionPolicyPage',
      'cookiePolicyPage',
      'communityGuidelinesPage',
    ], // Namespaces to use
    defaultNS: 'common', // Default namespace
  });

export default i18n;
