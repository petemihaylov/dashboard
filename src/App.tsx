import React from "react";
import { Provider } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { storeManager } from "./store/store";
import Router from "./Router";
import config from "./config/config";

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

    <Router />
  </Provider>
);

export default App;
