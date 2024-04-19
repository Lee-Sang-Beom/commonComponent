"use client";

import Button from "@/components/Button/Button";
import style from "./page.module.scss";
import Input from "@/components/Input/Input";

export default function Home() {
  return (
    <main className={style.main}>
      <Button text={"기본 버튼"} id={"btnBasic"} onClickEvent={() => {}} />
      <Button
        text={"disabled 버튼 md"}
        color="disabled"
        size="md"
        id={"btnBlack"}
        onClickEvent={() => {}}
      />
      <Button
        text={"검정 버튼 sm"}
        color="black"
        size="sm"
        id={"btnBlack"}
        onClickEvent={() => {}}
      />

      <br />
      <br />
      <br />

      <Input
        color="blue"
        value={"인풋 블루 sm br_50"}
        inpSize={"sm"}
        border="br_50"
      />
      <Input borderColor="gray" value={"인풋 보더 그레이"} />
    </main>
  );
}
