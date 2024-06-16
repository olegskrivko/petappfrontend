// src/middleware/LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';
import i18n from 'i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    try {
      const storedLanguage = localStorage.getItem('preferredLanguage');
      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
      }
    } catch (error) {
      console.error('Error retrieving language preference from localStorage:', error);
      // Handle error appropriately, e.g., fallback to default language
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('preferredLanguage', selectedLanguage);
      document.documentElement.lang = selectedLanguage;
      i18n.changeLanguage(selectedLanguage); // Change the language in i18next
    } catch (error) {
      console.error('Error setting language preference in localStorage:', error);
      // Handle error appropriately, e.g., notify user or log it
    }
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
