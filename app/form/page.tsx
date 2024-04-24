"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

export default function FormPage() {
  return (
    <>
      <Button
        text={"기본 버튼 xlg"}
        id={"btnBasicXlg"}
        size="xlg"
        onClickEvent={() => {}}
      />
      <Button
        text={"검정 버튼 lg"}
        id={"btnBasicLg"}
        size="lg"
        color="black"
        onClickEvent={() => {}}
      />
      <Button text={"기본 버튼 md"} id={"btnBasicMd"} onClickEvent={() => {}} />
      <Button
        text={"기본 메인컬러 보더 버튼 sm"}
        id={"btnBasicSm"}
        size="sm"
        color="mainColorBorder"
        onClickEvent={() => {}}
      />
      <Button
        text={"기본 메인컬러 버튼 xsm"}
        id={"btnBasicXsm"}
        size="xsm"
        color="mainColor"
        onClickEvent={() => {}}
      />

      <br />
      <br />
      <br />

      <Input value={"기본 인풋 보더 그레이"} title={"기본 인풋 보더 그레이"} />
      <Input
        title="블루 인풋 md br_50"
        color="blue"
        value={"블루 인풋 md br_50"}
        inpSize={"md"}
        border="br_50"
      />
      <Input
        title="레드 보더 인풋 sm br_3"
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
