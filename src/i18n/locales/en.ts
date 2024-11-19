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
    contact: {
      contactTitle: "Contact us",
      contactSubtitle:
        "Please provide your details and we will get back to you shortly.",
      fullName: "Full name",
      email: "Email",
      phoneNumber: "Phone number",
      message: "Message",
      agreeToPolicies: "By selecting this, you agree to our <link/>",
      privacyPolicyLink: "privacy policy",
      submitButton: "Let's Talk",
      alertSuccess: "Your message has been sent successfully",
      alertError: "You must agree to the privacy policy",
    },
  },
};

export const enMetadata: LanguageMetadata = {
  name: "English",
  code: "en",
};
