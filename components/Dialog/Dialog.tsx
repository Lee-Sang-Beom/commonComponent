"use client";

import "./Dialog.scss";
import React, { Dispatch, SetStateAction } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "../Button/Button";
import { IoClose } from "react-icons/io5";

interface DialogCompProps {
  type?: "alert";
  width?: "xs" | "sm" | "lg" | "xl";
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode | React.ReactNode[];
  botton?: React.ReactNode | React.ReactNode[];
  closeFocusRef?: HTMLButtonElement;
}

/**
 *
 * @param type?: 팝업 타입 (기본 다이얼로그)
 * @returns "alert";
 *
 * @param closeFocusRef?:팝업이 닫히고 이동할 Element 요소 (테이블 내 개별 다이얼로그가 있을 시 사용)
 * @returns
 *
 * @param botton?:팝업 하단 버튼  (자동 고정됨)
 * @returns
 */

export default function DialogComp({
  type,
  width,
  open,
  setOpen,
  title,
  children,
  botton,
  closeFocusRef,
}: DialogCompProps) {
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={(e: any) => {
        setOpen(false);
      }}
      scroll={"paper"}
      aria-labelledby={`scroll-dialog-${title}`}
      aria-describedby="scroll-dialog-description"
      maxWidth={width ? width : "md"}
      fullWidth={true}
      className={`${type === "alert" ? "type_alert" : ""}`}
    >
      <DialogTitle id={`scroll-dialog-${title}`}>
        <p>{title}</p>
        <div className="btn_close">
          <Button
            title={"다이얼로그 닫기"}
            id={"dialogClose"}
            size="sm"
            color="none"
            onClickEvent={() => {
              setOpen(false);
            }}
          >
            <IoClose role="img" aria-label="닫기" />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers={true}>{children}</DialogContent>
      <DialogActions>{botton}</DialogActions>
    </Dialog>
  );
}
