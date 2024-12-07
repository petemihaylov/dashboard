import { Layout } from "../../layout";
import HeroSection from "./content/HeroSection";
import BentoSection from "./content/features/BentoSection";
import NewsletterSection from "./content/NewsletterSection";
import ServicesSection from "./content/ServicesSection";
import CoursesSection from "./content/courses/CoursesSection";

const LandingPage = () => (
  <Layout scrollable>
    <HeroSection />
    <ServicesSection />
    <CoursesSection />
    <BentoSection />
    {/* <PartnersSection /> */}
    <NewsletterSection />
  </Layout>
);

export default LandingPage;
