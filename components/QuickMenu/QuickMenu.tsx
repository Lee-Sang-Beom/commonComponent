"use client";

import { MouseEvent, Ref, forwardRef, useEffect, useState } from "react";
import styles from "./QuickMenu.module.scss";

interface QuickMenuProps {}

const QuickMenu = ({}: QuickMenuProps, ref: Ref<HTMLButtonElement>) => {
  // hover
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isMount, setIsMount] = useState<boolean>(false);
  const [documentBodyHeight, setDocumentBodyHeight] = useState<number>(0);

  useEffect(() => {
    setIsMount(true);
    if (document && document.body && document.body.scrollHeight) {
      setDocumentBodyHeight(document.body.scrollHeight);
    }
  }, []);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isMount) return;

    console.log("클릭됨");
    window.scrollTo({
      //   top: documentBodyHeight,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.quick_menu_box}>
      {/* 퀵메뉴가 단순 버튼이 아니라 특정 content box를 포함해야 하는 경우 추가 */}
      <div className={styles.quick_menu_box_top}></div>

      {/* 버튼 영역 */}
      <div className={styles.quick_menu_box_bottom}>
        <button
          type="button"
          className={styles.quick_menu_btn}
          onClick={onClick}
          ref={ref}
        ></button>
      </div>
    </div>
  );
};

export default forwardRef(QuickMenu);
