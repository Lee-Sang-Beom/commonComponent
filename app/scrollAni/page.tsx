"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import style from "./page.module.scss";

// 초기 상태 initial
// 목표 상태 animate
// 마지막 상태 exit
// 전환 방법 transition

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
  // const svg = {
  //   start: {
  //     pathLength: 0,
  //     fill: "rgba(255,255,255,0)",
  //   },
  //   end: {
  //     pathLength: 1,
  //     fill: "rgba(255,255,255,1)",
  //     transition: {
  //       default: { duration: 5 },
  //       fill: { duration: 2, delay: 3 },
  //     },
  //   },
  // };
  const transition = { duration: 3, yoyo: Infinity, ease: "easeInOut" };
  const variants = {
    start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
    end: { pathLength: 1, fill: "rgba(255, 255, 255, 1)" },
  };
  const svgani = {
    View: {
      pathLength: 1,
      amount: 0.1,
    },
  };
  return (
    <>
      <div className={style.App} ref={scrollRef}>
        <h1>Scroll Down 👇</h1>
        {/* <p>
          <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <motion.path
              d="M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={transition}
            />
          </motion.svg>
        </p> */}
        <div className={style.container} style={{ marginBottom: "900px" }}>
          {items.map(([emoji, label], i) => (
            <motion.div
              className={style.emoji}
              key={i}
              variants={emojiVariants}
              initial="hidden"
              whileInView="visible"
              // viewport={{ root: scrollRef, once: true, amount: 0.3 }}
            >
              <span role="img" aria-label={label}>
                {emoji}
              </span>
            </motion.div>
          ))}
        </div>
        <p style={{ marginBottom: "900px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <motion.path
              d="M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              // animate={{ pathLength: 1 }}
              transition={transition}
              variants={svgani}
              whileInView="View"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
            <motion.path
              variants={variants}
              initial="start"
              animate="end"
              transition={{
                default: { duration: 1.8 },
                fill: { duration: 1, delay: 1.1 },
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef, once: true, amount: 0.3 }}
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            />
          </svg>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            role="img"
            aria-label="검색 아이콘"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="11"
              cy="11"
              r="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              // animate={{ pathLength: 1 }}
              transition={transition}
              variants={svgani}
              whileInView="View"
            ></motion.circle>
            <motion.line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              // animate={{ pathLength: 1 }}
              transition={transition}
              variants={svgani}
              whileInView="View"
            ></motion.line>
          </svg>
        </p>
      </div>
    </>
  );
}
