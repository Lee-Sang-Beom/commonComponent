import { StaticImageData } from "next/image";
import styles from "./page.module.scss";

interface IProps {
  imgsrc: string;
  title: string;
  text: string;
}
export default function SectionContent({ imgsrc, title, text }: IProps) {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.left_box}>
          <img src={imgsrc} alt="img" />
        </div>
        <div className={styles.right_box}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
