import React from "react";
import { nanoid } from "@reduxjs/toolkit";

const PartnersSection = () => {
  // Inline style object for the animation
  const scrollAnimation = {
    display: "flex",
    gap: "2rem",
    animation: "scroll 15s linear infinite",
  };

  const logos = [
    {
      alt: "Transistor",
      src: "https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg",
    },
    {
      alt: "Reform",
      src: "https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg",
    },
    {
      alt: "Tuple",
      src: "https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg",
    },
    {
      alt: "SavvyCal",
      src: "https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg",
    },
    {
      alt: "Statamic",
      src: "https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg",
    },
  ];

  return (
    <>
      <style>
        {`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
            }
        `}
      </style>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto mt-10 relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 128px, black calc(100% - 128px), transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 128px, black calc(100% - 128px), transparent 100%)", // For Safari compatibility
            }}
          >
            <div style={scrollAnimation}>
              {logos.concat(logos).map((logo) => (
                <img
                  key={nanoid()}
                  alt={logo.alt}
                  src={logo.src}
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersSection;
