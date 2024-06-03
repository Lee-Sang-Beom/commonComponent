"use client";

import { Ref, forwardRef, useState } from "react";
import styles from "./BlurButton.module.scss";

interface BlurButtonProps {
  title: string;
  leftIcon: React.ReactNode | React.ReactNode[];
  rightIcon: React.ReactNode | React.ReactNode[];
  text: string;
  id: string;
  btnStyle?: React.CSSProperties;
  onClickEvent: () => void;
}

/**
 * @param type?: 버튼 타입 (기본 button)
 * @return string
 *
 * @param size?: 버튼 크기 (기본 md)
 * @return "xsm" | "sm" | "lg" | "xlg";
 *
 * @param border?: 보더 사이즈 (기본 0)
 * @return "br_square_round_1" | "br_square_round_2" | "br_round";
 *
 * @param color?: 버튼 색상 (기본 white)
 * @returns string (black, mainColor, mainColorBorder, disabled, none)
 *
 * @param children: 버튼 text
 * @returns string
 *
 * @param title?: 버튼 title
 * @returns string
 *
 * @param tabIndex?
 * @returns number
 *
 * @param onClickEvent: click 이벤트
 * @returns
 *
 * @param onBlur?: 포커스가 해지될 때 이벤트
 * @returns
 *
 * @param id: 버튼 id
 * @returns string
 *
 * @param noneHover?: 호버 없음
 */
const BlurButton = (
  {
    onClickEvent,
    title,
    id,
    leftIcon,
    rightIcon,
    text,
    btnStyle,
  }: BlurButtonProps,

  ref: Ref<HTMLButtonElement>
) => {
  // hover
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      ref={ref}
      id={id}
      type={"button"}
      role="button"
      title={title}
      aria-label={title}
      tabIndex={0}
      onClick={onClickEvent}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className={`${styles.btn}  ${isHover === true ? ` ` : ""}`}
      style={{ ...btnStyle }}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </button>
  );
};

export default forwardRef(BlurButton);
