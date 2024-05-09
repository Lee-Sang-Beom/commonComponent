"use client";
import { useEffect, useState } from "react";
import styles from "./Paging.module.scss";
import { FiPlus } from "react-icons/fi";
import {
  BiChevronLeft,
  BiChevronRight,
  BiFirstPage,
  BiLastPage,
} from "react-icons/bi";

interface PagingProps {
  onClickEvent: (page: number) => void;
  onMoClickEvent?: (size: number) => void;
  defaultSize?: number;
  pagingData: {
    first: boolean;
    last: boolean;
    size: number;
    totalPages: number;
    totalElements: number;
    number: number;
  };
  ohterType?: boolean;
}

/**
 * 페이징 컴포넌트
 * @param onClickEvent 화살표 또는 숫자 버튼을 클릭했을 때의 동작 (페이지 이동 동작함수)
 * @param onMoClickEvent 모바일 화살표 또는 숫자 버튼을 클릭했을 때의 동작 (페이지 이동 동작함수), router.push 괄호 안에 scroll 옵션 false로 줘야 모바일 클릭 시 스크롤이 이동되지 않습니다.
 * ex) router.push(`주소`, {scroll : false})
 * @param defaultSize 모바일 기본 사이즈 (기본 사이즈가 10이 아니면!)
 * @param pagingData :  페이징 데이터, DTO는 공통 pagingType
 * @param otherType : 없거나 false일 경우 기본 (현재 페이지가 가운데 고정되는 타입), true이면 현재 페이지가 가운데에 고정되지 않는 타입
 */
export default function PagingComponent({
  onClickEvent,
  onMoClickEvent,
  defaultSize,
  pagingData,
  ohterType,
}: PagingProps) {
  const [curNum, setCurNum] = useState(1);

  useEffect(() => {
    setCurNum(pagingData.number + 1);
  }, [pagingData]);

  const goFirst = () => {
    setCurNum(1);
    onClickEvent(1);
  };

  const goPrev = () => {
    if (curNum === 1) return;
    setCurNum(curNum - 1);
    onClickEvent(curNum - 1);
  };

  const goNext = () => {
    if (curNum === pagingData.totalPages) return;
    setCurNum(curNum + 1);
    onClickEvent(curNum + 1);
  };

  const goEnd = () => {
    setCurNum(pagingData.totalPages);
    onClickEvent(pagingData.totalPages);
  };

  const goAdd = () => {
    if (curNum === pagingData.totalPages) return;
    if (onMoClickEvent && defaultSize) {
      onMoClickEvent(pagingData.size + defaultSize);
    } else if (onMoClickEvent) {
      onMoClickEvent(pagingData.size + 10);
    }
  };

  const renderNumber = () => {
    let renderButtons = [];

    if (pagingData) {
      // 처음 현재 페이지 -1  - ((현재 페이지 -1) % (페이지하단 = 10)) + 1
      // 마지막 = 현재 페이지 -1  - ((현재 페이지 -1) % (페이지하단 = 10)) + 10

      let pageFirst;
      let pageLast;
      if (curNum === 1 || curNum === 2) {
        pageFirst = curNum - 1 - ((curNum - 1) % 5) + 1;
        pageLast = curNum - 1 - ((curNum - 1) % 5) + 5;
      } else if (
        curNum === pagingData.totalPages ||
        curNum === pagingData.totalPages - 1
      ) {
        if (pagingData.totalPages < 5) {
          pageFirst = curNum - 1 - ((curNum - 1) % 5) + 1;
          pageLast = curNum - 1 - ((curNum - 1) % 5) + 5;
        } else {
          if (curNum === pagingData.totalPages) {
            pageFirst = curNum - 4;
            pageLast = curNum;
          } else {
            pageFirst = curNum - 3;
            pageLast = curNum + 1;
          }
        }
      } else {
        pageFirst = curNum - 2;
        pageLast = curNum + 2;
      }
      if (pagingData && pageLast > pagingData.totalPages)
        pageLast = pagingData.totalPages;
      if (typeof curNum != "number") setCurNum(1);
      if (pagingData && typeof pagingData.totalPages != "number") {
        pagingData.totalPages = 1;
      }

      if (isNaN(pageFirst) || isNaN(pageLast)) {
        pageFirst = 1;
        pageLast = 1;
        setCurNum(1);
      }
      for (let i = pageFirst; i <= pageLast; i++) {
        const curNumber = i;
        renderButtons.push(
          <button
            key={i}
            className={
              curNum === curNumber
                ? `${styles.on} ${styles.number_button}`
                : `${styles.number_button}`
            }
            onClick={() => {
              setCurNum(curNumber);
              onClickEvent(curNumber);
            }}
            title="해당 페이지로 이동"
          >
            {curNumber}
          </button>
        );
      }

      return renderButtons;
    }
  };
  const renderNumber2 = () => {
    let renderButtons = [];

    // 처음 현재 페이지 -1  - ((현재 페이지 -1) % (페이지하단 = 10)) + 1
    // 마지막 = 현재 페이지 -1  - ((현재 페이지 -1) % (페이지하단 = 10)) + 10

    let pageFrist = curNum - 1 - ((curNum - 1) % 5) + 1;
    let pageLast = curNum - 1 - ((curNum - 1) % 5) + 5;

    //if (pageLast > data.totalPages) pageLast = data.totalPages;
    if (pagingData && pageLast > pagingData.totalPages)
      pageLast = pagingData.totalPages;

    if (typeof curNum != "number") setCurNum(1);
    if (pagingData && typeof pagingData.totalPages != "number") {
      pagingData.totalPages = 1;
    }

    // if(data.size==5) {
    //   setCurNum(1);
    // }

    if (isNaN(pageFrist) || isNaN(pageLast)) {
      pageFrist = 1;
      pageLast = 1;
      setCurNum(1);
    }
    for (let i = pageFrist; i <= pageLast; i++) {
      const curNumber = i;
      renderButtons.push(
        <button
          key={i}
          className={
            curNum === curNumber
              ? `${styles.on} ${styles.number_button}`
              : `${styles.number_button}`
          }
          onClick={() => {
            setCurNum(curNumber);
            onClickEvent(curNumber);
          }}
          title="해당 페이지로 이동"
        >
          {curNumber}
        </button>
      );
    }

    return renderButtons;
  };
  return (
    <>
      <div className={styles.pg}>
        <button
          type="button"
          className={`${styles.arrow_button} ${
            pagingData.totalPages === 0 || pagingData.totalPages === null
              ? styles.noData
              : pagingData.first === true
              ? styles.noMorePage
              : ""
          }`}
          onClick={() => {
            goFirst();
          }}
          title="처음 페이지로 이동"
        >
          <BiFirstPage role="img" aria-label="처음 페이지로 이동 아이콘" />
        </button>
        <button
          type="button"
          className={`${styles.arrow_button} ${
            pagingData.totalPages === 0 || pagingData.totalPages === null
              ? styles.noData
              : pagingData.first === true
              ? styles.noMorePage
              : ""
          }`}
          onClick={() => {
            goPrev();
          }}
          title="이전 페이지로 이동"
        >
          <BiChevronLeft role="img" aria-label="이전 페이지로 이동 아이콘" />
        </button>
        {ohterType ? renderNumber2() : renderNumber()}
        <button
          type="button"
          className={`${styles.arrow_button} ${
            pagingData.totalPages === 0 || pagingData.totalPages === null
              ? styles.noData
              : pagingData.last === true
              ? styles.noMorePage
              : ""
          }`}
          onClick={() => {
            goNext();
          }}
          title="다음 페이지로 이동"
        >
          <BiChevronRight role="img" aria-label="다음 페이지로 이동 아이콘" />
        </button>
        <button
          type="button"
          className={`${styles.arrow_button} ${
            pagingData.totalPages === 0 || pagingData.totalPages === null
              ? styles.noData
              : pagingData.last === true
              ? styles.noMorePage
              : ""
          }`}
          onClick={() => {
            goEnd();
          }}
          title="마지막 페이지로 이동"
        >
          <BiLastPage role="img" aria-label="마지막 페이지로 이동 아이콘" />
        </button>
      </div>
      <div className={styles.m_pg}>
        <button onClick={goAdd}>
          <FiPlus
            style={{ marginLeft: "5px" }}
            role="img"
            aria-label="더보기 아이콘"
          />
          {`더보기(${
            pagingData.size > pagingData.totalElements
              ? pagingData.totalElements
              : pagingData.size
          }/${pagingData.totalElements})`}
        </button>
      </div>
    </>
  );
}
