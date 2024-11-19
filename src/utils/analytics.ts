/* eslint-disable no-console */
import Cookies from "js-cookie";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your GA4 Measurement ID

let isGAInitialized = false;

/**
 * Initializes Google Analytics.
 */
export const initializeAnalytics = () => {
  if (!isGAInitialized) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    isGAInitialized = true;
  }
};

/**
 * Logs a page view to Google Analytics.
 * @param path - Optional custom path (defaults to `window.location.pathname`).
 * @param title - Optional page title.
 * @param additionalData - Optional additional parameters for tracking.
 */
export const logPageView = ({
  path = window.location.pathname,
  title,
  additionalData,
}: {
  path?: string;
  title?: string;
  additionalData?: Record<string, string | number | boolean>;
}) => {
  try {
    const data = {
      hitType: "pageview",
      page: path,
      ...(title && { title }),
      ...additionalData,
    };

    ReactGA.send(data);
  } catch (error) {
    console.error("Failed to log page view:", error);
  }
};

/**
 * Updates Google Analytics consent mode.
 * @param consent - 'granted' or 'denied'
 */
export const updateConsent = (consent: "granted" | "denied") => {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: consent,
      });
      console.info(`Consent updated to: ${consent}`);
    } else {
      console.warn("Google Analytics (gtag) is not available.");
    }

    if (consent === "granted") {
      initializeAnalytics();
      logPageView({});
    }
  } catch (error) {
    console.error("Failed to update consent:", error);
  }
};

/**
 * Checks if the user has provided consent.
 * @returns {boolean} - True if consent is granted, false otherwise.
 */
export const isConsentGranted = (): boolean =>
  Cookies.get("user_consent") === "accepted";

/**
 * Sets the user's consent decision and updates Google Analytics.
 * @param consent - 'accepted' or 'declined'
 */
export const setConsent = (consent: "accepted" | "declined") => {
  try {
    if (consent === "accepted") {
      Cookies.set("user_consent", consent, { expires: 365 });
      updateConsent("granted");
    } else {
      Cookies.set("user_consent", "declined", { expires: 365 });
      updateConsent("denied");
    }
    console.info(`User consent set to: ${consent}`);
  } catch (error) {
    console.error("Failed to set consent:", error);
  }
};
