"use client";

import { useEffect, useState } from "react";
import style from "./Sitemap.module.scss";
import Button from "@/components/Button/Button";
import { usePathname, useRouter } from "next/navigation";
import AutoAlert from "../AutoAlert/AutoAlert";
import {
  FiChevronDown,
  FiChevronUp,
  FiEdit,
  FiExternalLink,
  FiHome,
  FiPower,
  FiUser,
} from "react-icons/fi";
import Link from "next/link";
import Input from "../Input/Input";
import { useAutoAlert } from "@/hooks/alert/useAutoAlert";
import { menuByDepth } from "@/utils/utils";

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
  const { setIsChange, setStatus, setText } = useAutoAlert();
  const router = useRouter();

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

  //
  const { depth1Menu, depth2Menu, depth3Menu } = menuByDepth(menuData);

  // pc

  // mobile
  const [depth1Seq, setDepth1Seq] = useState<number>(0);
  const [depth2Seq, setDepth2Seq] = useState<number>(0);
  useEffect(() => {
    setDepth2Seq(0);
  }, [depth1Seq]);

  const [searchKeyWord, setSearchKeyWord] = useState<string>("");

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
        {/* 피씨 */}
        <div className={`pc ${style.all_menu_pc}`}>
          <div className={style.all_menu_left}>
            <h3>WISE LINC3.0 사업단</h3>
            <p>
              (51767)경상남도 창원시 마산합포구 경남대학로 7 (월영동) 경남대학교
              산학협력관 5층 WISE LINC3.0 사업단
            </p>
            <p>
              <span>Tel.</span>055-249-2236, 6362
            </p>
            <p>
              <span>Fax.</span>0505-999-2133
            </p>
          </div>

          <div className={style.all_menu_right}>
            <ul className={style.depth_1}>
              {depth1Menu.map((depth1) => {
                return (
                  <li key={depth1.menuSeq}>
                    <p>{depth1.menuNm}</p>
                    <ul className={style.depth_2}>
                      {depth2Menu.map((depth2) => {
                        if (depth2.upMenuSeq === depth1.menuSeq) {
                          return (
                            <li key={depth2.menuSeq}>
                              {depth2.hasChild === "Y" ? (
                                <>
                                  <p>{depth2.menuNm}</p>
                                  <ul className={`${style.depth_3}`}>
                                    {depth3Menu.map((depth3) => {
                                      if (depth3.upMenuSeq === depth2.menuSeq) {
                                        return (
                                          <li key={depth3.menuSeq}>
                                            <a href={depth3.menuUrl}>
                                              {depth3.menuNm}
                                            </a>
                                          </li>
                                        );
                                      }
                                    })}
                                  </ul>
                                </>
                              ) : (
                                <a href={depth2.menuUrl}>{depth2.menuNm}</a>
                              )}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* 모바일 */}
        <div className={`mobile ${style.all_menu_mobile}`}>
          <div className={style.top_mobile}>
            <a href="/" target="_blank">
              경남대학교
              <FiExternalLink
                role={"img"}
                aria-label={"링크 아이콘"}
                size={14}
              />
            </a>

            {/* {session !== null ? (
              <h2>
                안녕하세요, <span>{session.user.userNm || ""}</span>님
              </h2>
            ) : (
              <></>
            )} */}

            <div className={style.simple_menu}>
              <Link href="/">
                <FiHome role={"img"} aria-label={"홈 아이콘"} />
                홈으로
              </Link>
              {session !== null ? (
                <>
                  <Link
                    href="/lg/login"
                    onClick={(e) => {
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
                    }}
                  >
                    <FiPower role={"img"} aria-label={"로그아웃 아이콘"} />
                    로그아웃
                  </Link>
                  <Link href="/my/member/comlmodi">
                    <FiUser role={"img"} aria-label={"마이페이지 아이콘"} />
                    마이페이지
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/lg/login">
                    <FiPower role={"img"} aria-label={"로그인 아이콘"} />
                    로그인
                  </Link>
                  <Link href="/lg/signup">
                    <FiEdit role={"img"} aria-label={"회원가입 아이콘"} />
                    회원가입
                  </Link>
                </>
              )}
            </div>

            <div className={style.search_box}>
              {/* {siteMapOpen && <AutoAlert />} */}
              <Input
                id={"searchKeyWord_mb"}
                value={searchKeyWord}
                onChange={(e) => {
                  setSearchKeyWord(e.currentTarget.value.toString());
                }}
                inpSize="lg"
                title={""} // searchBtnClick={() => {
                //   if (!searchKeyWord.length) {
                //     setText("검색어를 입력해주세요.");
                //     setStatus("warning");
                //     setIsChange(true);
                //     return;
                //   }
                //   setSiteMapOpen(false);
                //   router.push(`/searchtotal?searchWord=${searchKeyWord}`);
                // }}
              />
            </div>
          </div>

          <ul
            className={`${style.depth_1} ${
              session !== null ? style.login : ""
            }`}
          >
            {depth1Menu.map((depth1) => {
              return (
                <li key={depth1.menuSeq}>
                  <button
                    type="button"
                    onClick={() => {
                      if (depth1Seq === depth1.menuSeq) {
                        setDepth1Seq(0);
                      } else {
                        setDepth1Seq(depth1.menuSeq);
                      }
                    }}
                  >
                    {depth1.menuNm}
                    {depth1.menuSeq === depth1Seq ? (
                      <FiChevronUp
                        role={"img"}
                        aria-label={"위 화살표 아이콘"}
                      />
                    ) : (
                      <FiChevronDown
                        role={"img"}
                        aria-label={"아래 화살표 아이콘"}
                      />
                    )}
                  </button>
                  <ul
                    className={`${style.depth_2} ${
                      depth1Seq === depth1.menuSeq ? style.open : ""
                    }`}
                  >
                    {depth2Menu.map((depth2) => {
                      if (depth2.upMenuSeq === depth1Seq) {
                        return (
                          <li key={depth2.menuSeq}>
                            {depth2.hasChild === "Y" ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (depth2Seq === depth2.menuSeq) {
                                      setDepth2Seq(0);
                                    } else {
                                      //  setDepth1Seq(depth1.menuSeq);
                                      setDepth2Seq(depth2.menuSeq);
                                    }
                                  }}
                                >
                                  {depth2.menuNm}
                                  {depth2Seq === depth2.menuSeq ? (
                                    <FiChevronUp
                                      role={"img"}
                                      aria-label={"위 화살표 아이콘"}
                                    />
                                  ) : (
                                    <FiChevronDown
                                      role={"img"}
                                      aria-label={"아래 화살표 아이콘"}
                                    />
                                  )}
                                </button>
                                <ul
                                  className={`${style.depth_3} ${
                                    depth2Seq === depth2.menuSeq
                                      ? style.open
                                      : ""
                                  }`}
                                >
                                  {depth3Menu.map((depth3) => {
                                    if (depth3.upMenuSeq === depth2Seq) {
                                      return (
                                        <li key={depth3.menuSeq}>
                                          <a href={depth3.menuUrl}>
                                            {depth3.menuNm}
                                          </a>
                                        </li>
                                      );
                                    }
                                  })}
                                </ul>
                              </>
                            ) : (
                              <a href={depth2.menuUrl}>{depth2.menuNm}</a>
                            )}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
