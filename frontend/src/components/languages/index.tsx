
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome "
        },
      },
      ar: {
        translation: {
          "Welcome to React": "مرحبا "
        },
      },
    },
    lng: "en", 
    fallbackLng: "en",

  });


