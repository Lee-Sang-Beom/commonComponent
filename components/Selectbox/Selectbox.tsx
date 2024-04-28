"use client";

import React, { useId } from "react";
import "./Selectbox.scss";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FieldValues } from "react-hook-form";

export interface SelectboxType {
  name: string;
  value: string | number;
  group: string;
}

interface SelectboxProps {
  items: SelectboxType[];
  size?: "xsm" | "sm" | "lg" | "xlg";
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  title: string;
  value?: string;
  partialErrorObj?: FieldValues;
  onChange: (event: SelectChangeEvent) => void;
}

/**
 *
 * @param size?: 크기  (기본 md)
 * @return "xsm" | "sm" | "lg" | "xlg";
 *
 * @param color?: 색상 (기본 white)
 * @returns string (black, mainColor, disabled, none)
 *
 * @param border?: 보더 사이즈 (기본 0)
 * @return "br_square_round_1" | "br_square_round_2" | "br_round";
 *
 * @param value?: value // react-hook-form을 사용하면 안보내도 됨
 * @returns string | number
 *
 * @param title: title로, 한 페이지 내에서 겹치지 않는 샐랙트 대상명을 정확히 보내주어야 함
 * @returns string
 *
 * @param onChange
 *
 * @param placeholder
 */

export default function Selectbox({
  items,
  size,
  color,
  title,
  border,
  value,
  partialErrorObj,
  onChange,
}: SelectboxProps) {
  const id = useId();

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl className="select_box">
      {/* <InputLabel id={`${id}_${title}_label`}>{placeholder}</InputLabel> */}
      <label htmlFor={`${id}_ ${title}_label`} className="screen_out">
        {title}
      </label>
      <Select
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        id={`${id}_${title}`}
        labelId={`${id}_${title}_label`}
        title={title}
        defaultValue={""}
        onChange={onChange}
        disabled={color === "disabled" ? true : false}
        className={`select ${
          size === "xsm"
            ? "xsm"
            : size === "sm"
            ? "sm"
            : size === "lg"
            ? "lg"
            : size === "xlg"
            ? "xlg"
            : "md"
        } ${color && color !== "" ? color : "white"} ${
          border ? border : "br_suqare"
        } ${partialErrorObj && "red"}`}
      >
        <MenuItem value={""}>전체</MenuItem>
        {items.map((item: SelectboxType) => {
          return (
            <MenuItem key={`${id}_${item.value}`} value={item.value}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
