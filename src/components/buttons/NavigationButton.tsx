import cn from "classnames";
import { motion } from "framer-motion";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

interface Props {
  direction: "left" | "right";
  onClick: () => void;
}

const NavigationButton = ({ direction, onClick }: Props) => (
  <motion.button
    initial={{ opacity: 0.6 }}
    whileHover={{ opacity: 1, scale: 1.1 }}
    onClick={onClick}
    className={cn(
      "absolute top-1/2",
      direction === "left" ? "left-4" : "right-4",
      "bg-black/10 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/20 transition-colors duration-200 z-10"
    )}
  >
    {direction === "left" ? (
      <VscChevronLeft className="w-6 h-6" />
    ) : (
      <VscChevronRight className="w-6 h-6" />
    )}
  </motion.button>
);

export default NavigationButton;
