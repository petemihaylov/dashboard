import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const LandingPage = lazy(() =>
  import("./pages").then((module) => ({
    default: module.LandingPage,
  }))
);

const Router = () => (
  <HashRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  </HashRouter>
);

export default Router;
