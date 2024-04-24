"use client";

import style from "./Form.module.scss";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";

export default function FormPage() {
  return (
    <>
      {/* 버튼 --------------------------- */}
      <div className={style.box}>
        <h3>BUTTON</h3>
        <div className={style.inner}>
          <Button
            text={"xlg br_square_round_1"}
            id={"btnBasicXlg"}
            size="xlg"
            border="br_square_round_1"
            onClickEvent={() => {}}
          />
          <Button
            text={"black lg br_square_round_2"}
            id={"btnBasicLg"}
            size="lg"
            color="black"
            border={"br_square_round_2"}
            onClickEvent={() => {}}
          />
          <Button
            text={"기본 버튼"}
            id={"btnBasicMd"}
            onClickEvent={() => {}}
          />
          <Button
            text={"mainColorBorder sm br_square_round_2"}
            id={"btnBasicSm"}
            size="sm"
            color="mainColorBorder"
            border={"br_square_round_2"}
            onClickEvent={() => {}}
          />
          <Button
            text={"mainColor xsm br_round"}
            id={"btnBasicXsm"}
            size="xsm"
            color="mainColor"
            border={"br_round"}
            onClickEvent={() => {}}
          />
        </div>
      </div>

      {/* 인풋 --------------------------- */}
      <div className={style.box}>
        <h3>INPUT</h3>
        <div className={style.inner}>
          <Input
            placeholder={"xlg br_square_round_1"}
            title={""}
            inpSize={"xlg"}
            border={"br_square_round_1"}
          />
          <Input
            placeholder={"lg black br_square_round_2"}
            title={""}
            color={"black"}
            inpSize={"lg"}
            border={"br_square_round_2"}
          />

          <Input title={""} placeholder={"기본 인풋"} />
          <Input
            placeholder={"sm mainColor br_square_round_2"}
            title={""}
            inpSize={"sm"}
            color={"mainColor"}
            border={"br_square_round_2"}
          />
          <Input
            placeholder={"xsm mainColor br_round"}
            title={""}
            color={"mainColor"}
            inpSize={"xsm"}
            border={"br_round"}
          />
        </div>
      </div>

      {/* 텍스트에어리어 --------------------------- */}
      <div className={style.box}>
        <h3>TEXTAREA</h3>
        <div className={style.inner}>
          <Textarea
            title={""}
            placeholder={"xlg br_square_round_1"}
            taSize={"xlg"}
            border={"br_square_round_1"}
          />
          <Textarea
            title={""}
            placeholder={"lg black br_square_round_2"}
            color={"black"}
            taSize={"lg"}
            border={"br_square_round_2"}
          />
          <Textarea title={""} placeholder={"기본 textarea"} />
          <Textarea
            placeholder={"sm mainColor br_square_round_2"}
            title={""}
            taSize={"sm"}
            color={"mainColor"}
            border={"br_square_round_2"}
          />
          <Textarea
            placeholder={"xsm mainColor br_round"}
            title={""}
            color={"mainColor"}
            taSize={"xsm"}
            border={"br_round"}
          />
        </div>
      </div>

      {/* 스위치 --------------------------- */}
      <div className={style.box}>
        <h3>SWITCH</h3>
        <div className={style.inner}></div>
      </div>
      {/* 인풋 --------------------------- */}
      <div className={style.box}>
        <h3></h3>
        <div className={style.inner}></div>
      </div>
      {/* 인풋 --------------------------- */}
      <div className={style.box}>
        <h3></h3>
        <div className={style.inner}></div>
      </div>
    </>
  );
}
