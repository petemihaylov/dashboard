import React from "react";

import { LayoutGrid } from "../../common/layout/LayoutGrid";
import { Layout } from "../../common";
import { cards } from "./mockImages";
// GallerySection component
const GalleryPage = () => {
  // Generate the image URLs dynamically
  const images = Array.from(
    { length: 9 },
    (_, i) =>
      `assets/images/${String(i + 1).padStart(2, "0")}.jpg?height=300&width=400`
  );

  // Pass the cards array to the LayoutGrid component
  return (
    <Layout transparent>
      <div className="min-h-screen bg-neutral-50">
        <div className="max-w-7xl mt-10 mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Scuba Diving Gallery
          </h1>
          <p className="text-gray-600 mb-10">
            Discover the mesmerizing underwater world
          </p>
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
