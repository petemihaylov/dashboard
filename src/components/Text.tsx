"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { nanoid } from "@reduxjs/toolkit";

interface Props {
  words: string;
  filter?: boolean;
  duration?: number;
}

export const Text = ({ words, filter = true, duration = 1 }: Props) => {
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

  return (
    <div className="mt-4">
      <div className="text-white leading-snug tracking-wide">
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
      </div>
    </div>
  );
};
