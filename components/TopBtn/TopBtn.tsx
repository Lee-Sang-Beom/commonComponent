"use client";

import style from "./TopBtn.module.scss";
import Button from "../Button/Button";

interface TopBtnProps {
  position?: "topLeft" | "topRgiht" | "bottomLeft";
  size?: "xsm" | "sm" | "lg" | "xlg";
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  children: React.ReactNode | React.ReactNode[];
}

/**
 * @param position?: 탑버튼 위치 (기본 bottomRight)
 * @return  "topLeft" | "topRgiht" | "bottomLeft";
 *
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
 */

export default function TopBtn({
  size,
  color,
  border,
  children,
  position,
}: TopBtnProps) {
  return (
    <div
      className={`${style.btn_top} ${
        position ? style[position] : style.bottomRight
      }`}
    >
      <Button
        id={"topBtn"}
        onClickEvent={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        size={size ? size : undefined}
        color={color ? color : undefined}
        border={border ? border : undefined}
        btnStyle={{ aspectRatio: "1 / 1" }}
        title={"위로 가기"}
      >
        {children}
      </Button>
    </div>
  );
}
