"use client";
import Accordion from "@/components/Accordion/Accordion";
import style from "./accordionPage.module.scss";
import { useEffect, useState } from "react";
import AccordionMulti from "@/components/AccordionMulti/AccordionMulti";

export default function AccordionPage() {
  const [check1, setCheck1] = useState<boolean>(false);

  return (
    <div className={style.wrap}>
      <h3>Accordion</h3>
      <div className={style.acc_1}>
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
      <h3>Accordion Multi</h3>
      <div className={style.acc_multi}>
        <AccordionMulti
          data={[
            { content: "<p>내용입니다</p>", seq: "0", title: "제목1" },
            { content: "<p>내용222입니다</p>", seq: "1", title: "제목2" },
          ]}
        />
      </div>
    </div>
  );
}
