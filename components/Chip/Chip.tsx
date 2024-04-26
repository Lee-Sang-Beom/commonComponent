"use client";

import React, { Ref, forwardRef, useEffect, useId, useState } from "react";
import style from "./Chip.module.scss";

export interface ChipType {
  name: string;
  value: string | number;
  group: string;
}
interface ChipProps {
  chipData: ChipType;
  chipClick?: (chipData: ChipType) => void;
  chipSize?: "xsm" | "sm" | "lg" | "xlg";
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  title: string;
}

/**
 *
 * @param chipData: 칩 내용
 * @return {name: string; value: string | number; group: string;}
 *
 * @param chipClick?: 칩 클릭
 * @return "xsm" | "sm" | "lg" | "xlg";
 *
 * @param chipSize?: 칩 크기  (기본 md)
 * @return "xsm" | "sm" | "lg" | "xlg";
 *
 * @param color?: 칩 색상 (기본 white)
 * @returns string (black, blackBorder, mainColor, mainColorBorder, disabled, none)
 *
 * @param border?: 보더 사이즈 (기본 0)
 * @return "br_square_round_1" | "br_square_round_2" | "br_round";
 *
 * @param title: input title로, 한 페이지 내에서 겹치지 않는 input 대상명을 정확히 보내주어야 함
 * @returns string
 */

export default function Chip({
  chipData,
  chipClick,
  chipSize,
  color,
  title,
  border,
  ...props
}: ChipProps & React.HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className={`${style.chip} ${
        chipSize === "xsm"
          ? style.xsm
          : chipSize === "sm"
          ? style.sm
          : chipSize === "lg"
          ? style.lg
          : chipSize === "xlg"
          ? style.xlg
          : style.md
      } ${color && color !== "" ? style[color] : style.white} ${
        border ? style[border] : ""
      }`}
      onClick={() => {
        if (chipClick) {
          chipClick(chipData);
        }
      }}
      {...props}
    >
      {chipData.name}
    </span>
  );
}
