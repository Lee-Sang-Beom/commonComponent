"use client";

import React, { Ref, forwardRef, useEffect, useId, useState } from "react";
import style from "./Input.module.scss";
import { FieldErrors, FieldValues } from "react-hook-form";
import { InputErrorMsgType } from "@/types/common/commonType";
import clsx from "clsx";

interface InputProps {
  inpSize?: "xsm" | "sm" | "lg" | "xlg";
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  title: string;
  value?: string | number;

  partialErrorObj?: FieldValues;
  effectivenessMsg?: InputErrorMsgType;
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
 *
 * @param partialErrorObj: 제어형 컴포넌트의 유효성 검증에 사용 -> (state and setState / none use react-hook-form)
 * @returns FieldValues
 *
 * @param effectivenessMsg: 비제어형 컴포넌트의 유효성 검증에 사용 (react-hook-form)
 * @returns InputErrorMsgType
 *
 */

const Input = (
  {
    inpSize,
    color,
    title,
    border,
    value,
    partialErrorObj,
    effectivenessMsg,
    ...props
  }: InputProps & React.HTMLProps<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) => {
  const id = useId();

  const baseInputClassName = clsx({
    [style.inp]: true,
    [style.xsm]: inpSize === "xsm",
    [style.sm]: inpSize === "sm",
    [style.lg]: inpSize === "lg",
    [style.xlg]: inpSize === "xlg",
    [style.md]:
      inpSize !== "xsm" &&
      inpSize !== "sm" &&
      inpSize !== "lg" &&
      inpSize !== "xlg",
    [style.red]:
      partialErrorObj || (effectivenessMsg && !effectivenessMsg.isSuccess),
  });

  return (
    <div className={style.inp_box}>
      <label htmlFor={`${id}_ ${title}`} className="screen_out">
        {title}
      </label>
      <input
        type="text"
        id={`${id}_${title}`}
        title={title}
        className={clsx(
          baseInputClassName,
          color && color !== "" ? style[color] : style.white,
          border ? style[border] : ""
        )}
        disabled={color === "disabled" ? true : false}
        value={value}
        ref={ref}
        {...props}
      />
      {partialErrorObj && (
        <small role="alert" className={style.txt_error}>
          {partialErrorObj.message}
        </small>
      )}
      {effectivenessMsg && (
        <>
          {!effectivenessMsg.isSuccess &&
          effectivenessMsg.msg &&
          effectivenessMsg.msg.length ? (
            <p className={style.txt_error}>{effectivenessMsg.msg}</p>
          ) : (
            <>
              {effectivenessMsg.isSuccess &&
              effectivenessMsg.msg &&
              effectivenessMsg.msg.length ? (
                <p className={style.txt_success}>{effectivenessMsg.msg}</p>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default forwardRef(Input);
