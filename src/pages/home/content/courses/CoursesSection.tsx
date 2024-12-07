import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import DotIndicator from "./DotIndicator";
import NavigationButton from "../../../../components/buttons/NavigationButton";

export type Course = {
  title: string;
  location: string;
  date: string;
  price: number;
  image: string;
};

const courses: Course[] = [
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
const scrollCourses = [...courses, ...courses, ...courses, ...courses];

const CoursesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(courses.length);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate the visible index for the current slide
  const modIndex = currentIndex % courses.length;
  const visibleIndex = (modIndex + courses.length) % courses.length;

  // Preload images to avoid flickering
  const preloadImages = (crs: Course[]) => {
    crs.forEach((c) => {
      const img = new Image();
      img.src = c.image;
    });
  };

  useEffect(() => {
    preloadImages(courses);
  }, []);

  // Handle infinite scroll effect
  useEffect(() => {
    if (currentIndex <= courses.length - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(currentIndex + courses.length);
      }, 0);
    } else if (currentIndex >= scrollCourses.length - courses.length) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(currentIndex - courses.length);
      }, 0);
    } else {
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [currentIndex]);

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
            <div className="overflow-hidden relative w-full backdrop-blur-md max-w-[90rem] mx-auto rounded-lg">
              <motion.div
                className="flex"
                animate={{
                  x: `calc(-${currentIndex * (100 / 5)}% - ${currentIndex * 1.5}rem)`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  staggerChildren: 0.1,
                }}
              >
                {scrollCourses.map((course, index) => (
                  <motion.div
                    layout
                    key={nanoid()}
                    className="flex-shrink-0 px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <NavigationButton direction="left" onClick={prevSlide} />
            <NavigationButton direction="right" onClick={nextSlide} />
          </div>

          <motion.div
            className="flex justify-center gap-2 w-full mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {courses.map((_, index) => (
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

export default CoursesSection;
