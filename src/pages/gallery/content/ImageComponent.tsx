import { motion } from "framer-motion";
import { Card } from "../GalleryPage";

interface Props {
  card: Card;
}

const ImageComponent = ({ card }: Props) => (
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

export default ImageComponent;
