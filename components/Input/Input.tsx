"use client";

import React, { Ref, forwardRef, useEffect, useId, useState } from "react";
import style from "./Input.module.scss";
import { FieldErrors, FieldValues } from "react-hook-form";

interface InputProps {
  inpSize?: "sm" | "md";
  color?: string;
  // TODO: 디자인에 맞게 추가
  border?: "br_3" | "br_50";
  title: string;
  value?: string | number;
  partialErrorObj?: FieldValues;
}

/**
 *
 * @param inpSize?: 인풋 크기 (기본 lg)
 * @return "sm" | "md";
 *
 * @param color?: 인풋 색상 (기본 white)
 * @returns  string
 *
 * @param border?: 보더 사이즈 (기본 0)
 * @return "br_3" | "br_50";
 *
 * @param value?: 인풋 value // react-hook-form을 사용하면 안보내도 됨
 * @returns string | number
 *
 * @param title: input title로, 한 페이지 내에서 겹치지 않는 input 대상명을 정확히 보내주어야 함
 * @returns string
 */

const Input = (
  {
    inpSize,
    color,
    title,
    border,
    value,
    partialErrorObj,
    ...props
  }: InputProps & React.HTMLProps<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) => {
  const id = useId();

  return (
    <>
      <label htmlFor={`${id}_ ${title}`} className="screen_out">
        {title ? title : "BasicInput"}
      </label>
      <input
        id={`${id}_ ${title}`}
        className={`${style.inp} ${
          inpSize === "sm" ? style.sm : inpSize === "md" ? style.md : style.lg
        } ${color && color !== "" ? style[color] : style.white} ${
          border === "br_3" ? style.br_3 : border === "br_50" ? style.br_50 : ""
        }`}
        disabled={color === "disabled" ? true : false}
        value={value}
        ref={ref}
        {...props}
      />
      {partialErrorObj && <small role="alert">{partialErrorObj.message}</small>}
    </>
  );
};

export default forwardRef(Input);
