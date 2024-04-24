"use client";

import { Ref, forwardRef, useState } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  size?: "xsm" | "sm" | "lg" | "xlg";
  color?: string;
  // TODO: 디자인에 맞게 추가
  border?: "br_3" | "br_50";
  title?: string;
  text: string;
  id: string;
  tabIndex?: number;
  onClickEvent: () => void;
  onBlur?: () => void;
}

/**
 * @param size?: 버튼 크기 (기본 md)
 * @return "xsm" | "sm" | "lg" | "xlg";;
 *
 * @param border?: 보더 사이즈 (기본 0)
 * @return "br_3" | "br_50";
 *
 * @param color?: 버튼 색상 (기본 white)
 * @returns string (black, mainColor, mainColorBorder)
 *
 * @param text: 버튼 text
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
 */
const TextButton = (
  {
    size,
    color,
    border,
    onClickEvent,
    text,
    tabIndex,
    onBlur,
    title,
    id,
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  // hover
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      ref={ref}
      id={id}
      type="button"
      role="button"
      title={title ? title : text}
      aria-label={title ? title : text}
      tabIndex={tabIndex !== undefined ? tabIndex : 0}
      onClick={onClickEvent}
      onBlur={onBlur ? onBlur : () => {}}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className={`${style.btn} ${
        size === "xsm"
          ? style.xsm
          : size === "sm"
          ? style.sm
          : size === "lg"
          ? style.lg
          : size === "xlg"
          ? style.xlg
          : style.md
      } ${color && color !== "" ? style[color] : style.white} ${
        border === "br_3" ? style.br_3 : border === "br_50" ? style.br_50 : ""
      } ${isHover === true ? `${style[color + "_hover"]}` : ""}`}
      disabled={color === "disabled" ? true : false}
    >
      {text}
    </button>
  );
};

export default forwardRef(TextButton);
