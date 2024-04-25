"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import style from "./page.module.scss";

export default function ScrollAnimation() {
  const scrollRef = useRef(null);
  const emojiVariants = {
    hidden: { opacity: 0, y: 100, rotateY: 300 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        rotateY: {
          duration: 0.3,
        },
        y: {
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.01,
          duration: 0.3,
        },
      },
    },
  };
  const items = [
    ["⚽️", "축구공"],
    ["🏀", "농구공"],
    ["🏈", "럭비공"],
    ["⚾️", "야구공"],
    ["🎱", "볼링공"],
  ];
  return (
    <>
      <div className={style.App}>
        <h1>Scroll Down 👇</h1>
        <div className={style.container} ref={scrollRef}>
          {items.map(([emoji, label], i) => (
            <motion.div
              className={style.emoji}
              key={i}
              variants={emojiVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ root: scrollRef, once: true, amount: 0.3 }}
            >
              <span role="img" aria-label={label}>
                {emoji}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
