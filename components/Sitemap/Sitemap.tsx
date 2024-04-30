"use client";

import { useEffect, useState } from "react";
import style from "./Sitemap.module.scss";
import Button from "@/components/Button/Button";
import { usePathname } from "next/navigation";

interface SitemapProps {
  // TODO: 타입설정
  menuData: any[];
  btnDirection?: "center" | "left" | "right";
  sitemapDirection?: "left" | "right" | "bottom";
  session: any;
}

/**
 * @param menuData: 메뉴 데이터
 *
 * @param btnDirection?: site map button 모양의 방향 (기본: full)
 * @returns "left" | "right";
 *
 * @param sitemapDirection?: site map 열기 방향 (기본: top)
 * @returns "left" | "right" | "bottom";
 */

export default function Sitemap({
  menuData,
  btnDirection,
  sitemapDirection,
  session,
}: SitemapProps) {
  // 사이트맵 열기
  const [open, setOpen] = useState<boolean>(false);

  // 페이지 이동 시 사이트맵 닫기
  const pathNm = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathNm]);

  // 사이트맵 오픈 시 외부 스크롤 막기
  useEffect(() => {
    if (open) {
      document.body.style.cssText = `
      overflow: hidden`;
    } else {
      document.body.style.cssText = `
 overflow: auto`;
    }
  }, [open]);

  return (
    <>
      {/* btn_sitemap --------------------- */}
      <div
        className={`${style.btn_sitemap} ${
          btnDirection ? style[btnDirection] : ""
        } ${open ? style.open : ""}`}
      >
        <Button
          id={"siteMap"}
          color={"none"}
          size={"xsm"}
          onClickEvent={() => {
            setOpen(!open);
          }}
          noneHover={true}
          title={""}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Button>
      </div>

      {/* sitemap --------------------- */}
      <div
        className={`${style.sitemap} ${
          sitemapDirection ? style[sitemapDirection] : ""
        } ${open ? style.open : ""}`}
      >
        <div className="pc">asdas</div>
        <div className="mobile">mobile</div>
      </div>
    </>
  );
}
