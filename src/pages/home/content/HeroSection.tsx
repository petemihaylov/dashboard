import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import { TextGenerateEffect } from "../../../components/TextGenerateEffect";

const HeroSection = () => (
  <motion.section
    className="relative h-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <img
      src="assets/images/background.jpeg?height=1080&width=1920"
      alt="Hero background"
      className="absolute inset-0 object-cover w-full h-full "
    />
    <div className="absolute inset-0 bg-[#0d0a22]/60 h-full " />
    <div className="relative container mx-auto px-4 sm:h-full h-[90vh] flex items-center">
      <motion.div
        className="max-w-3xl text-white sm:px-0 px-1"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="sm:text-5xl text-3xl font-bold tracking-tighter lg:text-7xl">
          <TextGenerateEffect
            duration={2}
            filter={false}
            words="Dive Into Your Next Adventure"
          />
        </h1>
        <div className="mt-6 sm:text-xl text-sm">
          <TextGenerateEffect
            duration={2}
            filter={false}
            words="Experience the wonders of the underwater world with expert-led scuba diving tours and courses."
          />
        </div>
        <div className="mt-10 flex gap-4">
          <Button className="hover:text-white text-gray-300 block w-[8rem] rounded bg-indigo-600 px-3.5 h-[2.5rem]">
            Contact Us
          </Button>
          <Button className="hover:text-white text-gray-300">Learn More</Button>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default HeroSection;
