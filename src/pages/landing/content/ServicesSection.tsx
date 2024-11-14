"use client";

import React from "react";
import { motion } from "framer-motion";
import { VscArrowRight } from "react-icons/vsc";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../../../components/Card";

const ServicesSection = () => {
  const services = [
    {
      title: "DIVING COURSES",
      description:
        "Learn to dive with certified CMAS and PADI instructors. Courses available for beginners to advanced divers, including specialties such as wreck diving and underwater photography.",
      link: "/services",
      image: "assets/images/04.jpg", // Image path for rendering
      duration: "Varies (1-5 days)", // Optional: Duration of the service
      // requirements: "Advanced diving certification required", // Optional: Specific requirements
    },
    {
      title: "DAY DIVE",
      description:
        "Enjoy an adventurous day dive with experienced guides. Includes speed boat rides, tanks, weights, and equipment rental options. Suitable for certified divers.",
      link: "/services/day-dive",
      image: "assets/images/09.jpg",
      duration: "Half day (4-6 hours)", // Optional: Duration of the service
      requirements: "Advanced diving certification required", // Optional: Specific requirements
    },
    {
      title: "BOAT TRIP",
      description:
        "Relax on a scenic boat trip along the coastline. Ideal for non-divers and families, with opportunities for snorkeling, swimming, and enjoying the beautiful marine environment.",
      link: "/services",
      image: "assets/images/07.jpg",
      duration: "3-4 hours", // Optional: Duration of the service
      // requirements: "Advanced diving certification required", // Optional: Specific requirements
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              role="article"
              aria-label={service.title}
            >
              <Card
                className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                hoverInfo={
                  service.requirements
                    ? `Requirements: ${service.requirements}`
                    : undefined
                }
              >
                <CardHeader className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.3]"
                  />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2 opacity-[0.6]">
                    Duration: {service.duration}
                  </p>
                </CardContent>
                <CardFooter>
                  <a
                    href={service.link}
                    className="inline-flex items-center justify-center text-sm"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More <VscArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
