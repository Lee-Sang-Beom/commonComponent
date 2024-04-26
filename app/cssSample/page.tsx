"use client";
import Input from "@/components/Input/Input";
import style from "./page.module.scss";
import { FaArrowDown } from "react-icons/fa6";
import FileInput from "@/components/FileInput/FileInput";
import Button from "@/components/Button/Button";
import { SubjectOutlined } from "@mui/icons-material";

export default function CssAnimation() {
  return (
    <>
      <div className={style.wrap}>
        {/* morphism & Container Query*/}
        <div className={style.container}>
          <div className={style.morphism}>
            <div className={style.box}>morphism</div>
            <div className={style.box}>Container Query</div>
          </div>
        </div>
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
                <td scope="row" data-label="타이틀1">
                  텍스트1
                </td>
                <td data-label="타이틀2">텍스트2</td>
                <td data-label="타이틀3">텍스트3</td>
                <td data-label="타이틀4">텍스트4</td>
                <td data-label="타이틀5">텍스트5</td>
              </tr>
              <tr>
                <td scope="row" data-label="타이틀1">
                  텍스트1
                </td>
                <td data-label="타이틀2">텍스트2</td>
                <td data-label="타이틀3">텍스트3</td>
                <td data-label="타이틀4">텍스트4</td>
                <td data-label="타이틀5">텍스트5</td>
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
              >
                목록
              </Button>
            </div>
          </div>
          <ul className={style.prevnext}>
            <li className={style.prev}>
              <span>이전글</span>
              <a href="">2023년도 한국전력기술 사전정보공표 항목(7.1 기준)</a>
            </li>
            <li className={style.next}>
              <span>다음글</span>
              <a href="">2023년도 한국전력기술 사전정보공표 항목(7.1 기준)</a>
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
                <th scope="col">작성자</th>
                <td>
                  <Input
                    placeholder={"sm br_square_round_1"}
                    title={""}
                    inpSize={"sm"}
                    border={"br_square_round_1"}
                  />
                </td>
              </tr>
              <tr>
                <th scope="col">제목</th>
                <td>
                  <Input
                    placeholder={"sm br_square_round_1"}
                    title={""}
                    inpSize={"sm"}
                    border={"br_square_round_1"}
                  />
                </td>
              </tr>
              <tr>
                <th scope="col">내용작성</th>
                <td>에디터가 들어갈 공간입니다.</td>
              </tr>
              <tr>
                <th scope="col">첨부파일</th>
                <td>
                  <FileInput
                    multiple
                    id={""}
                    onFile={() => {}}
                    onDelete={() => {}}
                    size={"sm"}
                    border="br_square_round_1"
                    compName={""}
                    isAvailableDeleteFile
                    btnType="inner"
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
          <img src="https://www.nstel.co.kr/asset/img/main/scrollCircle.png" />
          <FaArrowDown />
        </div>
      </div>
    </>
  );
}
