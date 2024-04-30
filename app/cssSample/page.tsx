"use client";
import Input from "@/components/Input/Input";
import style from "./page.module.scss";
import { FaArrowDown } from "react-icons/fa6";
import Button from "@/components/Button/Button";
import { Opacity, SubjectOutlined } from "@mui/icons-material";
import FileInputOuter from "@/components/FileInput/FileInputOuter";
import Chip from "@/components/Chip/Chip";
import Switch from "@/components/Switch/Switch";
import Radiobox from "@/components/Radiobox/Radiobox";
import Checkbox from "@/components/Checkbox/Checkbox";
import Textarea from "@/components/Textarea/Textarea";
import Selectbox from "@/components/Selectbox/Selectbox";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { duration } from "moment";
import { Fade } from "@mui/material";

export default function CssAnimation() {
  const outer1Ref = useRef(null);

  return (
    <>
      <div className={style.wrap}>
        {/* morphism & Container Query */}
        <div className={style.container}>
          <div className={style.morphism}>
            <div className={style.box}>morphism</div>
            <div className={style.box}>Container Query</div>
          </div>
        </div>
        {/* search table */}
        <div className={style.search_tb}>
          <div className={style.select_box}>
            <span>구분</span>
            <Selectbox
              items={[
                { name: "123", value: "123", group: "" },
                { name: "456", value: "456", group: "" },
              ]}
              title={""}
              border={"br_square_round_1"}
              onChange={() => {}}
            />
          </div>
          <div className={style.date_box}>
            <Input
              placeholder={""}
              title={""}
              type="date"
              border={"br_square_round_1"}
            />
            <span>~</span>
            <Input
              placeholder={""}
              title={""}
              type="date"
              border={"br_square_round_1"}
            />
          </div>
          <div className={style.search_txt}>
            <Input
              placeholder={"검색어를 입력해주세요."}
              title={""}
              type="text"
              border={"br_square_round_1"}
            />
            <Button
              id={"btnBasiclg"}
              color="black"
              border="br_square_round_1"
              onClickEvent={() => {}}
              title={""}
            >
              검색
            </Button>
          </div>
        </div>
        {/* table */}
        <div className={style.tb_container}>
          <p>
            <SubjectOutlined fontSize="large" /> list
          </p>
          <table className={style.tb_st1}>
            <caption>반응형 테이블</caption>
            <colgroup>
              <col width={"20%"} />
              <col width={"20%"} />
              <col width={"20%"} />
              <col width={"20%"} />
              <col width={"20%"} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">타이틀1</th>
                <th scope="col">타이틀2</th>
                <th scope="col">타이틀3</th>
                <th scope="col">타이틀4</th>
                <th scope="col">타이틀5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">텍스트1</td>
                <td>텍스트2</td>
                <td>텍스트3</td>
                <td>텍스트4</td>
                <td>
                  <div className={style.chip_box}>
                    <Chip
                      chipData={{
                        name: "진행중",
                        value: "진행중",
                        group: "",
                      }}
                      chipSize={"xsm"}
                      color={"blackBorder"}
                      title={"진행중"}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row">텍스트1</td>
                <td>텍스트2</td>
                <td>텍스트3</td>
                <td>텍스트4</td>
                <td>
                  <div className={style.chip_box}>
                    <Chip
                      chipData={{
                        name: "진행중",
                        value: "진행중",
                        group: "",
                      }}
                      chipSize={"xsm"}
                      color={"blackBorder"}
                      title={"진행중"}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p>view</p>
          <dl className={style.tb_st1_view}>
            <dt>테이블 제목이 들어갈 공간입니다.</dt>
            <dd>
              <ul className={style.info}>
                <li>
                  <strong>작성일</strong>
                  <span>2024-10-20</span>
                </li>
                <li>
                  <strong>조회수</strong>
                  <span>200</span>
                </li>
              </ul>
              <div className={style.contents}>
                테이블 내용이 들어갈 공간입니다.
              </div>
              <div className={style.file}>
                <strong>첨부파일</strong>
                <ul>
                  <li>
                    <a href="">2024 첨부파일명 첨부파일명 첨부파일명</a>
                    <div className={style.btn_box}>
                      <Button
                        id={"btnBasiclg"}
                        size="xsm"
                        border="br_square_round_1"
                        onClickEvent={() => {}}
                        title={""}
                      >
                        다운로드
                      </Button>
                    </div>
                  </li>
                  <li>
                    <a href="">2024 첨부파일명 첨부파일명 첨부파일명</a>
                    <div className={style.btn_box}>
                      <Button
                        id={"btnBasiclg"}
                        size="xsm"
                        border="br_square_round_1"
                        onClickEvent={() => {}}
                        title={""}
                      >
                        다운로드
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            </dd>
          </dl>
          <div className={style.btn_list}>
            <div className={style.btn_box}>
              <Button
                id={"btnBasiclg"}
                border="br_square_round_1"
                onClickEvent={() => {}}
                color="black"
                title={""}
              >
                목록
              </Button>
            </div>
          </div>
          <ul className={style.prevnext}>
            <li className={style.prev}>
              <span>이전글</span>
              <a href="">2023년도 이전글 이전글 이전글 이전글 이전글 이전글</a>
            </li>
            <li className={style.next}>
              <span>다음글</span>
              <a href="">2023년도 다음글 다음글 다음글 다음글 다음글 다음글</a>
            </li>
          </ul>
          <p>write</p>
          <table className={style.tb_st1_write}>
            <caption>반응형 테이블</caption>
            <colgroup>
              <col width={"20%"} />
              <col width={"80%"} />
            </colgroup>
            <tbody>
              <tr>
                <th scope="col">토글</th>
                <td>
                  <div className={style.switch_box}>
                    <span className={style.switch_txt}>비공개</span>
                    <Switch title={""} inpSize={"xsm"} border={"br_round"} />
                    <span className={style.switch_txt}>공개</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="col">인풋</th>
                <td>
                  <Input
                    placeholder={"내용을 입력해주세요."}
                    title={""}
                    inpSize={"sm"}
                    border={"br_square_round_1"}
                  />
                </td>
              </tr>
              <tr>
                <th scope="col">라디오박스</th>
                <td>
                  <div className={style.radio_box}>
                    <Radiobox
                      title={"마"}
                      inpSize="xsm"
                      items={[
                        {
                          name: "사과",
                          value: "apple",
                          id: "apple",
                        },
                        {
                          name: "바나나",
                          value: "banana",
                          id: "banana",
                        },
                      ]}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="col">체크박스</th>
                <td>
                  <div className={style.check_box}>
                    <ul>
                      <li>
                        <Checkbox
                          title={""}
                          inpSize="xsm"
                          border="br_square_round_1"
                        />{" "}
                        <span className={style.chk_txt}>사과</span>
                      </li>
                      <li>
                        <Checkbox
                          title={""}
                          inpSize="xsm"
                          border="br_square_round_1"
                        />{" "}
                        <span className={style.chk_txt}>바나나</span>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="col">셀렉트박스</th>
                <td>
                  <div className={style.select_box}>
                    <Selectbox
                      items={[
                        { name: "123", value: "123", group: "" },
                        { name: "456", value: "456", group: "" },
                      ]}
                      title={""}
                      size={"xsm"}
                      border={"br_square_round_1"}
                      onChange={() => {}}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="col">textarea</th>
                <td>
                  <Textarea
                    placeholder={"내용을 작성해주세요."}
                    title={""}
                    taSize={"xsm"}
                    border={"br_square_round_1"}
                  />
                </td>
              </tr>
              <tr>
                <th scope="col">첨부파일</th>
                <td>
                  <FileInputOuter
                    multiple
                    ref={outer1Ref}
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"xsm"}
                    compName={""}
                    isAvailableDeleteFile
                    border="br_square_round_1"
                    labelTitle="outer fileInput"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* text auto play */}
        <div className={style.txtplay}>
          <strong>
            text auto play text auto play text auto play text auto play text
            auto play
          </strong>
          <strong>
            text auto play text auto play text auto play text auto play text
            auto play
          </strong>
        </div>
        {/* scrollDown Ani */}
        <div className={style.scrollDown}>
          <img
            src="https://www.nstel.co.kr/asset/img/main/scrollCircle.png"
            alt="scroll down"
          />
          <FaArrowDown />
        </div>
      </div>
    </>
  );
}
