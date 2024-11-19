import React from "react";
import { nanoid } from "@reduxjs/toolkit";

const PartnersSection = () => {
  const logos = [
    {
      alt: "Aqua Lung",
      src: "https://cdn.worldvectorlogo.com/logos/aqua-lung-4.svg",
    },
    {
      alt: "Suunto",
      src: "https://www.sportgardena.com/media/image/77/0b/95/suunto.png",
    },
    {
      alt: "Technisub",
      src: "https://alboomkuwait.com/wp-content/uploads/2020/01/technisub-logo.png",
    },
    {
      alt: "Mares",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/22/Mares_logo.svg",
    },
    {
      alt: "Oceanic",
      src: "https://www.oceanicworldwide.com/wp-content/uploads/sites/6/2024/08/oceanic-logo.png",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .scrolling-container {
            display: flex;
            gap: 2rem;
            animation: scroll 15s linear infinite;
            width: max-content;
          }

          .scrolling-wrapper {
            display: flex;
            overflow: hidden;
            position: relative;
            white-space: nowrap;
          }
        `}
      </style>
      <div className="opacity-[0.8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="scrolling-wrapper"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 128px, black calc(100% - 128px), transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 128px, black calc(100% - 128px), transparent 100%)",
            }}
          >
            <div className="scrolling-container">
              {logos.map((logo) => (
                <img
                  key={nanoid()}
                  alt={logo.alt}
                  src={logo.src}
                  width={158}
                  className="max-h-12 w-full object-contain"
                  style={{
                    aspectRatio: "5/2",
                    objectFit: "contain",
                    mixBlendMode: "color-burn",
                  }}
                />
              ))}
              {logos.map((logo) => (
                <img
                  key={nanoid()}
                  alt={logo.alt}
                  src={logo.src}
                  width={158}
                  className="max-h-12 w-full object-contain"
                  style={{
                    aspectRatio: "5/2",
                    objectFit: "contain",
                    mixBlendMode: "color-burn",
                  }}
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
