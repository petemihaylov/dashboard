import { LanguageMetadata, LanguageTranslation } from "../types";

export const nl: LanguageTranslation = {
  translation: {
    header: {
      services: "Diensten",
      gallery: "Galerij",
      testimonials: "Getuigenissen",
      contacts: "Contacten",
    },
    feedback: {
      not_found: {
        title: "Pagina niet gevonden",
        description: "Sorry, we konden de pagina die u zoekt niet vinden.",
        go_back: "Ga terug",
      },
    },
    cookieConsent: {
      acceptButton: "Accepteren",
      declineButton: "Weigeren",
      message:
        "Deze website maakt gebruik van cookies. Zie onze <link/> voor meer informatie.",
      privacyPolicyLink: "privacybeleid",
    },
    contact: {
      contactTitle: "Neem contact met ons op",
      contactSubtitle:
        "Geef uw gegevens op en wij nemen zo snel mogelijk contact met u op.",
      fullName: "Volledige naam",
      email: "E-mail",
      phoneNumber: "Telefoonnummer",
      message: "Bericht",
      agreeToPolicies: "Door dit te selecteren gaat u akkoord met ons <link/>",
      privacyPolicyLink: "privacybeleid",
      submitButton: "Laten we praten",
      alertSuccess: "Uw bericht is succesvol verzonden",
      alertError: "U moet akkoord gaan met het privacybeleid",
    },
  },
};

export const nlMetadata: LanguageMetadata = {
  name: "Nederlands",
  code: "nl",
};
