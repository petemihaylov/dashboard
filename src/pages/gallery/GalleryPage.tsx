import React from "react";

import { Card, LayoutGrid } from "../../common/layout/LayoutGrid";
import { Layout } from "../../common";

const SkeletonOne = () => (
  <div>
    <p className="font-normal md:text-2xl text-l text-white">
      Wreck Dive for Certified Divers
    </p>
    <p className="font-light text-base text-white" />
    <p className="font-light text-base my-4 max-w-lg text-neutral-200">
      Explore fascinating underwater shipwrecks, abundant marine life, and the
      unique ecosystem surrounding the wrecks, exclusively for certified divers
    </p>
  </div>
);

// GallerySection component
const GalleryPage = () => {
  // Generate the image URLs dynamically
  const images = Array.from(
    { length: 9 },
    (_, i) =>
      `assets/images/${String(i + 1).padStart(2, "0")}.jpg?height=300&width=400`
  );

  // Create the array of Card objects
  const cards: Card[] = images.map((image, index) => ({
    id: index + 1,
    content: <SkeletonOne />,
    className: index % 4 ? "col-span-1" : "col-span-2",
    thumbnail: image,
  }));

  // Pass the cards array to the LayoutGrid component
  // Pass the cards array to the LayoutGrid component
  return (
    <Layout>
      <div className="h-screen py-20 w-full">
        <LayoutGrid cards={cards} />
      </div>
    </Layout>
  );
};

export default GalleryPage;
