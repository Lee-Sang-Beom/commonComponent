"use client";

import { usePathname, useRouter } from "next/navigation";
import style from "./Tab.module.scss";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

interface TabProps {
  /**
   * 페이지 진입 시 탭 버튼 중 액티브 되어야되는 인덱스 번호
   * 기본 0
   */
  activeIdxNu?: number;
  tabTit: string[];
  titClick?: (tit: string) => void;
  children?: React.ReactNode[];
  size?: "xsm" | "sm" | "lg" | "xlg";
  /**
   * 액티브 버튼 색상 (기본 white)
   * string (black, mainColor, mainColorBorder, none)
   */
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  /**
   * 링크 탭 옵션
   */
  urlArr?: string[];
}

export default function Tab({
  activeIdxNu,
  tabTit,
  titClick,
  children,
  urlArr,
  size,
  color,
  border,
}: TabProps) {
  //
  const router = useRouter();

  // 현재 탭 인덱스
  const [activeIdx, setActiveIdx] = useState(activeIdxNu ? activeIdxNu : 0);

  useEffect(() => {
    setActiveIdx(activeIdxNu ? activeIdxNu : 0);
  }, [activeIdxNu]);

  // 링크 탭
  const pathname = usePathname();

  return (
    <>
      <ul className={style.tab_btn_box}>
        {tabTit.map((tit: string, index: number) => {
          return (
            <li
              key={tit}
              className={`${style.tab_btn} ${
                (!urlArr && activeIdx === index) ||
                (urlArr && pathname === urlArr[index])
                  ? style.active
                  : ""
              } ${color && color !== "" ? style[color] : style.white} ${
                border ? style[border] : ""
              } `}
            >
              <Button
                id={`${tit}_${index}`}
                size={size ? size : undefined}
                color={color ? color : undefined}
                border={border ? border : undefined}
                onClickEvent={() => {
                  if (titClick) {
                    titClick(tit);
                  }

                  if (urlArr) {
                    router.replace(urlArr[index]);
                  } else {
                    setActiveIdx(index);
                  }
                }}
              >
                {tit}
              </Button>
            </li>
          );
        })}
      </ul>
      {children !== undefined && children !== null ? (
        <div className={style.tab_cont}>{children[activeIdx]}</div>
      ) : (
        <></>
      )}
    </>
  );
}
