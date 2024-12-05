import React from "react";
import { Layout } from "../../common";
import HeroSection from "./content/HeroSection";
import BentoSection from "./content/BentoSection";
import NewsletterSection from "./content/NewsletterSection";
import ServicesSection from "./content/ServicesSection";
import CoursesCarousel from "./content/CoursesCarousel";

const LandingPage = () => (
  <Layout scrollable>
    <HeroSection />
    <ServicesSection />
    <CoursesCarousel />
    <BentoSection />
    {/* <PartnersSection /> */}
    <NewsletterSection />
  </Layout>
);

export default LandingPage;
