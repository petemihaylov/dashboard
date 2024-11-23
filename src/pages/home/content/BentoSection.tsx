import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWater,
  faFish,
  faVest,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const BentoSection = () => (
  <div className="bg-gradient-to-b from-blue-50 to-white py-20">
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-center text-base/7 font-semibold text-blue-600">
        Dive Into Adventure
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-balance text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Experience the Magic of the Ocean
      </p>
      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        {/* Professional Training */}
        <div className="relative lg:row-span-2">
          <div className="absolute inset-px rounded bg-white" />
          <div className="relative flex h-full flex-col overflow-hidden rounded">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="text-blue-500 w-8 h-8"
                />
              </div>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
                Professional Training
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Learn from certified instructors with years of experience in
                both recreational and technical diving.
              </p>
            </div>
            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size]">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80"
                alt="Scuba diving training"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded shadow ring-1 ring-black/5" />
        </div>

        {/* Marine Life */}
        <div className="relative max-lg:row-start-1">
          <div className="absolute inset-px rounded bg-white" />
          <div className="relative flex h-full flex-col overflow-hidden rounded">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <FontAwesomeIcon
                  icon={faFish}
                  className="text-blue-500 w-8 h-8"
                />
              </div>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
                Marine Life
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Discover vibrant coral reefs and encounter fascinating marine
                species in their natural habitat.
              </p>
            </div>
            <div className="flex flex-1 items-center justify-cente">
              <img
                className="w-full h-auto object-cover rounded"
                src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80"
                alt="Marine life"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded shadow ring-1 ring-black/5" />
        </div>

        {/* Safety First */}
        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div className="absolute inset-px rounded bg-white" />
          <div className="relative flex h-full flex-col overflow-hidden rounded">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <div className="flex items-center justify-center lg:justify-start mb-10">
                <FontAwesomeIcon
                  icon={faVest}
                  className="text-blue-500 w-8 h-8"
                />
              </div>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
                Safety First
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center mb-1">
                Top-quality equipment and strict safety protocols ensure a
                secure diving experience.
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80"
                alt="Diving safety"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded shadow ring-1 ring-black/5" />
        </div>

        {/* Dive Sites */}
        <div className="relative lg:row-span-2">
          <div className="absolute inset-px rounded bg-white" />
          <div className="relative flex h-full flex-col overflow-hidden rounded">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <FontAwesomeIcon
                  icon={faWater}
                  className="text-blue-500 w-8 h-8"
                />
              </div>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
                Stunning Dive Sites
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Explore breathtaking underwater locations, from vibrant reefs to
                mysterious wrecks.
              </p>
            </div>
            <div className="relative min-h-[30rem] w-full grow">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1682687981974-c5ef2111640c?auto=format&fit=crop&q=80"
                alt="Dive sites"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded shadow ring-1 ring-black/5" />
        </div>
      </div>
    </div>
  </div>
);

export default BentoSection;
