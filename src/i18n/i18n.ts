import i18n from "i18next";
import Backend from "i18next-http-backend";
import sprintf from "i18next-sprintf-postprocessor";
import { initReactI18next } from "react-i18next";
import { en, enMetadata } from "./locales/en";
import { nl, nlMetadata } from "./locales/nl";
import { ru, ruMetadata } from "./locales/ru";
import { bg, bgMetadata } from "./locales/bg";
import { LanguageMetadata } from "./types";

export const languages: LanguageMetadata[] = [
  enMetadata,
  nlMetadata,
  ruMetadata,
  bgMetadata,
];

const resources = {
  en,
  nl,
  bg,
  ru,
};

const savedLanguage = localStorage.getItem("lang") || enMetadata.code;

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(sprintf)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: enMetadata.code,
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});
