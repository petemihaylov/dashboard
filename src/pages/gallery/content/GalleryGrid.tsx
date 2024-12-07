import { useState } from "react";
import cn from "classnames";
import { nanoid } from "@reduxjs/toolkit";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../GalleryPage";
import SelectedCard from "./SelectedCard";
import ImageComponent from "./ImageComponent";

interface Props {
  cards: Card[];
}

export const GalleryGrid = ({ cards }: Props) => {
  const [selected, setSelected] = useState<Card | null>(null);

  return (
    <>
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 auto-rows-[300px]"
      >
        {cards.map((card) => (
          <motion.div
            key={nanoid()}
            className={cn("cursor-pointer mb-3", card.className)}
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
