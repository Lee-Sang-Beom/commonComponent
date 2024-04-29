"use client";

import React, { Ref, forwardRef, useEffect, useId, useState } from "react";
import style from "./Radiobox.module.scss";
import { FieldValues } from "react-hook-form";

export interface Radioboxtype {
  name: string;
  value: string | number;
  id: string;
  disabled?: boolean;
  checked?: boolean;
}

interface RadioboxProps {
  items: Radioboxtype[];
  inpSize?: "xsm" | "sm" | "lg" | "xlg";
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  title: string;
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
 * @param title: input title로, 한 페이지 내에서 겹치지 않는 input 대상명을 정확히 보내주어야 함
 * @returns string
 */

const Radiobox = (
  {
    items,
    inpSize,
    color,
    title,
    border,
    partialErrorObj,
    ...props
  }: RadioboxProps & React.HTMLProps<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) => {
  const id = useId();

  return (
    <div className={style.radio_box}>
      {items.map((item: Radioboxtype) => {
        return (
          <div key={`${id}_ ${item.value}`} className={style.radio_inner}>
            <label htmlFor={`${id}_ ${title}`} className="screen_out">
              {title}
            </label>

            <input
              type="radio"
              name={title}
              id={`${id}_${item.id}`}
              title={title}
              className={`${style.radio} ${
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
              }${partialErrorObj && style.red}`}
              disabled={
                color === "disabled" || item.disabled === true ? true : false
              }
              value={item.value}
              ref={ref}
              // checked={item.checked}
              defaultChecked={item.checked ? item.checked : false}
              {...props}
            />
            <span className={style.radio_txt} title={title}>
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default forwardRef(Radiobox);
