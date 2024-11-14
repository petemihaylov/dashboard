/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";

const GallerySection = () => {
  const images = Array.from(
    { length: 8 },
    (_, i) =>
      `assets/images/${String(i + 1).padStart(2, "0")}.jpg?height=300&width=400`
  );

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              className={`relative overflow-hidden rounded-lg ${
                index % 4 === 0
                  ? "row-span-2"
                  : index % 5 === 0
                    ? "col-span-2"
                    : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
