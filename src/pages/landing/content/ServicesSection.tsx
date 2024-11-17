"use client";

import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "DIVING COURSES",
      description:
        "Learn to dive with certified CMAS and PADI instructors. Courses available for beginners to advanced divers, including specialties such as wreck diving and underwater photography.",
      price: "450 BGN", // Price in BGN
      features: [
        "Certified CMAS & PADI instructors",
        "Courses for all levels",
        "Specialty courses (wreck diving, underwater photography)",
      ],
      link: "/services",
    },
    {
      id: 2,
      title: "DAY DIVE",
      description:
        "Enjoy an adventurous day dive with experienced guides. Includes speed boat rides, tanks, weights, and equipment rental options. Suitable for certified divers.",
      price: "250 BGN", // Price in BGN
      features: [
        "Experienced diving guides",
        "Speed boat rides included",
        "Tanks, weights, and equipment rental",
      ],
      link: "/services/day-dive",
    },
    {
      id: 3,
      title: "BOAT TRIP",
      description:
        "Relax on a scenic boat trip along the coastline. Ideal for non-divers and families, with opportunities for snorkeling, swimming, and enjoying the beautiful marine environment.",
      price: "150 BGN", // Price in BGN
      features: [
        "Scenic boat ride along the coastline",
        "Opportunities for snorkeling and swimming",
        "Perfect for non-divers and families",
      ],
      link: "/services",
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
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              role="article"
              aria-label={service.title}
            >
              <div className="relative flex h-full flex-col border overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">
                      {service.price}
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8 sm:px-10 sm:pb-10">
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
