"use client";
import Accordion from "@/components/Accordion/Accordion";
import style from "./accordionPage.module.scss";
import { useEffect, useState } from "react";

export default function AccordionPage() {
  const [check1, setCheck1] = useState<boolean>(false);

  return (
    <div className={style.wrap}>
      <Accordion
        title={"아코디언 제목1"}
        content={`<div>ㅎㅇㅎㅇ<br/>ㅇㅋㅇㅋ</div>`}
        isCheckbox
        checkState={check1}
        onCheckClick={(check) => {
          setCheck1(check);
        }}
      />
      <Accordion
        title={"아코디언 제목2"}
        content={`<div>2222<br/>ㅇㅋㅇㅋ</div>`}
      />
    </div>
  );
}
