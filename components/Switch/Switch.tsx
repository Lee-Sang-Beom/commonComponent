"use client";

import React, { Ref, forwardRef, useEffect, useId, useState } from "react";
import style from "./Switch.module.scss";
import { FieldValues } from "react-hook-form";

interface SwitchProps {
  txt?: { left: string; right: string };
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  title: string;
  value?: string | number;
  partialErrorObj?: FieldValues;
  type?: "large";
}

/**
 *
 * @param txt?: 좌우 텍스트
 * @return { left: string, right: string };
 *
 * @param inpSize?: 인풋 크기  (기본 md)
 * @return "xsm" | "sm" | "lg" | "xlg";
 *
 * @param color?: 인풋 색상 (기본 white)
 * @returns string (black, mainColor, disabled)
 *
 * @param border?: 보더 사이즈 (기본 0)
 * @return "br_square_round_1" | "br_square_round_2" | "br_round";
 *
 * @param value?: 인풋 value // react-hook-form을 사용하면 안보내도 됨
 * @returns string | number
 *
 * @param title: input title로, 한 페이지 내에서 겹치지 않는 input 대상명을 정확히 보내주어야 함
 * @returns string
 *
 * @param type : 기본 타입 외에 배경이 작고, 스위치 버튼이 더 큰 형태 : large 타입
 * @returns "large"
 */

const Switch = (
  {
    txt,
    color,
    title,
    border,
    value,
    partialErrorObj,
    type,
    ...props
  }: SwitchProps & React.HTMLProps<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) => {
  const id = useId();

  return (
    <div className={style.switch_box}>
      <label htmlFor={`${id}_ ${title}`} className="screen_out">
        {title}
      </label>
      {txt && txt.left ? <span>{txt.left}</span> : ""}
      <input
        type="checkbox"
        id={`${id}_${title}`}
        title={title}
        className={`${style.switch} 
        ${color && color !== "" ? style[color] : style.white} ${
          border ? style[border] : ""
        } ${partialErrorObj && style.red} ${
          type && type == "large" ? style.large : ""
        }`}
        disabled={color === "disabled" ? true : false}
        value={value}
        ref={ref}
        {...props}
      />
      {txt && txt.right ? <span>{txt.right}</span> : ""}
    </div>
  );
};

export default forwardRef(Switch);
