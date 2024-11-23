import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export type Card = {
  id: number;
  className: string;
  thumbnail: string;
  title: string;
  description: string;
};

const ImageComponent = ({ card }: { card: Card }) => (
  <motion.div
    className="relative h-full w-full overflow-hidden rounded"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <img
      src={card.thumbnail}
      className="object-cover w-full h-full"
      alt={card.title}
    />
    <motion.div
      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    >
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
        <p className="text-white/90 text-sm">{card.description}</p>
      </div>
    </motion.div>
  </motion.div>
);

const SelectedCard = ({
  selected,
  onClose,
}: {
  selected: Card;
  onClose: () => void;
}) => (
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
      <button
        type="submit"
        onClick={onClose}
        className="absolute  bg-red top-4 right-4 z-10 px-1 pt-1 rounded bg-white/90  hover:bg-white transition-all duration-200 shadow-lg"
      >
        <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-gray-800" />
      </button>
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

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  return (
    <>
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 auto-rows-[300px]"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`cursor-pointer mb-3 ${card.className}`}
            onClick={() => setSelected(card)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ImageComponent card={card} />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <SelectedCard selected={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
};
