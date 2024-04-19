"use client";

import React, { Ref, forwardRef, useEffect, useState } from "react";
import style from "./Input.module.scss";

interface InputProps {
  inpSize?: "sm" | "md";
  // TODO: 디자인에 맞게 추가
  color?: "blue" | "disabled";
  // TODO: 디자인에 맞게 추가
  border?: "br_3" | "br_50";
  // TODO: 디자인에 맞게 추가
  borderColor?: "white" | "black" | "gray";
  title?: string;
  value: string | number;
}

/**
 *
 * @param inpSize?: 인풋 크기 (기본 lg)
 * @return "sm" | "md";
 *
 * @param color?: 인풋 배경 색상 (기본 white)
 * @returns  "disabled"
 *
 * @param border?: 보더 사이즈 (기본 0)
 * @return "br_3" | "br_50";
 *
 * @param borderColor?: 인풋 보더 색상 (기본 없음)
 * @returns  "white" | "black" | "gray"
 *
 * @param value: 인풋 value
 * @returns string | number
 *
 * @param title?: 인풋 title
 * @returns string
 */

const Input = (
  {
    inpSize,
    color,
    title,
    border,
    borderColor,
    value,
    ...props
  }: InputProps & React.HTMLProps<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) => {
  const [idValue, setIdValue] = useState<number>(0);

  useEffect(() => {
    const randomValue = new Uint32Array(1);
    window.crypto.getRandomValues(randomValue);
    if (idValue === 0) {
      setIdValue(randomValue[0]);
    }
  }, []);

  return (
    <>
      <label htmlFor={`input_${idValue}`} className="screen_out">
        {title ? title : "BasicInput"}
      </label>
      <input
        id={`input_${idValue}`}
        className={`${style.inp} ${
          inpSize === "sm" ? style.sm : inpSize === "md" ? style.md : style.lg
        } ${
          color === "blue"
            ? style.blue
            : color === "disabled"
            ? style.disabled
            : ""
        } ${
          border === "br_3" ? style.br_3 : border === "br_50" ? style.br_50 : ""
        } ${
          borderColor === "white"
            ? style.border_color_white
            : borderColor === "black"
            ? style.border_color_black
            : borderColor === "gray"
            ? style.border_color_gray
            : ""
        }`}
        disabled={color === "disabled" ? true : false}
        value={value}
        ref={ref}
        {...props}
      />
    </>
  );
};

export default forwardRef(Input);
