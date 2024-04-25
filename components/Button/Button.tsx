"use client";

import { Ref, forwardRef, useState } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  type?: "submit" | "reset";
  size?: "xsm" | "sm" | "lg" | "xlg";
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  title?: string;
  children: React.ReactNode | React.ReactNode[];
  id: string;
  tabIndex?: number;
  onClickEvent: () => void;
  onBlur?: () => void;
  noneHover?: true;
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
const TextButton = (
  {
    type,
    size,
    color,
    border,
    onClickEvent,
    children,
    tabIndex,
    onBlur,
    title,
    id,
    noneHover,
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  // hover
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      ref={ref}
      id={id}
      type={type ? type : "button"}
      role="button"
      title={title ? title : "commonBTN"}
      aria-label={title ? title : "button"}
      tabIndex={tabIndex !== undefined ? tabIndex : 0}
      onClick={onClickEvent}
      onBlur={onBlur ? onBlur : () => {}}
      onMouseEnter={() => {
        if (noneHover === undefined) {
          setIsHover(true);
        }
      }}
      onMouseLeave={() => {
        if (noneHover === undefined) {
          setIsHover(false);
        }
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
        border ? style[border] : ""
      } ${isHover === true ? `${style[color + "_hover"]}` : ""}`}
      disabled={color === "disabled" ? true : false}
    >
      {children}
    </button>
  );
};

export default forwardRef(TextButton);
