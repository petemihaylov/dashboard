import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "@reduxjs/toolkit";
import { CourseCard, CourseProps } from "./CourseCard";

const courses: CourseProps[] = [
  {
    title: "CMAS Advanced",
    location: "Arapya",
    date: "September 25",
    price: 389,
    image:
      "https://images.unsplash.com/photo-1682687981974-c5ef2111640c?auto=format&fit=crop&q=80&w=600&h=600",
  },
  {
    title: "Open Water Diver",
    location: "Blue Lagoon",
    date: "October 5",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80&w=600&h=600",
  },
  {
    title: "Rescue Diver",
    location: "Coral Bay",
    date: "October 15",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80&w=600&h=600",
  },
  {
    title: "Night Diving",
    location: "Deep Blue",
    date: "October 20",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1682687981974-c5ef2111640c?auto=format&fit=crop&q=80&w=600&h=600",
  },
];

// Double the courses array for infinite scroll effect
const infiniteScroll = [...courses, ...courses, ...courses];

const NavigationButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => (
  <motion.button
    initial={{ opacity: 0.6 }}
    whileHover={{ opacity: 1, scale: 1.1 }}
    className={`absolute top-1/2 ${direction === "left" ? "left-4" : "right-4"} 
    bg-red/10 backdrop-blur-md text-white p-4 rounded-full 
    hover:bg-white/20 transition-colors duration-200 z-10`}
    onClick={onClick}
  >
    <FontAwesomeIcon
      icon={direction === "left" ? faChevronLeft : faChevronRight}
      className="w-6 h-6"
    />
  </motion.button>
);

const DotIndicator = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => (
  <motion.button
    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
      active ? "bg-white scale-150" : "bg-white/30"
    }`}
    whileHover={{ scale: 1.5 }}
    whileTap={{ scale: 1 }}
    onClick={onClick}
  />
);

const CoursesCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(courses.length);
  const [isAnimating, setIsAnimating] = React.useState(false);

  useEffect(() => {
    if (currentIndex <= courses.length - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(currentIndex + courses.length);
      }, 0);
    } else if (currentIndex >= infiniteScroll.length - courses.length) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(currentIndex - courses.length);
      }, 0);
    } else {
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [currentIndex]);

  const visibleIndex =
    ((currentIndex % courses.length) + courses.length) % courses.length;

  const handleSlideChange = (newIndex: number) => {
    setIsAnimating(true);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    if (!isAnimating) {
      handleSlideChange(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      handleSlideChange(currentIndex - 1);
    }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-[#0a2041] to-[#554ce6] relative">
      <div className="max-w-screen-xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Our Courses</h2>
          <p className="text-blue-200 text-xl">
            Discover our professional scuba diving courses
          </p>
        </motion.div>

        <div className="relative px-10">
          <div className="flex justify-between items-center w-full">
            <NavigationButton direction="left" onClick={prevSlide} />
            <NavigationButton direction="right" onClick={nextSlide} />

            <div className="overflow-hidden relative w-[60%] backdrop-blur-md max-w-[90rem] mx-auto rounded-lg">
              <motion.div
                className="flex"
                animate={{
                  x: `calc(-${currentIndex * (100 / 5)}% - ${currentIndex * 1.5}rem)`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {infiniteScroll.map((course, index) => (
                  <motion.div
                    key={nanoid()}
                    className="flex-shrink-0 w-1/3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CourseCard {...course} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            className="flex justify-center gap-2 w-full mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {courses.map((course, index) => (
              <DotIndicator
                key={nanoid()}
                active={visibleIndex === index}
                onClick={() =>
                  !isAnimating && handleSlideChange(index + courses.length)
                }
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCarousel;
