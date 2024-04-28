"use client";

import React, { Ref, forwardRef, useEffect, useId, useState } from "react";
import style from "./Checkbox.module.scss";
import { FieldValues } from "react-hook-form";

interface CheckboxProps {
  inpSize?: "xsm" | "sm" | "lg" | "xlg";
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  title: string;
  value?: string | number;
  partialErrorObj?: FieldValues;
}

/**
 *
 * @param inpSize?: 인풋 크기  (기본 md)
 * @return "xsm" | "sm" | "lg" | "xlg";
 *
 * @param color?: 인풋 색상 (기본 white)
 * @returns string (black, mainColor, disabled, none)
 *
 * @param border?: 보더 사이즈 (기본 0)
 * @return "br_square_round_1" | "br_square_round_2" | "br_round";
 *
 * @param value?: 인풋 value // react-hook-form을 사용하면 안보내도 됨
 * @returns string | number
 *
 * @param title: input title로, 한 페이지 내에서 겹치지 않는 input 대상명을 정확히 보내주어야 함
 * @returns string
 */

const Checkbox = (
  {
    inpSize,
    color,
    title,
    border,
    value,
    partialErrorObj,
    ...props
  }: CheckboxProps & React.HTMLProps<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) => {
  const id = useId();

  return (
    <div className={style.check_box}>
      <label htmlFor={`${id}_ ${title}`} className="screen_out">
        {title}
      </label>
      <input
        type="checkbox"
        id={`${id}_${title}`}
        title={title}
        className={`${style.checkbox} ${
          inpSize === "xsm"
            ? style.xsm
            : inpSize === "sm"
            ? style.sm
            : inpSize === "lg"
            ? style.lg
            : inpSize === "xlg"
            ? style.xlg
            : style.md
        } ${color && color !== "" ? style[color] : style.white} ${
          border ? style[border] : ""
        } ${partialErrorObj && style.red}`}
        disabled={color === "disabled" ? true : false}
        value={value}
        ref={ref}
        {...props}
      />
    </div>
  );
};

export default forwardRef(Checkbox);
