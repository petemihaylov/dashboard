import React from "react";
import HeroSection from "./content/HeroSection";
import ServicesSection from "./content/ServicesSection";
import GallerySection from "./content/GallerySection";
import TestimonialsSection from "./content/TestimonialsSection";
import ContactSection from "./content/ContactSection";
import AboutUsSection from "./content/AboutUsSection";

const services = [
  {
    title: "DIVING COURSES",
    description:
      "Learn to dive with certified CMAS and PADI instructors. Courses available for beginners to advanced divers, including specialties such as wreck diving and underwater photography.",
    link: "/services",
    image: "/images/04.jpg", // Image path for rendering
    duration: "Varies (1-5 days)", // Optional: Duration of the service
    // requirements: "Advanced diving certification required", // Optional: Specific requirements
  },
  {
    title: "DAY DIVE",
    description:
      "Enjoy an adventurous day dive with experienced guides. Includes speed boat rides, tanks, weights, and equipment rental options. Suitable for certified divers.",
    link: "/services/day-dive",
    image: "/images/09.jpg",
    duration: "Half day (4-6 hours)", // Optional: Duration of the service
    // requirements: "Advanced diving certification required", // Optional: Specific requirements
  },
  {
    title: "BOAT TRIP",
    description:
      "Relax on a scenic boat trip along the coastline. Ideal for non-divers and families, with opportunities for snorkeling, swimming, and enjoying the beautiful marine environment.",
    link: "/services",
    image: "/images/07.jpg",
    duration: "3-4 hours", // Optional: Duration of the service
    // requirements: "Advanced diving certification required", // Optional: Specific requirements
  },
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
    <AboutUsSection />
    <GallerySection images={galleryImages} />
    <TestimonialsSection testimonials={testimonials} />
    <ContactSection />
  </>
);

export default LandingPage;
