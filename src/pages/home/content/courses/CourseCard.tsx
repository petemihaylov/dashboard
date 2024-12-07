import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Course } from "./CoursesSection";

export const CourseCard = ({ title, location, date, price, image }: Course) => (
  <motion.div
    className="mx-auto h-[400px] sm:h-[350px] md:h-[400px] rounded overflow-hidden group cursor-pointer bg-white shadow-xl"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    {/* Image Container */}
    <div className="relative h-1/2 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute text-2xl  bottom-4 right-4 text-white px-4 py-2 rounded font-bold">
        € {price}
      </div>
    </div>

    {/* Content */}
    <div className="p-6 h-1/2 flex flex-col justify-between bg-white">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {title}, {location}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <span className="text-sm">{date}</span>
          </div>
        </div>
      </div>

      <p className="text-sm w-full text-right">
        Learn More
        <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-2" />
      </p>
    </div>
  </motion.div>
);
