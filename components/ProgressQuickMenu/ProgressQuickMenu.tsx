"use client";

import { MouseEvent, Ref, forwardRef, useEffect, useState } from "react";
import styles from "./ProgressQuickMenu.module.scss";
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";
import { HiArrowNarrowUp } from "react-icons/hi";
interface ProgressQuickMenu {}

const ProgressQuickMenu = (
  {}: ProgressQuickMenu,
  ref: Ref<HTMLButtonElement>
) => {
  /**
   * @documentBodyHeight : body의 높이값
   * @curScrollPercent : body 기준 현재 컨텐츠가 몇% 정도인지에 대한 현재높이비율
   */
  const [isMount, setIsMount] = useState<boolean>(false);
  const [documentBodyHeight, setDocumentBodyHeight] = useState<number>(0);
  const [curScrollPercent, setCurScrollPercent] = useState<number>(0);

  /**
   * @CircularProgressProps : CircularProgress 컴포넌트가 가지는 props
   */
  const circularProgressProps: CircularProgressProps = {
    size: 50,
  };

  useEffect(() => {
    if (!window) return;
    setIsMount(true);

    if (document && document.body && document.body.scrollHeight) {
      // setDocumentBodyHeight(document.body.scrollHeight);

      const windowHeight = window.innerHeight;
      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

      window.addEventListener("scroll", function () {
        // 현재 수직 스크롤 위치 가져오기
        const scrollTop = window.scrollY;
        const scrollPercent = (scrollTop / (pageHeight - windowHeight)) * 100;

        setCurScrollPercent(scrollPercent);
      });
    }
  }, []);

  /**
   * Circle Border Style 구성 컴포넌트
   * @props : CircularProgressProps
   * @value : 현재 화면 컨텐츠가 body의 몇 %정도인지 계산된 값
   */
  function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number }
  ) {
    return (
      <Box
        className={`${styles.scroll_circle_menu_box} ${
          props.value > 0 ? styles.move : ""
        }`}
      >
        <CircularProgress
          variant="determinate"
          className={styles.circle_menu_border}
          {...props}
        />
        <Box
          className={styles.circle_menu_btn_box}
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography> */}
          <button
            type="button"
            onClick={onClick}
            ref={ref}
            title="맨 위로 페이지 이동"
          >
            <HiArrowNarrowUp size={24} role="img" aria-label="위쪽 화살표" />
          </button>
        </Box>
      </Box>
    );
  }

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isMount) return;

    window.scrollTo({
      //   top: documentBodyHeight,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.progressQuickMenu_wrap}>
      <CircularProgressWithLabel
        value={curScrollPercent}
        size={circularProgressProps.size}
      />
    </div>
  );
};

export default forwardRef(ProgressQuickMenu);
