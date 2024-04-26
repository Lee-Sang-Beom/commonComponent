"use client";

import style from "../tab/tab.module.scss";
import Tab from "@/components/Tab/Tab";

export default function TabPage() {
  return (
    <>
      <div className={style.box}>
        <h3>기본 탭</h3>
        <div className={style.inner}>
          <Tab tabTit={["1xlg", "2xlg"]} size="xlg" color="black">
            <div>asd</div>
            <div>123</div>
          </Tab>
        </div>
        <div className={style.inner}>
          <Tab
            tabTit={[
              "1mainColor br_square_round_1",
              "2mainColor br_square_round_1",
            ]}
            border="br_square_round_1"
            size="lg"
            color="mainColor"
          >
            <div>asd</div>
            <div>123</div>
          </Tab>
        </div>

        <div className={style.inner}>
          <Tab tabTit={["제목1", "제목2"]}>
            <div>asd</div>
            <div>123</div>
          </Tab>
        </div>
        <div className={style.inner}>
          <Tab
            tabTit={[
              "1sm mainColor br_square_round_2",
              "2sm mainColor br_square_round_2",
            ]}
            border="br_square_round_2"
            size="sm"
            color="mainColor"
          >
            <div>asd</div>
            <div>123</div>
          </Tab>
        </div>
        <div className={style.inner}>
          <Tab
            tabTit={["1xsm mainColor br_round", "2xsm mainColor br_round"]}
            border="br_round"
            size="xsm"
            color="mainColor"
          >
            <div>asd</div>
            <div>123</div>
          </Tab>
        </div>
      </div>
      <div className={style.box}>
        <h3>링크 탭</h3>
        <div className={style.inner}>
          <Tab
            urlArr={["/tab", "/tab2"]}
            tabTit={["1xlg", "2xlg"]}
            size="xlg"
            color="black"
          />
          <Tab
            urlArr={["/tab", "/tab2"]}
            tabTit={[
              "1mainColor br_square_round_1",
              "2mainColor br_square_round_1",
            ]}
            border="br_square_round_1"
            size="lg"
            color="mainColor"
          />
          <Tab urlArr={["/tab", "/tab2"]} tabTit={["기본1", "기본2"]} />
          <Tab
            urlArr={["/tab", "/tab2"]}
            tabTit={[
              "1sm mainColor br_square_round_2",
              "2sm mainColor br_square_round_2",
            ]}
            border="br_square_round_2"
            size="sm"
            color="mainColor"
          />
          <Tab
            urlArr={["/tab", "/tab2"]}
            tabTit={["1xsm mainColor br_round", "2xsm mainColor br_round"]}
            border="br_round"
            size="xsm"
            color="mainColor"
          />
          <div>tab1</div>
        </div>
      </div>
    </>
  );
}
