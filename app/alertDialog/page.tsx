"use client";

import style from "./AlertDialog.module.scss";
import Button from "@/components/Button/Button";
import DialogComp from "@/components/Dialog/Dialog";
import Textarea from "@/components/Textarea/Textarea";
import { useAutoAlert } from "@/hooks/alert/useAutoAlert";
import { useState } from "react";

export default function AlertDialogPage() {
  const { setIsChange, setStatus, setText } = useAutoAlert();

  const [del, setDel] = useState<boolean>(false);
  const [reject, setReject] = useState<boolean>(false);

  return (
    <div className={style.box}>
      <div className={style.inner}>
        <Button
          title={""}
          id={""}
          onClickEvent={() => {
            setDel(true);
          }}
        >
          삭제
        </Button>

        <DialogComp
          width="sm"
          open={del}
          setOpen={setDel}
          title={"삭제"}
          type="alert"
          botton={
            <>
              <Button
                title={""}
                id={""}
                onClickEvent={() => {
                  setText("삭제되었습니다.");
                  setStatus("success");
                  setIsChange(true);
                  setDel(false);
                }}
              >
                삭제
              </Button>
              <Button
                title={""}
                id={""}
                onClickEvent={() => {
                  setDel(false);
                }}
              >
                취소
              </Button>
            </>
          }
        >
          <p>삭제 하시겠습니까?</p>
        </DialogComp>

        <Button
          title={""}
          id={""}
          onClickEvent={() => {
            setReject(true);
          }}
        >
          반려
        </Button>

        <DialogComp
          width="lg"
          open={reject}
          setOpen={setReject}
          title={"반려"}
          type="alert"
          botton={
            <>
              <Button
                title={""}
                id={""}
                onClickEvent={() => {
                  setText("반려되었습니다.");
                  setStatus("success");
                  setIsChange(true);
                  setReject(false);
                }}
                size="xsm"
                color="mainColor"
              >
                반려
              </Button>
              <Button
                title={""}
                id={""}
                onClickEvent={() => {
                  setReject(false);
                }}
                size="xsm"
              >
                취소
              </Button>
            </>
          }
        >
          <p>반려 사유를 입력해주세요.</p>
          <Textarea title={"asd"} />
        </DialogComp>
      </div>
    </div>
  );
}
