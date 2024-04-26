"use client";

import React, {
  Ref,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import style from "./Textarea.module.scss";

interface TextareaProps {
  taSize?: "xsm" | "sm" | "lg" | "xlg";
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  title: string;
  value?: string | number;
  fixSize?: boolean;
  onChange?: (e: any) => void;
  resize?: boolean;
}

/**
 *
 * @param taSize?: textarea 크기  (기본 md)
 * @return "xsm" | "sm" | "lg" | "xlg";
 *
 * @param color?: textarea 색상 (기본 white)
 * @returns string (black, mainColor, disabled, none)
 *
 * @param border?: 보더 사이즈 (기본 0)
 * @return "br_square_round_1" | "br_square_round_2" | "br_round";
 *
 * @param value?: textarea value // react-hook-form을 사용하면 안보내도 됨
 * @returns string | number
 *
 * @param title: input title로, 한 페이지 내에서 겹치지 않는 input 대상명을 정확히 보내주어야 함
 * @returns string

* @param resize?: textarea 사이즈 조절 (기본 false)
 * @returns boolean
 */

export default function Textarea({
  taSize,
  color,
  title,
  border,
  value,
  fixSize,
  onChange,
  resize,
  ...props
}: TextareaProps & React.HTMLProps<HTMLTextAreaElement>) {
  const id = useId();
  const textArea = useRef<HTMLTextAreaElement>(null);
  //
  const resizeHeight = () => {
    if (textArea.current !== null) {
      textArea.current.style.height =
        taSize === "xsm"
          ? "2.8rem"
          : taSize === "sm"
          ? " 3.2rem"
          : taSize === "lg"
          ? "5.6rem"
          : taSize === "xlg"
          ? "6.4rem"
          : "4.4rem";
      textArea.current.style.height =
        textArea.current.scrollHeight <= 100
          ? textArea.current.scrollHeight + "px"
          : "100px";
    }
  };

  return (
    <>
      <label htmlFor={`${id}_ ${title}`} className="screen_out">
        {title}
      </label>
      <textarea
        id={`${id}_${title}`}
        title={title}
        className={`${style.textarea} ${
          taSize === "xsm"
            ? style.xsm
            : taSize === "sm"
            ? style.sm
            : taSize === "lg"
            ? style.lg
            : taSize === "xlg"
            ? style.xlg
            : style.md
        } ${color && color !== "" ? style[color] : style.white} ${
          border ? style[border] : ""
        } ${resize && resize === true ? style.resize : ""}`}
        disabled={color === "disabled" ? true : false}
        value={value}
        onChange={(e) => {
          resizeHeight();
          if (onChange) {
            onChange(e);
          }
        }}
        ref={textArea}
        {...props}
      />
    </>
  );
}
