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
    contact: {
      contactTitle: "Свяжитесь c нами",
      contactSubtitle:
        "Пожалуйста, укажите свои данные, и мы свяжемся c вами в ближайшее время.",
      fullName: "Полное имя",
      email: "Электронная почта",
      phoneNumber: "Номер телефона",
      message: "Сообщение",
      agreeToPolicies: "Выбирая это, вы соглашаетесь c нашей",
      privacyPolicyLink: "политикой конфиденциальности <link/>",
      submitButton: "Связаться",
      alertSuccess: "Ваше сообщение успешно отправлено",
      alertError: "Вы должны согласиться c политикой конфиденциальности",
    },
  },
};

export const ruMetadata: LanguageMetadata = {
  name: "Русский",
  code: "ru",
};
