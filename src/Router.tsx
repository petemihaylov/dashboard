import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageViewLogger from "./common/feedback/PageViewLogger";

const NotFound = lazy(() =>
  import("./common").then((module) => ({
    default: module.NotFound,
  }))
);

const LandingPage = lazy(() =>
  import("./pages").then((module) => ({
    default: module.LandingPage,
  }))
);

const AboutPage = lazy(() =>
  import("./pages").then((module) => ({
    default: module.AboutPage,
  }))
);

const ContactsPage = lazy(() =>
  import("./pages").then((module) => ({
    default: module.ContactsPage,
  }))
);

const PricesPage = lazy(() =>
  import("./pages").then((module) => ({
    default: module.PricesPage,
  }))
);
const GalleryPage = lazy(() =>
  import("./pages").then((module) => ({
    default: module.GalleryPage,
  }))
);

const Router = () => (
  <BrowserRouter>
    <PageViewLogger />
    <Suspense>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;
