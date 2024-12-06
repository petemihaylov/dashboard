"use client";

import { motion } from "framer-motion";
import { nanoid } from "@reduxjs/toolkit";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Diving Courses",
      description:
        "Learn to dive with certified CMAS and PADI instructors. Courses available for beginners to advanced divers.",
      price: "450 BGN", // Price in BGN
      features: [
        "Certified CMAS & PADI instructors",
        "Courses for all levels",
        "Specialty courses",
      ],
      link: "/services",
    },
    {
      id: 2,
      title: "Day Dive",
      description:
        "Enjoy an adventurous day dive with experienced guides. Ideal for non-divers or any level divers. Includes the whole equipment.",
      price: "70 BGN", // Price in BGN
      features: [
        "Experienced diving guides",
        "Underwater photography",
        "Tanks, weights, and equipment rental",
      ],
      link: "/services/day-dive",
    },
    {
      id: 3,
      title: "Boat Dive",
      description:
        "Experience an exciting wreck dive at one of the area's most renowned dive sites, exclusively for certified divers.",
      price: "150 BGN", // Price in BGN
      features: [
        "Boat dive to an exciting wreck site",
        "For certified divers only",
        "Explore marine life around the wrecks",
        "Experienced dive guides",
      ],
      link: "/services",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
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
              <div className="relative flex h-full flex-col border hover:shadow cursor-pointer overflow-hidden rounded-xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <div className="flex gap-3">
                    <span className="mb-3 inline-block rounded bg-gray-200 px-2 py-1 font-mono text-sm font-bold text-gray-500">
                      0{service.id}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="my-2 text-sm opacity-50">
                    {service.description}
                  </p>
                </div>
                <div className="pt-8 px-10 pb-10">
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature) => (
                      <li key={nanoid()} className="flex items-center">
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
