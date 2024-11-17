import React from "react";
import HeroSection from "./content/HeroSection";
import BentoSection from "./content/BentoSection";
import PartnersSection from "./content/PartnersSection";
import NewsletterSection from "./content/NewsletterSection";
import ServicesSection from "./content/ServicesSection";
import { Layout } from "../../common";

const LandingPage = () => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <BentoSection />
    <PartnersSection />
    <NewsletterSection />
  </Layout>
);

export default LandingPage;
