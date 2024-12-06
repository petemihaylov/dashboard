import { GalleryGrid } from "./content/GalleryGrid";
import { Layout } from "../../common";
import { cards } from "./__mocks__/images";

const GalleryPage = () => (
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

export default GalleryPage;
