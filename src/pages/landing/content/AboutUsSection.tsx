/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */

"use client";

import React from "react";
import { motion } from "framer-motion";

// Bubble component for reusability
const Bubble = () => {
  const size = Math.random() * 20 + 10;
  const left = `${Math.random() * 100}%`;
  const top = `${Math.random() * 100}%`;
  const duration = 3 + Math.random() * 2;

  return (
    <motion.div
      className="absolute rounded-full bg-white/30 backdrop-blur-sm"
      style={{
        width: size,
        height: size,
        left,
        top,
      }}
      animate={{
        y: [-20, 20],
        x: [-10, 10],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration,
      }}
    />
  );
};
const DivingEquipment = () => {
  // Variants for individual equipment animation
  const equipmentVariants = {
    hidden: { opacity: 0.3, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative w-full h-full">
      {/* Background Blob */}
      <motion.div
        className="absolute inset-0 bg-pink-50 rounded-[40%] transform rotate-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Equipment Grid */}
      <div className="relative grid grid-cols-2 gap-4 p-8 transform rotate-12">
        {/* Shark Image */}
        <motion.div
          className="col-span-1"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={equipmentVariants}
        >
          <div className="w-100 h-48 relative">
            <img
              src="/images/04.jpg"
              alt="Shark"
              className="absolute inset-0 w-full h-full object-contain transform -rotate-12"
            />
          </div>
        </motion.div>

        {/* Diving Mask */}
        <motion.div
          className="col-span-1"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={equipmentVariants}
        >
          <div className="w-40 h-24 bg-sky-400 rounded-lg transform -rotate-6">
            <div className="h-full w-full bg-gradient-to-br from-pink-300/50 to-transparent" />
          </div>
        </motion.div>

        {/* Wetsuit */}
        <motion.div
          className="col-span-2"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={equipmentVariants}
        >
          <div className="w-100 h-48 relative">
            <img
              src="/images/04.jpg"
              alt="Shark"
              className="absolute inset-0 w-full h-full object-contain transform -rotate-12"
            />
          </div>
        </motion.div>

        {/* Floating Bubbles */}
        {[...Array(6)].map((_, i) => (
          <Bubble key={i} />
        ))}
      </div>
    </div>
  );
};

const AboutUsSection = () => (
  <section className="relative min-h-screen bg-white overflow-hidden py-24">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
            ABOUT US
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover the <br />
            <span className="text-sky-500">underwater world</span> <br />
            with us.
          </h3>
          <motion.div
            className="space-y-6 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>
              In 1999, a group of divers from Plovdiv founded the Black Sea
              Scuba Diving School (BSSDS) in Kiten, on the Bulgarian Black Sea
              coast, near the MARINA Hotel.
            </p>
            <p>
              Our mission is to promote safe diving through modern teaching
              methods, internationally recognized techniques, and reliable
              equipment. With years of experience, we are dedicated to sharing
              the wonders of scuba diving with enthusiasts of all levels.
            </p>
            <p>
              DIVE CENTER ARAPYA is a proud member of the Bulgarian National
              Association of Underwater Activities (BNAUA).
            </p>
          </motion.div>
        </motion.div>

        {/* Isometric Illustration */}
        <motion.div
          className="relative h-[600px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <DivingEquipment />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
