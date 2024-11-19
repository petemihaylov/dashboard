import { LanguageMetadata } from "../types";

export const en = {
  translation: {
    header: {
      services: "Services",
      gallery: "Gallery",
      testimonials: "Testimonials",
      contacts: "Contacts",
    },
    feedback: {
      not_found: {
        title: "Page not found",
        description:
          "Sorry, we couldn&apos;t find the page you&apos;re looking for.",
        go_back: "Go back",
      },
    },
    cookieConsent: {
      acceptButton: "Accept",
      declineButton: "Decline",
      message:
        "This website uses cookies. See our <link/> for more information.",
      privacyPolicyLink: "privacy policy",
    },
  },
};

export const enMetadata: LanguageMetadata = {
  name: "English",
  code: "en",
};
