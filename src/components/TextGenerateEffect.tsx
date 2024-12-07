"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { nanoid } from "@reduxjs/toolkit";

export const TextGenerateEffect = ({
  words,
  filter = true,
  duration = 1,
}: {
  words: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [duration, filter, animate]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word) => (
        <motion.span
          key={nanoid()}
          className="text-white opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className="mt-4">
      <div className="text-white leading-snug tracking-wide">
        {renderWords()}
      </div>
    </div>
  );
};
