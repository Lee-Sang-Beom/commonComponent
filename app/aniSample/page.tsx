"use client";
import Input from "@/components/Input/Input";
import style from "./page.module.scss";
import { FaArrowDown } from "react-icons/fa6";
import Button from "@/components/Button/Button";
import { Opacity, SubjectOutlined } from "@mui/icons-material";
import FileInputOuter from "@/components/FileInput/FileInputOuter";
import Chip from "@/components/Chip/Chip";
import Switch from "@/components/Switch/Switch";
import Radiobox from "@/components/Radiobox/Radiobox";
import Checkbox from "@/components/Checkbox/Checkbox";
import Textarea from "@/components/Textarea/Textarea";
import Selectbox from "@/components/Selectbox/Selectbox";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { duration } from "moment";
import { Fade } from "@mui/material";

export default function aniSample() {
  return (
    <>
      <div className={style.wrap}>
        <p className={style.title}>BUTTON HOVER</p>
        <ul className={style.btn_list}>
          <li>
            <button className={style.button_winona} data-text="Open Project">
              <span>Open Project</span>
            </button>
            <button className={style.button_ujarak} data-text="Open Project">
              <span>Open Project</span>
            </button>
          </li>
        </ul>
        <ul className={style.btn_link}>
          <li>
            <a
              target="_blank"
              href="https://tympanus.net/Development/ButtonHoverStyles/"
            >
              링크1
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://tympanus.net/Development/CreativeButtons/"
            >
              링크2
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://inpa.tistory.com/entry/CSS-%F0%9F%92%8D-%EB%B2%84%ED%8A%BC-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%AA%A8%EC%9D%8C"
            >
              링크3
            </a>
          </li>
          <li>
            <a target="_blank" href="https://codepen.io/kazemi/pen/aGXbMm">
              링크4
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://css3studio.com/page-effect-ex/effect-ex-button.php"
            >
              링크5
            </a>
          </li>
        </ul>

        <p className={style.title}>BOX HOVER</p>
        <div className={`${style.box} ${style.actionImg3}`}>
          <img
            src="http://css3studio.com/images/effect_ex/ex_img_1.jpg"
            alt="This image is a css3 example image."
          />
          <div className={style.hover}>
            <div className={style.line1}></div>
            <div className={style.line2}></div>
            <div className={style.sub_tit}>Line Reveal</div>
          </div>
        </div>
        <ul className={style.btn_link}>
          <li>
            <a target="_blank" href="http://rwdb.kr/mouseoverinteraction/">
              링크1
            </a>
          </li>
          <li>
            <a target="_blank" href="https://codepen.io/Gogh/pen/dEwGvR">
              링크2
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://css3studio.com/page-effect-ex/effect-ex-image.php"
            >
              링크3
            </a>
          </li>
        </ul>
        <p className={style.title}>TEXT</p>
        <div className={style.wrapper}>
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              wisdom.lksmart.
            </text>
          </svg>
        </div>
        <p>
          <a
            target="_blank"
            href="https://www.cssportal.com/css-animated-text-generator/"
          >
            텍스트 애니메이션 자동생성 링크
          </a>
        </p>
      </div>
    </>
  );
}
