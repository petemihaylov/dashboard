import React from "react";
import HeroSection from "./content/HeroSection";
import ServicesSection from "./content/ServicesSection";
import GallerySection from "./content/GallerySection";
import TestimonialsSection from "./content/TestimonialsSection";
import ContactSection from "./content/ContactSection";

const services = [
  {
    title: "DIVING COURSES",
    description: "CMAS and PADI diving courses for all levels.",
    link: "#",
  },
  // More services...
];

const testimonials = [
  { text: "Amazing experience!", author: "John Doe", rating: 5 },
  // More testimonials...
];

const galleryImages = Array.from(
  { length: 8 },
  (_, i) => `/images/${String(i + 1).padStart(2, "0")}.jpg?height=300&width=400`
);

const LandingPage = () => (
  <>
    <HeroSection />
    <ServicesSection services={services} />
    <GallerySection images={galleryImages} />
    <TestimonialsSection testimonials={testimonials} />
    <ContactSection />
  </>
);

export default LandingPage;
