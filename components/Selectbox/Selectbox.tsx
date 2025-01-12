"use client";

import React, {
  forwardRef,
  useEffect,
  useId,
  useState,
  Ref,
  useRef,
} from "react";
import "./Selectbox.scss";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FieldValues } from "react-hook-form";
import clsx from "clsx";
import { withStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InputErrorMsgType } from "@/types/common/commonType";
import { InputLabel } from "@mui/material";
import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";
export interface SelectboxType {
  name: string;
  value: any;
  group: string;
}

interface SelectboxProps {
  items: SelectboxType[];
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
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
 * @return "xsm" | "sm" | "md" | "lg" | "xlg";
 *
 * @param color?: 색상 (기본 white)
 * @returns "white" | "gray" | "darkgray" | "disabled"
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

const Selectbox = (
  {
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
  }: SelectboxProps,
  ref: Ref<any>
) => {
  const id = useId();
  const [isMouseFocus, setIsMouseFocus] = useState<boolean>(false);

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

  const baseSelectClassName = clsx({
    ["select"]: true,
    ["xsm"]: size === "xsm",
    ["sm"]: size === "sm",
    ["md"]:
      !size ||
      size === "md" ||
      (size !== "xsm" && size !== "sm" && size !== "lg" && size !== "xlg"),
    ["lg"]: size === "lg",
    ["xlg"]: size === "xlg",
    ["red"]:
      partialErrorObj || (effectivenessMsg && !effectivenessMsg.isSuccess),
    ["focus"]: isMouseFocus,
  });

  /**
   * @isMount : Selectbox 컴포넌트는 서버에서 SSR방식으로 미리 렌더링하는 도중 className이 불일치하는 현상이 발생함
   *  - 따라서 해석과정에서, 완전한 tsx파일을 module reference type을 바로 적용할 수 없도록 빈 컴포넌트로 해석하게 한 다음 클라이언트에서 window객체를 찾은 다음 순차적으로 그리도록 함
   *  - 이 오류는, `document.querySelector`과 관련이 있음
   */
  const [isMount, setIsMount] = useState<boolean>(false);
  const labelId = `${id}_${title}_label`;
  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <>
      {isMount ? (
        <FormControl
          className={`select_box`}
          onFocus={() => {
            setIsMouseFocus(true);
          }}
          onBlur={() => {
            setIsMouseFocus(false);
          }}
        >
          <InputLabel htmlFor={labelId} className={`screen_out`}>
            {title}
          </InputLabel>
          <Select
            displayEmpty
            inputProps={{
              "aria-label": title,
              id: labelId,
              title: title,
            }}
            defaultValue={""}
            onChange={(event) => {
              onChange(event);
            }}
            className={clsx(
              baseSelectClassName,
              color && color !== "" ? color : "white",
              border ? border : "br_square"
            )}
            onMouseUp={() => {
              const addSizeClass = document.querySelector(
                ".MuiList-root.MuiMenu-list"
              );
              addSizeClass?.classList.add(size ? size : "md");
            }}
            renderValue={(selected) => {
              if (
                !selected ||
                selected.toString() == "null" ||
                selected.toString() == "undefined" ||
                selected.length === 0
              ) {
                return placeholder;
              }

              return items.find((item) => item.value === selected)?.name;
            }}
            value={value}
            disabled={color === "disabled" ? true : false}
            IconComponent={CustomExpandMore}
            MenuProps={{
              disableScrollLock: true,
            }}
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
          {/* react-hook-form error 객체: 실패일 때 에러메시지를 던져줌 */}
          {partialErrorObj && (
            <small role="alert" className="txt_error">
              <RiErrorWarningFill
                size={20}
                color="#D50136"
                role="img"
                aria-label="입력값 체크 아이콘(실패 - 느낌표)"
              />
              {partialErrorObj.message}
            </small>
          )}
          {/* 제어형 컴포넌트*/}
          {effectivenessMsg && (
            <>
              {!effectivenessMsg.isSuccess &&
              effectivenessMsg.msg &&
              effectivenessMsg.msg.length ? (
                <p className={"txt_error"}>
                  <RiErrorWarningFill
                    size={20}
                    color="#D50136"
                    role="img"
                    aria-label="입력값 체크 아이콘(실패 - 느낌표)"
                  />
                  {effectivenessMsg.msg}
                </p>
              ) : (
                <>
                  {effectivenessMsg.isSuccess &&
                  effectivenessMsg.msg &&
                  effectivenessMsg.msg.length ? (
                    <p className={"txt_success"}>
                      <RiCheckboxCircleFill
                        size={20}
                        role="img"
                        color="#006E18"
                        aria-label="입력값 체크 아이콘(성공)"
                      />
                      {effectivenessMsg.msg}
                    </p>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </FormControl>
      ) : (
        <></>
      )}
    </>
  );
};
export default forwardRef(Selectbox);
