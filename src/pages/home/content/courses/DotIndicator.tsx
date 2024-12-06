import { motion } from "framer-motion";
import cn from "classnames";

interface DotIndicatorProps {
  active: boolean;
  onClick: () => void;
}

const DotIndicator = ({ active, onClick }: DotIndicatorProps) => (
  <motion.button
    className={cn(
      "w-2 h-2 rounded-full transition-colors duration-200",
      active ? "bg-white scale-150" : "bg-white/30"
    )}
    whileHover={{ scale: 1.5 }}
    whileTap={{ scale: 1 }}
    onClick={onClick}
  />
);

export default DotIndicator;
