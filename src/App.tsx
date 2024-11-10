import React from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { storeManager } from './store/store';
import Router from './Router';

const App = () => (
  <Provider store={storeManager.store}>
    <HelmetProvider>
      <Helmet>
        <title>Web App</title>
        <link
          rel="icon"
          type="image/x-icon"
          media="(prefers-color-scheme: light)"
          href="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico"
        />

        <link
          rel="icon"
          type="image/x-icon"
          media="(prefers-color-scheme: dark)"
          href="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico"
        />
      </Helmet>
    </HelmetProvider>

    <Router />
  </Provider>
);

export default App;
