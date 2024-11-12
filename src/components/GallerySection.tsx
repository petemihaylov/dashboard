/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";

type GallerySectionProps = {
  images: string[];
};

export const GallerySection: React.FC<GallerySectionProps> = ({ images }) => (
  <section id="gallery" className="py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <motion.div
            className="aspect-square relative overflow-hidden rounded-lg"
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
