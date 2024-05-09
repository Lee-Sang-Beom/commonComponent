"use client";

import React, { Ref, forwardRef, useEffect, useId, useState } from "react";
import style from "./Radiobox.module.scss";
import { FieldValues } from "react-hook-form";
import { InputErrorMsgType } from "@/types/common/commonType";

export interface Radioboxtype {
  name: string;
  value: string | number;
  id: string;
  disabled?: boolean;
  checked?: boolean;
}

interface RadioboxProps {
  items: Radioboxtype[];
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  title: string;
  effectivenessMsg?: InputErrorMsgType;
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
 *
 * @param partialErrorObj: 제어형 컴포넌트의 유효성 검증에 사용 -> (state and setState / none use react-hook-form)
 * @returns FieldValues
 *
 * @param effectivenessMsg: 비제어형 컴포넌트의 유효성 검증에 사용 (react-hook-form)
 * @returns InputErrorMsgType
 */

const Radiobox = (
  {
    items,
    color,
    title,
    border,
    effectivenessMsg,
    partialErrorObj,
    ...props
  }: RadioboxProps & React.HTMLProps<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) => {
  const id = useId();

  return (
    <div className={style.radio_wrap}>
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
                  color && color !== "" ? style[color] : style.white
                } ${border ? style[border] : ""}${
                  partialErrorObj && style.red
                }`}
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
      {/* react-hook-form error 객체 (비제어형 컴포넌트)*/}
      {partialErrorObj && (
        <small role="alert" className={style.txt_error}>
          {partialErrorObj.message}
        </small>
      )}
      {/* 제어형 컴포넌트*/}
      {effectivenessMsg && (
        <>
          {!effectivenessMsg.isSuccess &&
          effectivenessMsg.msg &&
          effectivenessMsg.msg.length ? (
            <p className={"txt_error"}>{effectivenessMsg.msg}</p>
          ) : (
            <>
              {effectivenessMsg.isSuccess &&
              effectivenessMsg.msg &&
              effectivenessMsg.msg.length ? (
                <p className={"txt_success"}>{effectivenessMsg.msg}</p>
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

export default forwardRef(Radiobox);
