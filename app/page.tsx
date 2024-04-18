"use client";

import Button from "@/components/Button/Button";
import style from "./page.module.scss";

export default function Home() {
  return (
    <main className={style.main}>
      <Button text={"기본 버튼"} id={"btnBasic"} onClickEvent={() => {}} />
      <Button
        text={"검정 버튼 sm"}
        color="black"
        size="sm"
        id={"btnBlack"}
        onClickEvent={() => {}}
      />

      <br />
      <br />
    </main>
  );
}
