"use client";
import { motion } from "framer-motion";
import style from "./scrollSection.module.scss";

export default function ScrollSectionPage() {
  const variants = {
    first: {
      x: 0,
      rotate: 45,
    },
    inView: {
      x: 0,
      rotate: 360,
    },
    animationEnd: {
      x: 0,
      rotate: 360,
    },
  };
  return (
    <div>
      <div className={style.first_box}>아래로 스크롤해주세요. ↓</div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <div className={`${style.section_item} ${style.first}`}>
          <p>안녕하세요, 여긴 콘텐츠 1의 영역입니다.</p>
          <span>이건 부가적인 설명이에요.</span>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        initial={`first`}
        viewport={{ once: false }}
        whileInView={`inView`}
        // animate={`animationEnd`}
        transition={{
          ease: "easeInOut",
          duration: 2,
          // y: { duration: 1 },
        }}
      >
        <div className={`${style.section_item} ${style.second}`}>
          <p>motion.div</p>
          <span>framer-motion 라이브러리를 사용했어요.</span>
        </div>
      </motion.div>
      {/* <motion.div>
        <div className={`${style.section_item} ${style.first}`}>
          <p>안녕하세요, 여긴 콘텐츠 1의 영역입니다.</p>
          <span>이건 부가적인 설명이에요.</span>
        </div>
      </motion.div> */}
    </div>
  );
}
