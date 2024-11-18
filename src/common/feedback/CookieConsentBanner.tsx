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
    // prettier-ignore
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="user_consent"
      contentClasses="text-sm"
      style={{ background: "#FFF", color: "#000", textAlign: "left", borderTop: "0.5px solid #DDD" }}
      buttonStyle={{
        color: "#FFF",
        backgroundColor: "#4F45E4",
        fontSize: "13px",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
      buttonClasses="bg-indigo-600 text-gray-300"
      declineButtonStyle={{
        backgroundColor: "#F44336",
        color: "#000",
        fontSize: "13px",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
      expires={365}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      This website uses cookies. See our <a href="/privacy" className="underline">privacy policy</a> for more information.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
