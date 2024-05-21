"use client";

import { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import style from "./AccordionMulti.module.scss";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

interface AccordionItemType {
  title: string;
  content: string;
  seq: string;
}

interface AccordionMultiProps {
  data: AccordionItemType[];
}
export default function AccordionMulti({ data }: AccordionMultiProps) {
  const [openSeq, setOpenSeq] = useState<string>("");

  return (
    <dl className={style.dl}>
      {data &&
        data.length &&
        data.map((item: AccordionItemType, index: number) => {
          return (
            <>
              <dt className={style.dt} key={item.seq + index}>
                <button
                  className={style.title_btn}
                  onClick={() => {
                    if (openSeq == item.seq) {
                      setOpenSeq("");
                    } else {
                      setOpenSeq(item.seq);
                    }
                  }}
                >
                  <span>{item.title}</span>
                  <div className={style.up_down}>
                    {openSeq == item.seq ? "접기" : "펼치기"}
                    {openSeq == item.seq ? <FiArrowUp /> : <FiArrowDown />}
                  </div>
                </button>
              </dt>
              <dd
                className={`${style.content} ${
                  openSeq == item.seq ? style.open : style.close
                }`}
              >
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </dd>
            </>
          );
        })}
    </dl>
  );
}
