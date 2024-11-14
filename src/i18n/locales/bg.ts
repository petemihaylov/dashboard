import { LanguageMetadata, LanguageTranslation } from "../types";

export const bg: LanguageTranslation = {
  translation: {
    header: {
      services: "Услуги",
      gallery: "Галерия",
      testimonials: "Отзиви",
      contacts: "Контакти",
    },
    feedback: {
      not_found: {
        title: "Страницата не е намерена",
        description:
          "Съжаляваме, не можахме да намерим страницата, която търсите.",
        go_back: "Върнете се обратно",
      },
    },
  },
};

export const bgMetadata: LanguageMetadata = {
  name: "Български",
  code: "bg",
};
