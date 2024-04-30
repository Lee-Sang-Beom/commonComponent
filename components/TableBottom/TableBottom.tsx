"use client";

import React from "react";
import style from "./TableBottom.module.scss";

interface TableBottomProps {
  children: React.ReactNode;
}
/**
 * pagingComponent 아래에 버튼이 있는 경우, 매 페이지마다 버튼을 감싸는 박스 요소를 스타일링하지 않고, 버튼만 전달해서 사용할 수 있도록 컴포넌트를 만듬
 * @param children : 테이블 제목 - button 넣으면 자동 css
 */

export default function TableBottom({ children }: TableBottomProps) {
  return <div className={style.tb_bottom}>{children}</div>;
}
