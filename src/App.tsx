import { Provider } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { initializeAnalytics } from "./utils/analytics";
import { CookieConsentBanner } from "./layout";
import { storeManager } from "./store/store";
import config from "./config/config";
import Router from "./Router";

initializeAnalytics();

const App = () => (
  <Provider store={storeManager.store}>
    <HelmetProvider>
      <Helmet>
        <title>{config.app.name}</title>
        <link
          rel="icon"
          type="image/x-icon"
          media="(prefers-color-scheme: light)"
          href={config.app.icon.light}
        />

        <link
          rel="icon"
          type="image/x-icon"
          media="(prefers-color-scheme: dark)"
          href={config.app.icon.dark}
        />
      </Helmet>
    </HelmetProvider>
    <CookieConsentBanner />
    <Router />
  </Provider>
);

export default App;
