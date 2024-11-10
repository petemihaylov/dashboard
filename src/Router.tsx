import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() =>
  import('./pages').then((module) => ({
    default: module.Home,
  }))
);

const Router = () => (
  <HashRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  </HashRouter>
);

export default Router;
