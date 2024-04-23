"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

export default function FormPage() {
  return (
    <>
      <Button text={"기본 버튼 lg"} id={"btnBasicLg"} onClickEvent={() => {}} />
      <Button
        text={"disabled 버튼 lg"}
        color="disabled"
        id={"btnDisabledLg"}
        onClickEvent={() => {}}
      />
      <Button
        text={"블루 보더 버튼 md"}
        color="blueBorder"
        size="md"
        id={"btnBlueBorderMd"}
        onClickEvent={() => {}}
      />
      <Button
        text={"검정 버튼 sm"}
        color="black"
        size="sm"
        id={"btnBlackMd"}
        onClickEvent={() => {}}
      />

      <br />
      <br />
      <br />

      <Input value={"기본 인풋 보더 그레이"} />
      <Input
        color="blue"
        value={"블루 인풋 md br_50"}
        inpSize={"md"}
        border="br_50"
      />
      <Input
        color="redBorder"
        value={"레드 보더 인풋 sm br_3"}
        inpSize={"sm"}
        border="br_3"
      />

      <br />
      <br />
      <br />
    </>
  );
}
