"use client";

import React, { useEffect, useId } from "react";
import "./Selectbox.scss";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FieldValues } from "react-hook-form";
import clsx from "clsx";
import { withStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InputErrorMsgType } from "@/types/common/commonType";
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
  effectivenessMsg?: InputErrorMsgType;
  partialErrorObj?: FieldValues;
  onChange: (event: SelectChangeEvent) => void;
  placeholder?: string;
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
 * @param placeholder? placeholder가 있고 value 값이 ""인 데이터가 있으면 value 값이 ""인 데이터가 우선 적용
 *
 * @param partialErrorObj: 제어형 컴포넌트의 유효성 검증에 사용 -> (state and setState / none use react-hook-form)
 * @returns FieldValues
 *
 * @param effectivenessMsg: 비제어형 컴포넌트의 유효성 검증에 사용 (react-hook-form)
 * @returns InputErrorMsgType
 */

export default function Selectbox({
  items,
  size,
  color,
  title,
  border,
  value,
  effectivenessMsg,
  partialErrorObj,
  placeholder,
  onChange,
  ...props
}: SelectboxProps) {
  const id = useId();

  // 커스텀 셀렉트 아이콘
  const iconStyles = {
    selectIcon: {
      color: "var(--gray-1000)",
    },
  };
  const CustomExpandMore = withStyles(iconStyles)(
    ({ className, classes, ...rest }: any) => {
      return (
        <ExpandMoreIcon
          {...rest}
          className={clsx(className, classes.selectIcon)}
        />
      );
    }
  );

  return (
    <FormControl className={`select_box`}>
      <label htmlFor={`${id}_ ${title}_label`} className={`screen_out`}>
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
        onMouseUp={() => {
          const addSizeClass = document.querySelector(
            ".MuiList-root.MuiMenu-list"
          );

          addSizeClass?.classList.add(size ? size : "md");
        }}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return placeholder;
          }

          return items.find((item) => item.value === selected)?.name;
        }}
        value={value}
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
        IconComponent={CustomExpandMore}
        {...props}
      >
        {items.map((item: SelectboxType) => {
          return (
            <MenuItem key={`${id}_${item.value}`} value={item.value}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
      {/* react-hook-form error 객체 */}
      {partialErrorObj && (
        <small role="alert" className="txt_error">
          {partialErrorObj.message}
        </small>
      )}
      {/* 제어형 컴포넌트*/}
      {effectivenessMsg && (
        <>
          {!effectivenessMsg.isSuccess &&
          effectivenessMsg.msg &&
          effectivenessMsg.msg.length ? (
            <p className={"txt_error"}>{effectivenessMsg.msg}</p>
          ) : (
            <>
              {effectivenessMsg.isSuccess &&
              effectivenessMsg.msg &&
              effectivenessMsg.msg.length ? (
                <p className={"txt_success"}>{effectivenessMsg.msg}</p>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </FormControl>
  );
}
