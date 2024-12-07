import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import { Card } from "../GalleryPage";

interface Props {
  selected: Card;
  onClose: () => void;
}

const SelectedCard = ({ selected, onClose }: Props) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="relative max-w-5xl w-full bg-white rounded overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <Button
        type="submit"
        onClick={onClose}
        className="absolute  bg-red top-4 right-4 z-10 px-1 pt-1 rounded bg-white/90 hover:bg-white transition-all duration-200 shadow-lg"
      >
        <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-gray-800" />
      </Button>
      <div className="relative">
        <img
          src={selected.thumbnail}
          className="w-full h-[80vh] object-cover"
          alt={selected.title}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            {selected.title}
          </h2>
          <p className="text-white/90 text-lg">{selected.description}</p>
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

export default SelectedCard;
