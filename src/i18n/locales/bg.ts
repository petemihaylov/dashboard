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
        title: "Страницата не e намерена",
        description:
          "Съжаляваме, не можахме да намерим страницата, която търсите.",
        go_back: "Върнете ce обратно",
      },
    },
    cookieConsent: {
      acceptButton: "Приемам",
      declineButton: "Отказвам",
      message:
        "Този уебсайт използва бисквитки. Вижте нашата <link/> за повече информация.",
      privacyPolicyLink: "политика за поверителност",
    },
  },
};

export const bgMetadata: LanguageMetadata = {
  name: "Български",
  code: "bg",
};
