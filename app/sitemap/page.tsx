"use client";

import style from "./Stiemap.module.scss";
import Sitemap from "@/components/Sitemap/Sitemap";

interface SitemapProps {
  btnDirection?: "left" | "right";
}

/**
 * @param btnDirection?: site map button 모양의 방향 (기본: center)
 * @returns "left" | "right";
 */

export default function SitemapPage({ btnDirection }: SitemapProps) {
  return (
    <div className={style.box}>
      <h3>사이트 맵</h3>
      <div className={style.inner}>
        <Sitemap menuData={[]} />
        <Sitemap menuData={[]} btnDirection="left" sitemapDirection={"left"} />
        <Sitemap
          menuData={[]}
          btnDirection="right"
          sitemapDirection={"right"}
        />
        <Sitemap
          menuData={[]}
          btnDirection="center"
          sitemapDirection={"bottom"}
        />
      </div>
    </div>
  );
}
