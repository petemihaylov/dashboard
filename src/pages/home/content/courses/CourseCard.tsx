import { motion } from "framer-motion";
import { VscChevronRight } from "react-icons/vsc";
import { Course } from "./CoursesSection";

interface Props {
  course: Course;
}

const CourseCard = ({ course }: Props) => (
  <motion.div
    className="mx-auto h-[400px] sm:h-[350px] md:h-[400px] rounded overflow-hidden group cursor-pointer bg-white shadow-xl"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    {/* Image Container */}
    <div className="relative h-1/2 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${course.image})` }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute text-2xl  bottom-4 right-4 text-white px-4 py-2 rounded font-bold">
        € {course.price}
      </div>
    </div>

    {/* Content */}
    <div className="p-6 h-1/2 flex flex-col justify-between bg-white">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {course.title}, {course.location}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <span className="text-sm">{course.date}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <p className="text-sm w-full text-right">Learn More</p>
        <VscChevronRight className="w-4 h-4" />
      </div>
    </div>
  </motion.div>
);

export default CourseCard;
