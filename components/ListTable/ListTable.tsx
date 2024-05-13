"use client";
import CSS from "csstype";
import React, { Ref, forwardRef, useEffect, useRef, useState } from "react";
import style from "./ListTable.module.scss";

export interface ListTableHeader {
  /**
   * 실제 데이터의 키값과 매칭 되는 값
   */
  value: string;
  /**
   * 로우 값을 받아서 커스텀 할 수 있는 함수
   */
  accessFn?: Function;
  /**
   * 엑셀용 value
   */
  excelValue?: Function;
  /**
   * 엑셀에 출력할지 여부, 기본 값은 true, false 로 설정시 엑셀 다운로드에 해당 컬럼 미포함
   */
  excelYn?: boolean;
  /**
   * 타입 구분, 이 타입에 따라 각 위치에 배정됨
   */
  type?: "chip" | "bottom" | "content" | "rowId" | "picture";
  stringValue?: Function;
}

interface TableProps<T> {
  /**
   * 데이터: checkbox 사용 시, 항상 data는 rowId property를 들고 있어야 함
   */
  data: T[];
  /**
   * 테이블 헤더
   */
  headers: ListTableHeader[];
  /**
   * 테이블 형태
   */
  tableType: "list" | "card";
  /**
   * 데이터 로딩 중일 때 tbody에 데이터 불러오는 중입니다 메세지 제공
   */
  isLoading?: boolean;
  /**
   * 웹접근성 : caption
   */
  tableCaption: string;
  /**
   * 웹 접근성과 체크박스 스크린 리더를 위한 props,
   * 체크 박스 클릭 시 해당 제목을 가져옴
   * 데이터 key
   * header value 값ㄴ
   */
  itemTitle: string;
  /**
   * tr 호버 여부
   */
  trHover?: boolean;
}
/**
 * @param data (필수) 데이데
 * @param headers (필수) 테이블 헤더
 * @param tableTupe (필수) 테이블 가로 세로 방향
 * @param trHover tr hover 여부
 * @param isLoading 데이터 로딩 중일 때 tbody에 데이터 불러오는 중입니다. 표시(react query 사용시 사용하면 좋음)
 * @param tableCaption 웹접근성을 위한 테이블의 caption
 * @param itemTitle 웹 접근성과 체크박스 스크린 리더를 위한 props > 체크 박스 클릭 시 해당 props로 접근해 제목을 가져옴
 * @pcNone 모바일에서는 보이고 웹에서는 안보일 경우 안 보이는 컬럼 index로 보내줘야 함 제일 왼쪽이 1
 * @mobileNone 모바일일 경우 안 보이는 컬럼 index로 보내줘야 함 제일 왼쪽이 1
 * @param checkList 체크 리스트
 */

const ListTable = forwardRef(
  <T extends { rowId: string }>(
    {
      data,
      headers,
      tableType,
      isLoading,
      trHover,
      tableCaption,
      itemTitle,
    }: TableProps<T>,
    ref: Ref<any>
  ) => {
    // const allCheck;

    console.log("header : ", headers);
    console.log("data : ", data);

    return (
      <>
        <ul className={`${style.ul} ${style[tableType]}`}>
          {data.map((d, index) => {
            return (
              <li key={`list_${index}`}>
                {tableType == "card" &&
                headers.find((h) => h.type == "picture") ? (
                  headers.find((h) => h.type == "picture")?.accessFn ? (
                    <div className={style.picture} key={`picture_idx`}>
                      {/* @ts-ignore */}
                      {headers
                        .find((h) => h.type == "picture")
                        .accessFn(d, index)}
                    </div>
                  ) : (
                    <div className={style.picture} key={`picture_idx`}>
                      {/* @ts-ignore */}
                      {d[headers.find((h) => h.type == "picture").value]}
                    </div>
                  )
                ) : (
                  <></>
                )}

                <div className={style.li_wrap}>
                  {/* rowId 타입일 때 */}

                  {tableType == "list" &&
                  headers.find((h) => h.type == "rowId") ? (
                    headers.find((h) => h.type == "rowId")?.accessFn ? (
                      <div className={style.left} key={`rowId_idx`}>
                        {/* @ts-ignore */}
                        {headers
                          .find((h) => h.type == "rowId")
                          .accessFn(d, index)}
                      </div>
                    ) : (
                      <div className={style.left} key={`rowId_idx`}>
                        {/* @ts-ignore */}
                        {d[headers.find((h) => h.type == "rowId").value]}
                      </div>
                    )
                  ) : (
                    <></>
                  )}

                  {/* 우측 내용들 */}
                  <div className={style.right}>
                    <div className={style.chip_box}>
                      {headers
                        .filter((h) => h.type == "chip")
                        .map((chip, i) => {
                          if (chip.accessFn) {
                            console.log("chip : ", i, chip);

                            return <> {chip.accessFn(d, index)}</>;
                          }
                        })}
                    </div>

                    <div className={style.title_content_wrap}>
                      {headers.find((h) => h.type == undefined) &&
                      headers.find((h) => h.type == undefined)?.accessFn ? (
                        <>
                          {/* @ts-ignore */}
                          {headers
                            .find((h) => h.type == undefined)
                            ?.accessFn(d, index)}
                        </>
                      ) : headers.find((h) => h.type == undefined) ? (
                        <p>
                          {/* @ts-ignore */}
                          {d[headers.find((h) => h.type == undefined).value]}
                        </p>
                      ) : (
                        <></>
                      )}
                      <div className={style.content}>
                        {headers.find((h) => h.type == "content") &&
                        headers.find((h) => h.type == "content")?.accessFn ? (
                          <>
                            {/* @ts-ignore */}
                            {headers
                              .find((h) => h.type == "content")
                              ?.accessFn(d, index)}
                          </>
                        ) : headers.find((h) => h.type == "content") ? (
                          <p>
                            {/* @ts-ignore */}
                            {d[headers.find((h) => h.type == "content").value]}
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    {/* {headers.map((header, idx) => {
                      if (header.type == "chip") {
                        if (header.accessFn) {
                          return (
                            <div key={`chip ${idx}`}>
                              {header.accessFn(d, index)}
                            </div>
                          );
                        }
                      }
                      if (header.type == "content") {
                        if (header.accessFn) {
                          return (
                            <React.Fragment key={`content ${idx}`}>
                              {header.accessFn(d, index)}
                            </React.Fragment>
                          );
                        }
                      }
                    })} */}
                    {/* <div className={style.top_chip}></div>
                    <div className="card-body">
                      <a href="#" className="c-text">
                        <p className="c-tit">
                          <span className="span">
                            저소득층 기저귀·조제분유 지원
                          </span>
                        </p>
                        <p className="c-txt">
                          다문화가정의 자녀가 건강한 사회구성원, 글로벌 인재로
                          성장할 수 있도록 체계적인 언어발달을 돕습니다.
                        </p>
                        <p className="c-date">
                          <strong className="key">신청 기간</strong>
                          <span className="value">2023.11.01-2024.04.30</span>
                        </p>
                      </a>
                      <div className="c-btn">
                        <a href="#" className="btn md primary">
                          신청하기
                        </a>
                      </div>
                    </div>
                    <div className="card-btm">
                      <span className="tag">청소년</span>
                      <span className="tag">영유아</span>
                    </div> */}

                    <ul className={style.bottom_box}>
                      {headers
                        .filter((h) => h.type == "bottom")
                        .map((bottom, i) => {
                          if (bottom.accessFn) {
                            return bottom
                              .accessFn(d, index)
                              .map((string: any) => {
                                return (
                                  <li key={string.value + string.key}>
                                    <span>{string.key}</span>
                                    <span>{string.value}</span>
                                  </li>
                                );
                              });
                          } else {
                            return (
                              <p key={`bottom_${i}_${bottom.value}`}>
                                {
                                  /* @ts-ignore */
                                  d[
                                    /* @ts-ignore */
                                    headers.find((h) => h.type == "bottom")
                                      .value
                                  ]
                                }
                              </p>
                            );
                          }
                        })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
);

ListTable.displayName = "ListTable";
export default ListTable as <T extends {}>(
  props: TableProps<T> & {
    ref: Ref<HTMLTableElement | HTMLButtonElement | HTMLButtonElement[]>;
  }
) => JSX.Element;
