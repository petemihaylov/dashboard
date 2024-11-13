import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

const services = [
  {
    title: 'DIVING COURSES',
    description: 'CMAS and PADI diving courses for all levels.',
    link: '#',
  },
  // More services...
];

const testimonials = [
  { text: 'Amazing experience!', author: 'John Doe', rating: 5 },
  // More testimonials...
];

const galleryImages = Array.from(
  { length: 8 },
  (_, i) => `/images/${String(i + 1).padStart(2, '0')}.jpg?height=300&width=400`
);

export const LandingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <ServicesSection services={services} />
        <GallerySection images={galleryImages} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
