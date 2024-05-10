import style from "./Stiemap.module.scss";
import Sitemap from "@/components/Sitemap/Sitemap";

interface SitemapProps {
  btnDirection?: "left" | "right";
}

/**
 * @param btnDirection?: site map button 모양의 방향 (기본: center)
 * @returns "left" | "right";
 */

export default function Page() {
  return (
    <div className={style.box}>
      <h3>사이트 맵</h3>
      <div className={style.inner}>
        <Sitemap menuData={[]} session={null} />
        <Sitemap
          menuData={[]}
          btnDirection="left"
          sitemapDirection={"left"}
          session={null}
        />
        <Sitemap
          menuData={[]}
          btnDirection="right"
          sitemapDirection={"right"}
          session={null}
        />
        <Sitemap
          menuData={[]}
          btnDirection="center"
          sitemapDirection={"bottom"}
          session={null}
        />
      </div>
    </div>
  );
}
