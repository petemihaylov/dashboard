import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const Home = lazy(() =>
  import('./pages').then((module) => ({
    default: module.Home,
  }))
);

const Router = () => (
  <HashRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Home />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  </HashRouter>
);

export default Router;
