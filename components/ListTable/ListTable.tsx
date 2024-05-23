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
}
/**
 * @param data (필수) 데이데
 * @param headers (필수) 테이블 헤더
 * @param tableType (필수) 테이블 타입 (리스트 / 카드형)
 */

// 헤더의 type 설명
/**
 * @undefined : 헤더의 type에 아무값도 넣지 않으면 title로 들어가게 됩니다.
 * @chip : 바깥에서 칩을 만들어 넣어줘야 합니다.
 * @bottom : 하단에 나열될 값으로, 배열 형태로 넣어주면 됩니다. 앞의 값을 name, 뒤에 들어가는 값을 value 로 키 이름을 지정해줘야 합니다.
 * @rowId : 이전에 쓰던 rowId와 동일합니다.
 * @content : 내용부분에 들어가는 내용입니다.
 * @picture : cart 타입일 때만 컴포넌트에 나타나며, 갤러리의 사진
 * .
 *
 */

const ListTable = forwardRef(
  <T extends { rowId: string }>(
    { data, headers, tableType }: TableProps<T>,
    ref: Ref<any>
  ) => {
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

                    <ul className={style.bottom_box}>
                      {headers
                        .filter((h) => h.type == "bottom")
                        .map((bottom, i) => {
                          if (bottom.accessFn) {
                            return bottom
                              .accessFn(d, index)
                              .map((string: any) => {
                                return (
                                  <li key={string.value + string.name}>
                                    <span>{string.name}</span>
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
