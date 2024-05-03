"use client";

import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import style from "./Accordion.module.scss";

interface AccordionProps {
  title: string;
  isCheckbox?: boolean;
  onCheck?: Function;
  content: string;
}
export default function Accordion({
  content,
  title,
  isCheckbox,
  onCheck,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <dl className={style.dl}>
      <dt className={style.dt}>
        <button
          className={style.title_btn}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className={style.check_wrap}>
            {isCheckbox ? (
              <Checkbox inpSize="xsm" title={"아코디언 체크박스"} />
            ) : (
              <></>
            )}
            <span>{title}</span>
          </span>{" "}
          <div>{isOpen ? "접기" : "펼치기"}</div>
        </button>
      </dt>
      <dd className={`${style.content} ${isOpen ? style.open : style.close}`}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </dd>
    </dl>
  );
}
