"use client";

import style from "./autoAlertPage.module.scss";
import Button from "@/components/Button/Button";
import { useAutoAlert } from "@/hooks/alert/useAutoAlert";

export default function AutoAlertPage() {
  const { setIsChange, setStatus, setText } = useAutoAlert();

  return (
    <div className={style.box}>
      <div className={style.inner}>
        <Button
          title={""}
          id={""}
          onClickEvent={() => {
            setText("신청서를 첨부해주세요.");
            setStatus("error");
            setIsChange(true);
          }}
        >
          error
        </Button>

        <Button
          title={""}
          id={""}
          onClickEvent={() => {
            setText("확인되었습니다.");
            setStatus("success");
            setIsChange(true);
          }}
        >
          success
        </Button>

        <Button
          title={""}
          id={""}
          onClickEvent={() => {
            setText(
              "맥북으로 한글파일 등록 시 등록은 되나 처부파일이 보이지 않을 수 있습니다."
            );
            setStatus("info");
            setIsChange(true);
          }}
        >
          info
        </Button>

        <Button
          title={""}
          id={""}
          onClickEvent={() => {
            setText("입력하지 않은 항목이 있습니다.");
            setStatus("warning");
            setIsChange(true);
          }}
        >
          warning
        </Button>
      </div>
    </div>
  );
}
