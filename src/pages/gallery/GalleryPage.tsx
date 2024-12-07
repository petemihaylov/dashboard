import { useEffect } from "react";
import { GalleryGrid } from "./content/GalleryGrid";
import { Layout } from "../../layout";

export type Card = {
  className: string;
  thumbnail: string;
  title: string;
  description: string;
};

export const cards: Card[] = [
  {
    className: "col-span-2 row-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
    title: "Mountain Vista",
    description: "Majestic peaks reaching into the clouds",
  },
  {
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80",
    title: "Forest Path",
    description: "A serene walk through nature",
  },
  {
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80",
    title: "Sunset Valley",
    description: "Golden hour in paradise",
  },
  {
    className: "col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    title: "Misty Morning",
    description: "Dawn breaks over the landscape",
  },
  {
    className: "col-span-1 row-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
    title: "Forest Canopy",
    description: "Looking up at nature's cathedral",
  },
  {
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80",
    title: "Alpine Lake",
    description: "Crystal clear mountain waters",
  },

  {
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80",
    title: "Sunset Valley",
    description: "Golden hour in paradise",
  },
  {
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    title: "Misty Morning",
    description: "Dawn breaks over the landscape",
  },
  {
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
    title: "Forest Canopy",
    description: "Looking up at nature's cathedral",
  },
  {
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80",
    title: "Sunset Valley",
    description: "Golden hour in paradise",
  },
  {
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    title: "Misty Morning",
    description: "Dawn breaks over the landscape",
  },
];

const GalleryPage = () => {
  // Preload images to avoid flickering
  const preloadImages = (cds: Card[]) => {
    cds.forEach((c) => {
      const img = new Image();
      img.src = c.thumbnail;
    });
  };

  useEffect(() => {
    preloadImages(cards);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-neutral-50">
        <div className="max-w-7xl mt-10 mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Scuba Diving Gallery
          </h1>
          <p className="text-gray-600 mb-10">
            Discover the mesmerizing underwater world through our lenses.
          </p>
          <GalleryGrid cards={cards} />
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
