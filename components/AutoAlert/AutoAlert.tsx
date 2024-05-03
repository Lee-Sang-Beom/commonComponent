"use client";

import "./AutoAlert.scss";
import {
  openAlertState,
  openAlertStatus,
  openAlertText,
} from "@/recoil/autoAlert";
import { StatusType } from "@/types/common/commonType";
import { Alert } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

interface AutoAlertProps {}

export default function AutoAlert({}: AutoAlertProps) {
  const [openState] = useRecoilState(openAlertState);
  const [text] = useRecoilState(openAlertText);
  const [status] = useRecoilState<StatusType>(openAlertStatus);

  return (
    <Alert
      className={`${openState ? "animation_wrap" : ""}`}
      // className={"animation_wrap"}
      variant="outlined"
      severity={
        status === "error"
          ? "error"
          : status === "info"
          ? "info"
          : status === "warning"
          ? "warning"
          : "success"
      }
    >
      {text}
    </Alert>
  );
}
