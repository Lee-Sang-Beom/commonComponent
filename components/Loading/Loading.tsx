"use client";

import CircularProgress from "@mui/material/CircularProgress";
import style from "./Loading.module.scss";
import { useEffect, useState } from "react";

interface LoadingProps {
  text?: string;
  open: boolean;
}
/**
 *
 * @param text? : 기본 -> 텍스트 없음 / text = "" -> "잠시만 기다려주세요."
 * @returns string
 */

export default function Loading({ text, open }: LoadingProps) {
  return (
    <div className={`${style.loading_box} ${open ? style.open : ""}`}>
      <CircularProgress />

      {text === undefined ? (
        <></>
      ) : (
        <p>{text === "" ? "잠시만 기다려주세요." : text}</p>
      )}
    </div>
  );
}
