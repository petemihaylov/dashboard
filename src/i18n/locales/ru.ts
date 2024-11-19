import { LanguageMetadata, LanguageTranslation } from "../types";

export const ru: LanguageTranslation = {
  translation: {
    header: {
      services: "Услуги",
      gallery: "Галерея",
      testimonials: "Отзывы",
      contacts: "Контакты",
    },
    feedback: {
      not_found: {
        title: "Страница не найдена",
        description: "Извините, мы не смогли найти страницу, которую вы ищете.",
        go_back: "Вернуться назад",
      },
    },
    cookieConsent: {
      acceptButton: "Принять",
      declineButton: "Отклонить",
      message:
        "Этот веб-сайт использует файлы cookie. См. нашу <link/> для получения дополнительной информации.",
      privacyPolicyLink: "политику конфиденциальности",
    },
  },
};

export const ruMetadata: LanguageMetadata = {
  name: "Русский",
  code: "ru",
};
