import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VscChevronUp } from "react-icons/vsc";
import { useLayoutContext } from "../../layout/context/LayoutRefProvider";

const ScrollToTopButton = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { ref } = useLayoutContext();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setScrolled(ref.current.scrollTop > 350);
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref]);

  // Smooth scroll to top
  const scrollToTop = () => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!scrolled) return null;

  return (
    <motion.button
      initial={{ opacity: 0.6 }}
      whileHover={{ opacity: 1, scale: 1.1 }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-4 right-6 bg-black/30 backdrop-blur-md text-white p-2 rounded-full transition-colors duration-200 z-10"
    >
      <VscChevronUp className="h-6 w-6" />
    </motion.button>
  );
};

export default ScrollToTopButton;
