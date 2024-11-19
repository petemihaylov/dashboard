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
  },
};

export const nlMetadata: LanguageMetadata = {
  name: "Nederlands",
  code: "nl",
};
