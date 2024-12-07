import { useState } from "react";
import { Button } from "@headlessui/react";
import { motion } from "framer-motion";
import { nanoid } from "@reduxjs/toolkit";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: "Amazing experience!", author: "John Doe", rating: 5 },
    // More testimonials...
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <Button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16"
            onClick={() =>
              setCurrentTestimonial(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
          >
            {/* <ChevronLeft className="h-4 w-4" /> */}
          </Button>
          <motion.div
            key={nanoid()}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  className={`h-6 w-6 ${
                    i < testimonials[currentTestimonial].rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div> */}
            <p className="text-xl italic mb-6">
              {testimonials[currentTestimonial].text}
            </p>
            <p className="font-medium">
              {testimonials[currentTestimonial].author}
            </p>
          </motion.div>
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16"
            onClick={() =>
              setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
            }
          >
            {/* <ChevronRight className="h-4 w-4" /> */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
