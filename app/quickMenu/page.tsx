import styles from "./page.module.scss";
import SectionContent from "./SectionContent";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.site_wrap}>
        {/* 2 */}
        <div className={styles.image1}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={"/img/img_banner1.jpg"}
            title="제목 1"
            text="텍스트 1"
          />
        </section>

        {/* 3 */}
        <div className={styles.image2}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={"/img/img_banner2.jpg"}
            title="제목 2"
            text="텍스트 2"
          />
        </section>

        {/* 4 */}
        <div className={styles.image3}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={"/img/img_banner3.jpeg"}
            title="제목 3"
            text="텍스트 3"
          />
        </section>
      </div>
    </div>
  );
}
