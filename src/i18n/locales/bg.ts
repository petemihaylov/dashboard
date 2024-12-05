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
    contact: {
      contactTitle: "Свържете ce c нас",
      contactSubtitle:
        "Моля, предоставете вашите данни и ние ще ce свържем c вас скоро.",
      fullName: "Пълно име",
      email: "Имейл",
      phoneNumber: "Телефонен номер",
      message: "Съобщение",
      agreeToPolicies: "C избора на това, вие ce съгласявате c нашата <link/>",
      privacyPolicyLink: "политика за поверителност",
      submitButton: "Нека поговорим",
      alertSuccess: "Вашето съобщение беше изпратено успешно",
      alertError: "Трябва да ce съгласите c политиката за поверителност",
    },
    footer: {
      contact_us: "Свържете ce c нас",
      working_hours: "Работно време",
      contacts: "Контакти",
      prices: "Цени",
      partners: "Партньори",
      get_in_touch: "Свържете ce c нас",
      follow_us: "Последвайте ни",
      copyright: "© 2024 Водолазен център Арапя. Всички права запазени.",
    },
  },
};

export const bgMetadata: LanguageMetadata = {
  name: "Български",
  code: "bg",
};
