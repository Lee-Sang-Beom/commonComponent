import Accordion from "@/components/Accordion/Accordion";
import style from "./accordionPage.module.scss";

export default function AccordionPage() {
  return (
    <div className={style.wrap}>
      <Accordion
        title={"아코디언 제목1"}
        content={`<div>ㅎㅇㅎㅇ<br/>ㅇㅋㅇㅋ</div>`}
        isCheckbox
      />
      <Accordion
        title={"아코디언 제목2"}
        content={`<div>2222<br/>ㅇㅋㅇㅋ</div>`}
      />
    </div>
  );
}
