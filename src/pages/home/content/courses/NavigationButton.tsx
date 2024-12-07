import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import { motion } from "framer-motion";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  direction: "left" | "right";
  onClick: () => void;
}

const NavigationButton = ({ direction, onClick }: Props) => (
  <motion.button
    initial={{ opacity: 0.6 }}
    whileHover={{ opacity: 1, scale: 1.1 }}
    className={cn(
      "absolute top-1/2",
      direction === "left" ? "left-4" : "right-4",
      "bg-red/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-colors duration-200 z-10"
    )}
    onClick={onClick}
  >
    <FontAwesomeIcon
      icon={direction === "left" ? faChevronLeft : faChevronRight}
      className="w-6 h-6"
    />
  </motion.button>
);

export default NavigationButton;
