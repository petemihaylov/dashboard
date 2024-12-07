import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { isConsentGranted, logPageView } from "../../utils/analytics";

const PageViewLogger = () => {
  const location = useLocation();

  useEffect(() => {
    if (isConsentGranted()) {
      const path = location.pathname + location.search;
      const { title } = document;
      const additionalData = {
        referrer: document.referrer, // Optionally track where users are coming from
        queryParams: location.search, // Track query parameters for better analytics
      };

      logPageView({ path, title, additionalData });
    }
  }, [location.pathname, location.search]);

  return null;
};

export default PageViewLogger;
