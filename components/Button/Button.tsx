"use client";

import { Ref, forwardRef, useState } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  size?: "sm" | "md";
  // TODO: 색상에 맞게 컬러 추가
  color?: "black" | "disabled";
  title?: string;
  text: string;
  id: string;
  tabIndex?: number;
  onClickEvent: () => void;
  onBlur?: () => void;
}

/**
 * @param size?: 버튼 크기 (기본 lg)
 * @return "sm" | "md";
 *
 * @param color?: 버튼 색상 (기본 white)
 * @returns "black" | "disabled"
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
  { size, color, onClickEvent, text, tabIndex, onBlur, title, id }: ButtonProps,
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
        size === "sm" ? style.sm : size === "md" ? style.md : style.lg
      } ${
        color === "black"
          ? style.black
          : color === "disabled"
          ? style.disabled
          : style.white
      } ${isHover === true ? `${style[color + "_hover"]}` : ""}`}
      disabled={color === "disabled" ? true : false}
    >
      {text}
    </button>
  );
};

export default forwardRef(TextButton);
