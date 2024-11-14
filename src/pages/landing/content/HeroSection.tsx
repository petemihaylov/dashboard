import React from "react";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";

const HeroSection = () => (
  <motion.section
    className="relative h-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <img
      src="assets/images/background.jpeg?height=1080&width=1920"
      alt="Hero background"
      className="absolute inset-0 object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative container mx-auto px-4 h-full flex items-center">
      <motion.div
        className="max-w-2xl text-white"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl">
          Dive into Adventure
        </h1>
        <p className="mt-6 text-xl">
          Experience the wonders of the underwater world with expert-led scuba
          diving tours and courses.
        </p>
        <div className="mt-10 flex gap-4">
          <Button className="bg-white text-black hover:bg-gray-200">
            Get Started
          </Button>
          <Button className="text-white border-white hover:bg-white hover:text-black">
            Learn More
          </Button>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default HeroSection;
