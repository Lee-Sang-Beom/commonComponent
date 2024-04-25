"use client";

import style from "./Form.module.scss";
import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";
import Chip from "@/components/Chip/Chip";
import Input from "@/components/Input/Input";
import Radiobox from "@/components/Radiobox/Radiobox";
import Switch from "@/components/Switch/Switch";
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
          <Button
            text={"none"}
            color={"none"}
            id={"btnBasicMd"}
            onClickEvent={() => {}}
          />
          <Button
            text={"disabled"}
            color={"disabled"}
            id={"btnBasicMd"}
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
          <Input title={""} placeholder={"none"} color={"none"} />
          <Input title={""} placeholder={"disabled"} color={"disabled"} />
        </div>
      </div>

      {/* 셀렉트 박스 --------------------------- */}
      <div className={style.box}>
        <h3>SELECTBOX</h3>
        <div className={style.inner}></div>
      </div>

      {/* 체크 박스 --------------------------- */}
      <div className={style.box}>
        <h3>CHECKBOX</h3>
        <div className={style.inner}>
          <Checkbox title={""} inpSize="xlg" border="br_square_round_1" />
          <Checkbox
            title={""}
            inpSize="lg"
            color={"black"}
            border="br_square_round_2"
          />
          <Checkbox title={""} />
          <Checkbox
            title={""}
            inpSize="sm"
            color={"mainColor"}
            border="br_square_round_2"
          />
          <Checkbox
            title={""}
            inpSize="xsm"
            color={"mainColor"}
            border="br_round"
          />
          <Checkbox title={""} color={"none"} />
          <Checkbox title={""} color={"disabled"} checked={true} />
        </div>
      </div>

      {/* 라디오 박스 --------------------------- */}
      <div className={`${style.box} ${style.radio_box}`}>
        <h3>RADIOBOX</h3>
        <div className={style.inner}>
          <Radiobox
            title={"가"}
            inpSize="xlg"
            items={[
              {
                name: "사과",
                value: "apple",
                id: "apple",
              },
              {
                name: "바나나",
                value: "banana",
                id: "banana",
              },
            ]}
          />

          <Radiobox
            title={"나"}
            inpSize="lg"
            color={"black"}
            items={[
              {
                name: "사과",
                value: "apple",
                id: "apple",
              },
              {
                name: "바나나",
                value: "banana",
                id: "banana",
              },
            ]}
          />

          <Radiobox
            title={"다"}
            items={[
              {
                name: "사과",
                value: "apple",
                id: "apple",
              },
              {
                name: "바나나",
                value: "banana",
                id: "banana",
              },
            ]}
          />

          <Radiobox
            title={"라"}
            inpSize="sm"
            color={"mainColor"}
            items={[
              {
                name: "사과",
                value: "apple",
                id: "apple",
              },
              {
                name: "바나나",
                value: "banana",
                id: "banana",
              },
            ]}
          />

          <Radiobox
            title={"마"}
            inpSize="xsm"
            color={"mainColor"}
            items={[
              {
                name: "사과",
                value: "apple",
                id: "apple",
              },
              {
                name: "바나나",
                value: "banana",
                id: "banana",
              },
            ]}
          />

          <Radiobox
            title={"바"}
            color={"none"}
            items={[
              {
                name: "사과ㅇㄴㄹ",
                value: "apple",
                id: "apple",
              },
              {
                name: "바나나",
                value: "banana",
                id: "banana",
              },
            ]}
          />

          <Radiobox
            title={"사"}
            color={"black"}
            items={[
              {
                name: "사과",
                value: "apple",
                id: "apple",
                disabled: true,
              },
              {
                name: "바나나",
                value: "banana",
                id: "banana",
                checked: true,
              },
            ]}
          />

          <Radiobox
            title={"아"}
            color={"disabled"}
            items={[
              {
                name: "사과",
                value: "apple",
                id: "apple",
                checked: true,
              },
              {
                name: "바나나",
                value: "banana",
                id: "banana",
              },
            ]}
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
          <Textarea title={""} placeholder={"none"} color={"none"} />
          <Textarea title={""} placeholder={"disabled"} color={"disabled"} />
        </div>
      </div>

      {/* 스위치 --------------------------- */}
      <div className={style.box}>
        <h3>SWITCH</h3>
        <div className={style.inner}>
          <Switch title={""} inpSize={"xlg"} />
          <Switch
            title={""}
            color={"black"}
            inpSize={"lg"}
            border={"br_square_round_1"}
          />
          <Switch title={""} />
          <Switch
            title={""}
            color={"mainColor"}
            inpSize={"sm"}
            border={"br_square_round_2"}
          />
          <Switch
            title={""}
            color={"mainColor"}
            inpSize={"xsm"}
            border={"br_round"}
          />
          <Switch title={""} color="none" border={"br_square_round_2"} />
          <Switch title={""} color="disabled" border={"br_square_round_2"} />
        </div>
      </div>

      {/* 칩 --------------------------- */}
      <div className={style.box}>
        <h3>CHIP</h3>
        <div className={style.inner}>
          <Chip
            chipData={{
              name: "xlg blackBorder",
              value: "xlg blackBorder",
              group: "",
            }}
            chipSize={"xlg"}
            color={"blackBorder"}
            title={""}
          />
          <Chip
            chipData={{
              name: "lg br_square_round_1 black",
              value: "lg br_square_round_1 black",
              group: "",
            }}
            chipSize={"lg"}
            border={"br_square_round_1"}
            color={"black"}
            title={""}
          />
          <Chip
            chipData={{
              name: "기본 칩",
              value: "기본 칩",
              group: "",
            }}
            title={""}
          />
          <Chip
            chipData={{
              name: "sm br_square_round_2 mainColor",
              value: "sm br_square_round_2 mainColor",
              group: "",
            }}
            chipSize={"sm"}
            border={"br_square_round_2"}
            color={"mainColor"}
            title={""}
          />
          <Chip
            chipData={{
              name: "xsm br_square_round_2 mainColor",
              value: "xsm br_square_round_2 mainColor",
              group: "",
            }}
            chipSize={"xsm"}
            border={"br_round"}
            color={"mainColorBorder"}
            title={""}
          />
          <Chip
            chipData={{
              name: "none",
              value: "none",
              group: "",
            }}
            color={"none"}
            title={""}
          />
          <Chip
            chipData={{
              name: "disabled",
              value: "disabled",
              group: "",
            }}
            color={"disabled"}
            title={""}
          />
        </div>
      </div>
    </>
  );
}
