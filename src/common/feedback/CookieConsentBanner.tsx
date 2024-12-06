import CookieConsent from "react-cookie-consent";
import { Trans, useTranslation } from "react-i18next";
import { setConsent } from "../../utils/analytics";

const CookieConsentBanner = () => {
  const { t } = useTranslation();

  return (
    <CookieConsent
      location="bottom"
      buttonText={t("cookieConsent.acceptButton")}
      declineButtonText={t("cookieConsent.declineButton")}
      enableDeclineButton
      cookieName="user_consent"
      contentClasses="text-sm"
      style={{
        background: "rgba(0, 0, 0, 0.8)",
        color: "#FFF",
        textAlign: "left",
        fontSize: "12px",
        position: "fixed",
        bottom: "0",
      }}
      buttonClasses="bg-indigo-600"
      buttonStyle={{
        color: "#FFF",
        backgroundColor: "#4F45E4",
        fontSize: "12px",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
      declineButtonStyle={{
        color: "#000",
        backgroundColor: "#FFF",
        fontSize: "12px",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
      expires={365}
      onAccept={() => setConsent("accepted")}
      onDecline={() => setConsent("declined")}
    >
      <Trans
        i18nKey="cookieConsent.message"
        components={{
          link: (
            <a href="/privacy" className="underline text-[#4F45E4]">
              <Trans i18nKey="cookieConsent.privacyPolicyLink" />
            </a>
          ),
        }}
      />
    </CookieConsent>
  );
};

export default CookieConsentBanner;
