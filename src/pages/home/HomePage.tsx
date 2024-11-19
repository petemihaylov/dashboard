import React from "react";
import { Layout } from "../../common";
import HeroSection from "./content/HeroSection";
import BentoSection from "./content/BentoSection";
import NewsletterSection from "./content/NewsletterSection";
import ServicesSection from "./content/ServicesSection";

const LandingPage = () => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <BentoSection />
    {/* <PartnersSection /> */}
    <NewsletterSection />
  </Layout>
);

export default LandingPage;
