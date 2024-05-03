"use client";

import { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import style from "./Accordion.module.scss";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

interface AccordionProps {
  title: string;
  content: string;
  isCheckbox?: boolean;
  onCheckClick?: (check: boolean) => void;
  checkState?: boolean;
}
export default function Accordion({
  content,
  title,
  isCheckbox,
  onCheckClick,
  checkState,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (checkState !== undefined) {
      setIsChecked(checkState);
    }
  }, []);

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
              <Checkbox
                checked={isChecked}
                onClick={() => {
                  setIsChecked(!isChecked);
                  if (onCheckClick) {
                    onCheckClick(!isChecked);
                  }
                }}
                title={"아코디언 체크박스"}
              />
            ) : (
              <></>
            )}
            <span>{title}</span>
          </span>{" "}
          <div className={style.up_down}>
            {isOpen ? "접기" : "펼치기"}
            {isOpen ? <FiArrowUp /> : <FiArrowDown />}
          </div>
        </button>
      </dt>
      <dd className={`${style.content} ${isOpen ? style.open : style.close}`}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </dd>
    </dl>
  );
}
