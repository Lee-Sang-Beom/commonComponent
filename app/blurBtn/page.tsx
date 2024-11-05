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
          onClickEvent={() => {
            console.log("click");
          }}
          leftIcon={<></>}
          rightIcon={<></>}
          text={"text"}
        />
      </div>
    </>
  );
}
