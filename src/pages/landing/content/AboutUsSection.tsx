import React from "react";

const styles = {
  clipDiagonal: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
  },
};

const AboutUsSection = () => (
  <section className="relative min-h-screen bg-white overflow-hidden">
    {/* Background Image Section */}
    <div
      className="absolute inset-0 bg-gray-300 z-0"
      style={styles.clipDiagonal} // Apply the clip-path style here
    >
      {/* Add an actual image or placeholder */}
      <img
        src="/path-to-image.jpg"
        alt="About Us Background"
        className="w-full h-full object-cover opacity-50"
      />
    </div>

    {/* Content Section */}
    <div className="relative z-10 flex items-center min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="w-full md:w-2/3 lg:w-1/2 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About Us</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              In 1999, a group of divers from Plovdiv founded the Black Sea
              Scuba Diving School (BSSDS) in Kiten, on the Bulgarian Black Sea
              coast, near the MARINA Hotel. Two years later, the school moved to
              the Arapya camping site and became known as DIVE CENTER ARAPYA.
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
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
