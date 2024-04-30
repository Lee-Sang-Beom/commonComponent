"use client";

import { usePathname, useRouter } from "next/navigation";
import style from "./Header1.module.scss";
import { useEffect, useState } from "react";
import { FiExternalLink, FiSearch } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { AuthMenuTreeResponse } from "@/types/common/MenuType";
import { headerState } from "@/recoil/headerState";
import Sitemap from "../../Sitemap/Sitemap";
import Search from "./Search/Search";
// import { signOut } from "next-auth/react";
// import { Session } from "next-auth";

interface HeaderClientProps {
  /**
   * @param session: 로그인 세션
   */
  session: any | null;
  /**
   * @param menuData: 메뉴 데이터
   */
  menuData: AuthMenuTreeResponse[];
}

export default function HeaderClient({ session, menuData }: HeaderClientProps) {
  // 스크롤 시 fixed
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      if (mounted) {
        if (window.scrollY >= 130) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }
    });
    return () => {
      setScroll(false);
      mounted = false;
    };
  }, []);

  // 메뉴
  // 1차 메뉴
  const level1Menu = menuData
    .filter(
      (filterItem: AuthMenuTreeResponse) =>
        filterItem.mainDisplayYn === "Y" &&
        filterItem.level === 1 &&
        filterItem.menuTypeEnu.type === "PORTAL"
    )
    .sort(
      (a: AuthMenuTreeResponse, b: AuthMenuTreeResponse) => a.sortNo - b.sortNo
    );

  // ------------------------------------------------------------------------------------
  // 메인 서버 헤더 스타일 분리
  const pathName = usePathname();

  const router = useRouter();

  // 메인 스크롤 시
  const [remove, setRemove] = useRecoilState<boolean | "">(headerState);

  // 헤더 호버 state
  const [menuHover, setMenuHover] = useState<boolean>(false);

  // 2차 메뉴 클릭 시 3치 메뉴 오픈
  const [depth3Open, setDepth3Open] = useState<boolean>(false);

  // 메뉴 리브 할 시 3차 메뉴 닫기
  useEffect(() => {
    if (!menuHover) {
      setDepth3Open(false);
    }
  }, [menuHover]);

  // 통합검색 버튼 클릭
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // 통합검색 오픈 시 외부 스크롤 막기
  useEffect(() => {
    if (searchOpen) {
      document.body.style.cssText = `
 overflow: hidden`;
      // return () => {
      //   const scrollY = document.body.style.top;
      //   document.body.style.cssText = "";
      //   window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      // };
    } else {
      document.body.style.cssText = `
 overflow: auto`;
    }
  }, [searchOpen]);
  const [baseUrl, setBaseUrl] = useState<string>("");
  useEffect(() => {
    if (window) {
      if (window.location && window.location.href) {
        if (window.location.href.includes("localhost")) {
          setBaseUrl("http://localhost:3000/lg/login");
        } else {
          setBaseUrl(
            process.env.NEXT_PUBLIC_HOST
              ? process.env.NEXT_PUBLIC_HOST + "/lg/login"
              : "http://http://wisdom.lksmart.co.kr/lg/login"
          );
        }
      }
    } else {
      setBaseUrl(
        process.env.NEXT_PUBLIC_HOST
          ? process.env.NEXT_PUBLIC_HOST + "/lg/login"
          : "http://wisdom.lksmart.co.kr/lg/login"
      );
    }
  }, []);

  return (
    <header
      id={style.header}
      className={`${
        menuHover || pathName !== "/" || (pathName === "/" && scroll)
          ? // || remove
            style.menu_hover
          : ""
      } ${scroll ? style.scroll_fixed : ""}`}
      // ${pathName === "/" ? style.fixed : ""}
      // ${pathName === "/" && remove === false ? style.remove : ""}
    >
      <div className={style.t_link}>
        <ul>
          <li>
            <a
              href="https://www.kyungnam.ac.kr/sites/ko/index.do"
              target="_blank"
            >
              경남대학교
              <FiExternalLink
                role={"img"}
                aria-label={"링크 아이콘"}
                size={16}
              />
            </a>
          </li>

          {/* {session !== null &&
          session.user.authList.find(
            (auth) =>
              auth.authrtCd === "SUPER_ADMIN" ||
              auth.authrtCd === "NORMAL_ADMIN"
          ) ? (
            <li>
              <a href="/portalCms">관리자</a>
            </li>
          ) : session !== null &&
            session.user.authList.find((a) => a.authrtCd === "SANHAK_ADMIN") ? (
            <li>
              <a href="/portalCms/cm/question">관리자</a>
            </li>
          ) : (
            <></>
          )} */}
          <li>
            <button
              onClick={(e) => {
                if (session) {
                  e.preventDefault();
                  fetch(`/api/member/logout`, {
                    method: "POST",
                    body: JSON.stringify({
                      seq: session?.user.userSeq,
                      userId: session?.user.userId,
                    }),
                  })
                    .then((res) => res.json())
                    .then(() => {
                      // signOut({
                      //   callbackUrl: baseUrl,
                      //   redirect: true,
                      // }).then(() => {
                      //   router.refresh();
                      // });
                    });
                } else {
                  router.push("/lg/login");
                }
              }}
            >
              {session === null ? "로그인" : "로그아웃"}
            </button>
          </li>
        </ul>
      </div>
      <div className={`${style.t_menu}`}>
        <a href={"/"} className={style.t_logo_l}></a>
        <nav
          id={style.gnb}
          onMouseOver={() => {
            setMenuHover(true);
          }}
          onMouseLeave={() => {
            setMenuHover(false);
          }}
        >
          <ul className={style.depth_1}>
            {level1Menu.map((menu1: AuthMenuTreeResponse) => {
              return (
                <li key={menu1.menuSeq}>
                  <a
                    href={
                      menuData
                        .filter((menu2) => menu2.upMenuSeq === menu1.menuSeq)
                        .find((sort) => sort.sortNo === 1)?.hasChild === "N"
                        ? menuData
                            .filter(
                              (menu2) => menu2.upMenuSeq === menu1.menuSeq
                            )
                            .find((sort) => sort.sortNo === 1)?.menuUrl
                        : menuData
                            .filter(
                              (menu3) =>
                                menu3.menuUrl.includes(menu1.menuUrl) &&
                                menu3.level === 3
                            )
                            .find((sort) => sort.sortNo === 1)?.menuUrl
                    }
                  >
                    {menu1.menuNm}
                  </a>

                  <ul className={style.depth_2}>
                    {menuData
                      .filter(
                        (filterItem: AuthMenuTreeResponse) =>
                          filterItem.mainDisplayYn === "Y" &&
                          filterItem.upMenuSeq === menu1.menuSeq
                      )
                      .sort(
                        (a: AuthMenuTreeResponse, b: AuthMenuTreeResponse) =>
                          a.sortNo - b.sortNo
                      )
                      .map((menu2: AuthMenuTreeResponse) => {
                        let hasChildMenuData: AuthMenuTreeResponse[] = [];

                        if (menu2.hasChild !== "N") {
                          const filtedData = menuData.filter(
                            (menu3) => menu3.upMenuSeq === menu2.menuSeq
                          );
                          hasChildMenuData = filtedData.sort(
                            (a, b) => a.sortNo - b.sortNo
                          );
                        }

                        return (
                          <li key={menu2.menuSeq}>
                            <a
                              href={
                                menu2.hasChild === "N"
                                  ? menu2.menuUrl
                                  : hasChildMenuData[0]?.menuUrl
                              }
                            >
                              {menu2.menuNm}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={style.t_menu_r}>
          <button
            type="button"
            onClick={() => {
              setSearchOpen(!searchOpen);
            }}
          >
            <FiSearch role={"img"} aria-label={"검색 아이콘"} />
          </button>
          <Sitemap menuData={menuData} session={session} />
        </div>
        <Search stste={searchOpen} setState={setSearchOpen} />
      </div>
    </header>
  );
}
