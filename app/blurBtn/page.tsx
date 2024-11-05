"use client";

import BlurButton from "@/components/BlurButton/BlurButton";
import styles from "./BlurBtnPage.module.scss";

export default function BlurBtn() {
  return (
    <>
      <div className={styles.parent}>
        <BlurButton
          title={"blurBtn"}
          id={"blurBtn"}
          onClickEvent={function (): void {
            // throw new Error("Function not implemented.");
          }}
          leftIcon={<></>}
          rightIcon={<></>}
          text={"text"}
        />
      </div>
    </>
  );
}
