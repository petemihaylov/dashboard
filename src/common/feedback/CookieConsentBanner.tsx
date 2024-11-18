import React, { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

const CookieConsentBanner = () => {
  const allCookies = Cookies.get();
  const cookiesArray = Object.entries(allCookies);

  useEffect(() => {
    const consentGiven = Cookies.get("user_consent");
    if (consentGiven) {
      console.log("Consent already given:", consentGiven);
    } else {
      console.log("No consent yet.");
    }
  }, []);

  // Handler when user accepts the cookies
  const handleAccept = () => {
    console.log("User accepted cookies");
    // Set a cookie indicating user consent
    Cookies.set("user_consent", "accepted", { expires: 365 });
    // You can also store other data, such as preferences or tracking cookies
  };

  // Handler when user declines cookies
  const handleDecline = () => {
    console.log("User declined cookies");
    // Remove any cookies (e.g., tracking cookies or consent cookies)
    Cookies.remove("user_consent");
    // Optionally, you can remove other cookies related to analytics, tracking, etc.
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="user_consent"
      style={{ background: "#2B373B" }}
      buttonStyle={{
        backgroundColor: "#4CAF50",
        color: "#fff",
        fontSize: "13px",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
      declineButtonStyle={{
        backgroundColor: "#f44336",
        color: "#fff",
        fontSize: "13px",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
      expires={365}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      This website uses cookies to ensure you get the best experience on our
      website.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
