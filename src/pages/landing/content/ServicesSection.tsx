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
              <div className="relative flex h-full flex-col border overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Performance
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    maiores impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                    alt=""
                  />
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
