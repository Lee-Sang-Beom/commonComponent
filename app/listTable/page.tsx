"use client";
import ListTable, { ListTableHeader } from "@/components/ListTable/ListTable";
import style from "./ListTable.module.scss";
import Chip from "@/components/Chip/Chip";
import { FaPaperclip } from "react-icons/fa6";

interface dataType {
  rowId: number;
  title: string;
  content: string;
  categoryEnu: { type: string; name: string };
  stateEnu: { type: string; name: string };
  year: string;
  count: number;
  entType: { type: string; name: string };
  imgUrl?: string;
}

export default function ListTablePage() {
  const data: dataType[] = [
    {
      rowId: 1,
      title: "제목1",
      content:
        "asdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfs",
      categoryEnu: { type: "notice", name: "공지사항" },
      stateEnu: { type: "ing", name: "진행중" },
      year: "2024",
      count: 123,
      entType: { type: "ent", name: "기업" },
      imgUrl: "/img/img_banner2.jpg",
    },
    {
      rowId: 2,
      title: "제목2",
      content: "내용222",
      categoryEnu: { type: "qna", name: "Q&A" },
      stateEnu: { type: "before", name: "진행전" },
      year: "2024",
      count: 456,
      entType: { type: "ent", name: "기업" },
      imgUrl: "/img/img_banner3.jpeg",
    },
    {
      rowId: 3,
      title: "제목3",
      content:
        "내용 1231231asdf12312123asdsddf123312123123231231123123dfaddfsfdfdfsdsdf",
      categoryEnu: { type: "event", name: "행사" },
      stateEnu: { type: "complete", name: "진행완료" },
      year: "2024",
      count: 789,
      entType: { type: "ent", name: "기업" },
      imgUrl: "/img/img_banner1.jpg",
    },
    {
      rowId: 4,
      title: "제목4",
      content: "내용444",
      categoryEnu: { type: "qna", name: "Q&A" },
      stateEnu: { type: "before", name: "진행전" },
      year: "2024",
      count: 111,
      entType: { type: "ent", name: "기업" },
      imgUrl: "/img/img_banner2.jpg",
    },
  ];
  const header: ListTableHeader[] = [
    {
      value: "rowId",
      type: "rowId",
    },
    {
      value: "categoryEnu",
      type: "chip",
      accessFn: (row: dataType) => {
        return (
          <>
            <Chip
              chipData={{
                group: "",
                name: row.categoryEnu.name,
                value: row.categoryEnu.type,
              }}
              title={""}
              color="black"
              chipSize="sm"
              border="br_square_round_1"
            />
          </>
        );
      },
    },
    {
      value: "stateEnu",
      type: "chip",
      accessFn: (row: dataType) => {
        return (
          <>
            <Chip
              chipData={{
                group: "",
                name: row.stateEnu.name,
                value: row.stateEnu.type,
              }}
              title={""}
              chipSize="sm"
              border="br_square_round_1"
            />
          </>
        );
      },
    },
    {
      value: "content",
      type: "content",
    },
    {
      value: "title",
      accessFn: (row: dataType) => {
        return <p>{row.title} </p>;
      },
    },
    {
      value: "content",
      type: "bottom",
      accessFn: (row: dataType) => {
        return [
          { key: "공과대학", value: row.stateEnu.name },
          { key: "과제책임자", value: row.entType.name },
          { key: "연도", value: row.year },
          { key: "조회수", value: row.count },
        ];
      },
    },
  ];

  const header2: ListTableHeader[] = [
    {
      value: "rowId",
      type: "rowId",
    },
    {
      value: "",
      type: "picture",
      accessFn: (row: dataType) => {
        return (
          <a
            target="_blank"
            href="https://www.naver.com"
            title="새 창으로 열림"
          >
            {" "}
            <img src={`${row.imgUrl}`} />
          </a>
        );
      },
    },
    {
      value: "categoryEnu",
      type: "chip",
      accessFn: (row: dataType) => {
        return (
          <>
            <Chip
              chipData={{
                group: "",
                name: row.categoryEnu.name,
                value: row.categoryEnu.type,
              }}
              title={""}
              color="black"
              chipSize="sm"
              border="br_square_round_1"
            />
          </>
        );
      },
    },
    {
      value: "stateEnu",
      type: "chip",
      accessFn: (row: dataType) => {
        return (
          <>
            <Chip
              chipData={{
                group: "",
                name: row.stateEnu.name,
                value: row.stateEnu.type,
              }}
              title={""}
              chipSize="sm"
              border="br_square_round_1"
            />
          </>
        );
      },
    },
    {
      value: "content",
      type: "content",
    },
    {
      value: "title",
      accessFn: (row: dataType) => {
        return <p>{row.title} </p>;
      },
    },
    {
      value: "content",
      type: "bottom",
      accessFn: (row: dataType) => {
        return [
          { key: "공과대학", value: row.stateEnu.name },
          { key: "과제책임자", value: row.entType.name },
          { key: "연도", value: row.year },
          { key: "조회수", value: row.count },
        ];
      },
    },
  ];
  return (
    <>
      <div className={style.box}>
        <h3>list type</h3>
        <ListTable
          data={data}
          headers={header}
          tableType={"list"}
          tableCaption={""}
          itemTitle={""}
          ref={null}
        />
        <br />
        <br />
        <h3>card type</h3>
        <br />
        <ListTable
          data={data}
          headers={header}
          tableType={"card"}
          tableCaption={""}
          itemTitle={""}
          ref={null}
        />
        <br />
        <br />
        <h3>gallery type</h3>
        <br />
        <ListTable
          data={data}
          headers={header2}
          tableType={"card"}
          tableCaption={""}
          itemTitle={""}
          ref={null}
        />
      </div>
    </>
  );
}
